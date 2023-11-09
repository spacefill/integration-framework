#!/usr/bin/env -S npx ts-node --esm --transpile-only

import path from "path";
import { temporaryFileTask } from "tempy";
import * as csv from 'fast-csv';
import * as XLSX from 'xlsx';

import { WorkflowType } from "../../src/api/APIContext.ts";
import { Config } from "../../src/configs/Config.ts";
import AbstractLoadFileTask from "../../src/task/AbstractLoadFileTask.ts";
import Console from "../../src/utils/Console.ts";
import DefaultLoadOrderAckSchema from "./schemas/DefaultLoadOrderAckSchema.ts";
import { FileItemInterface } from "../../src/task/LoadFileTaskInterfaces.ts";
import { LoadFileSchemaInterface } from "../../src/data_mapping/SchemaInterfaces.ts";
import { EventTypeEnumString } from "../../src/api/EdiEvent.ts";
import { fs } from "zx";
import FormData from "form-data";


type ItemPackagingTypeEnum = "PALLET" | "CARDBOARD_BOX" | "EACH";
type OrderTypeEnum = "ENTRY" | "EXIT";

interface OrderItemInterface {
  item_reference: string,
  batch_name?: string,
  serial_number: string,
  expected_quantity: number,
  item_packaging_type: ItemPackagingTypeEnum,
  serial_shipping_container_code?: string,
  designation: string,
}

interface OrderInterface {
  shipper_order_reference: string,
  warehouse_id: string,
  shipper_account_id: string,
  order_type: OrderTypeEnum,
  planned_execution_datetime_range: {
    datetime_from: string,
    datetime_to: string
  },
  transport_management_owner: "PROVIDER" | "SHIPPER",
  order_items: OrderItemInterface[]
}

interface ExitOrderInterface extends OrderInterface {
  exit_final_recipient: string,
  exit_final_recipient_address_line1: string,
  exit_final_recipient_address_zip: string,
  exit_final_recipient_address_city: string,
  exit_final_recipient_address_country_code: string,
  exit_final_recipient_address_details: string,
  exit_final_recipient_address_details_2: string,
  exit_final_recipient_address_details_3: string,
}

export { ExitOrderInterface, OrderInterface, OrderItemInterface, ItemPackagingTypeEnum, OrderTypeEnum };


export default class LoadOrderAcknowledgeTaskExample extends AbstractLoadFileTask<OrderInterface | ExitOrderInterface> {

  protected displayUsages() {
    Console.log("Usage: ./LoadOrderAcknowledgeTaskExample.mts [OPTIONS]")
    super.displayUsages();
  }

  getWorkflowType(): WorkflowType {
    return WorkflowType.IMPORT_ORDER_ACK;
  }

  getDataSchema(): LoadFileSchemaInterface<OrderInterface | ExitOrderInterface> {
    return new DefaultLoadOrderAckSchema();
  }

  async getFilesList(): Promise<FileItemInterface[]> {
    const filter = path.join(
      Config.get().edi.wmsPathWmsToSpacefillDir,
      `(CIN|CSO)_${Config.get().edi.wmsAgencyCode}_${Config.get().edi.wmsShipperID}_.*\\.(TXT|txt)$`
    );

    const filesList = await this.transfert.listDirWithFilter(filter);
    return filesList.map((filename) => {
      const fileItem: FileItemInterface = {
        file: filename,
      };
      return fileItem;
    });
  }

  async parseRawData(fileContent: string): Promise<object[]> {
    const parsedData: object[] = [];
    return await new Promise<object[]>((resolve, reject) => {
      const stream = csv.parse({ headers: false, delimiter: ';' })
        .on('error', (error) => {
          Console.error(error);
          reject(error);
        })
        .on('data', (row) => {
          parsedData.push(row);
        })
        .on('finish', (rowCount: number) => {
          Console.info(`Parsed ${rowCount} rows`);
          parsedData.shift(); // remove headers line
          return resolve(parsedData);
        });
      stream.write(fileContent);
      stream.end();
    });
  }

  async dataProcessing(mappedData: OrderInterface[] | ExitOrderInterface[]): Promise<void> {
    for (const currentOrder of mappedData) {

      const existingOrdersResponse = await this.sdk.client.get_v1_logistic_management_order_list_v1_logistic_management_orders__get({
        shipper_account_id: Config.get().edi.wmsShipperAccountId,
        shipper_order_reference: currentOrder.shipper_order_reference,
        warehouse_id: Config.get().edi.wmsWarehouseId,
      });

      let orderId: string;
      if (existingOrdersResponse.data.total === 0) {
        const createdOrder = await this.sdk.client.post_v1_logistic_management_warehouse_creates_order_action_v1_logistic_management_orders_warehouse_creates_order_action_post(
          null,
          currentOrder
        );
        orderId = createdOrder.data.id;
      } else {
        const firstElement = existingOrdersResponse.data.items.shift();
        orderId = firstElement.id;

        const allowedStatuses = [
          'ORDER_IS_READY_TO_BE_EXECUTED_STATE',
          'PREPARATION_FINISHED_STATE',
          'PREPARATION_STARTED_STATE',
        ];

        if (!allowedStatuses.includes(firstElement.status)) {
          Console.warn(`Order [${currentOrder.shipper_order_reference}] ignored`);

          this.sdk.ediEvent.send(EventTypeEnumString.PRECONDITION_FAILED_ERROR,
            `Order [${currentOrder.shipper_order_reference}] is in status ${firstElement.status} which is not an allowed status (${allowedStatuses.join(',')}).`
          );
          continue;
        }
      }

      await this.sdk.client.post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action_v1_logistic_management_orders__order_id__warehouse_acknowledges_receipt_of_order_action_post(
        {
          order_id: orderId
        },
        {
          order_effective_executed_at: currentOrder.planned_execution_datetime_range.datetime_from,
          order_items: currentOrder.order_items.map((order_item) => {
            const actual_quantity = order_item.expected_quantity;
            delete order_item.expected_quantity;
            return {
              ...order_item,
              actual_quantity: actual_quantity
            }
          })
        }
      );

      if (!process.env?.WMS_LOGIS_SERIAL_NUMBER_ENABLED || process.env?.WMS_LOGIS_SERIAL_NUMBER_ENABLED !== '1') {
        Console.info(`Serial number skipped because WMS_LOGIS_SERIAL_NUMBER_ENABLED=${process.env?.WMS_LOGIS_SERIAL_NUMBER_ENABLED}`);
        return;
      }

      await temporaryFileTask(async (tempFilePath) => {

        // Données à exporter
        const data = [["Order reference", "Item reference", "Item designation", "Batch name", "Serial number"]];

        currentOrder.order_items.forEach((orderItem) => {
          if (orderItem.serial_number) {
            data.push([
              currentOrder.shipper_order_reference,
              orderItem.item_reference,
              orderItem.designation,
              orderItem.batch_name,
              orderItem.serial_number
            ]);
          }
        });

        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Serial numbers');

        // Convertir le classeur en un tableau de bytes
        XLSX.writeFile(wb, tempFilePath, { compression: true });

        const formData = new FormData();
        formData.append('file', `${currentOrder.shipper_order_reference}_serial_numbers.xlsx`);

        await this.sdk.client.post_v1_logistic_management_order_upload_document_v1_logistic_management_orders__order_id__documents__post(
          {
            order_id: orderId
          },
          {
            file: fs.readFileSync(tempFilePath) // @todo : fix that
          }
        );
      });

    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postDataProcessing(_preparedData: object[], mappedData: OrderInterface[] | ExitOrderInterface[]): Promise<void> {

  }

}

const task = new LoadOrderAcknowledgeTaskExample();
task.run();
