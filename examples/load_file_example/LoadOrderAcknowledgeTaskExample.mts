#!/usr/bin/env -S npx ts-node --esm --transpile-only

import path from "path";
import { temporaryFileTask } from "tempy";
import * as csv from "fast-csv";
import * as XLSX from "xlsx";
import FormData from "form-data";
import { fs } from "zx";

import { WorkflowType } from "../../src/api/APIContext.ts";
import { Config } from "../../src/configs/Config.ts";
import { AbstractLoadFileTask } from "../../src/task/AbstractLoadFileTask.ts";
import { Console } from "../../src/utils/Console.ts";
import { DefaultLoadOrderAckSchema } from "./schemas/DefaultLoadOrderAckSchema.ts";
import { FileItemInterface } from "../../src/task/LoadFileTaskInterfaces.ts";
import { LoadFileSchemaInterface } from "../../src/data_mapping/SchemaInterfaces.ts";
import { EventTypeEnumString } from "../../src/api/EdiEvent.ts";
import { InternalError } from "../../src/exceptions/InternalError.ts";

type ItemPackagingTypeEnum = "PALLET" | "CARDBOARD_BOX" | "EACH";
type OrderTypeEnum = "ENTRY" | "EXIT";

interface OrderItemInterface {
  item_reference: string;
  batch_name?: string;
  serial_number: string;
  expected_quantity: number;
  item_packaging_type: ItemPackagingTypeEnum;
  serial_shipping_container_code?: string;
  designation: string;
}

interface OrderInterface {
  shipper_order_reference: string;
  warehouse_id: string;
  shipper_account_id: string;
  order_type: OrderTypeEnum;
  planned_execution_datetime_range: {
    datetime_from: string;
    datetime_to: string;
  };
  transport_management_owner: "PROVIDER" | "SHIPPER";
  order_items: OrderItemInterface[];
}

interface ExitOrderInterface extends OrderInterface {
  exit_final_recipient: string;
  exit_final_recipient_address_line1: string;
  exit_final_recipient_address_zip: string;
  exit_final_recipient_address_city: string;
  exit_final_recipient_address_country_code: string;
  exit_final_recipient_address_details: string;
  exit_final_recipient_address_details_2: string;
  exit_final_recipient_address_details_3: string;
}

export { ExitOrderInterface, OrderInterface, OrderItemInterface, ItemPackagingTypeEnum, OrderTypeEnum };

export class LoadOrderAcknowledgeTaskExample extends AbstractLoadFileTask<
  OrderInterface | ExitOrderInterface
> {
  protected displayUsages() {
    Console.log("Usage: ./LoadOrderAcknowledgeTaskExample.mts [OPTIONS]");
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
      Config.get().edi.wmsPathWmsToSpacefillDir as string,
      `(CIN|CSO)_${Config.get().edi.wmsAgencyCode}_${Config.get().edi.wmsShipperID}_.*\\.(TXT|txt)$`,
    );

    const filesList = await this.transfer.listDirWithFilter(filter);
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
      const stream = csv
        .parse({ headers: false, delimiter: ";" })
        .on("error", (error) => {
          Console.error(error);
          reject(error);
        })
        .on("data", (row) => {
          parsedData.push(row);
        })
        .on("finish", (rowCount: number) => {
          Console.info(`Parsed ${rowCount} rows`);
          parsedData.shift(); // remove headers line
          return resolve(parsedData);
        });
      stream.write(fileContent);
      stream.end();
    });
  }

  async dataProcessing(mappedData: OrderInterface[] | ExitOrderInterface[]): Promise<void> {
    if (!this.sdk.client || !this.sdk.ediEvent) {
      throw new InternalError("SDK is not well initiazed - client or ediEvent missing");
    }
    for (const currentOrder of mappedData) {
      const existingOrdersResponse = await this.sdk.client.get_v1_logistic_management_order_list({
        shipper_account_id: Config.get().edi.wmsShipperAccountId,
        shipper_order_reference: currentOrder.shipper_order_reference,
        warehouse_id: Config.get().edi.wmsWarehouseId,
      });

      let orderId: string;
      // Create order if not exists
      if (existingOrdersResponse.data.total === 0) {
        const createdOrder = await this.sdk.client.post_v1_logistic_management_warehouse_creates_order_action(
          null,
          currentOrder,
        );
        orderId = createdOrder.data.id;
      } else {
        const firstElement = existingOrdersResponse.data.items.shift();
        if (!firstElement) {
          continue;
        }
        orderId = firstElement.id;

        const allowedStatuses = [
          "ORDER_IS_READY_TO_BE_EXECUTED_STATE",
          "PREPARATION_FINISHED_STATE",
          "PREPARATION_STARTED_STATE",
        ];

        if (!allowedStatuses.includes(firstElement.status)) {
          Console.warn(`Order [${currentOrder.shipper_order_reference}] ignored - invalid order status`);

          this.sdk.ediEvent.send(
            EventTypeEnumString.PRECONDITION_FAILED_ERROR,
            `Order [${currentOrder.shipper_order_reference}] is in status ${
              firstElement.status
            } which is not an allowed status (${allowedStatuses.join(",")}).`,
          );
          continue;
        }
      }

      // Acknowledge the order
      await this.sdk.client.post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action(
        {
          order_id: orderId,
        },
        {
          order_effective_executed_at: currentOrder.planned_execution_datetime_range.datetime_from,
          order_items: currentOrder.order_items.map((orderItem) => {
            const actual_quantity = orderItem.expected_quantity;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { expected_quantity, ...tmpOrderItem } = orderItem;
            return {
              ...tmpOrderItem,
              actual_quantity: actual_quantity,
            };
          }),
        },
      );

      if (
        !process.env?.WMS_LOGIS_SERIAL_NUMBER_ENABLED ||
        process.env?.WMS_LOGIS_SERIAL_NUMBER_ENABLED !== "1"
      ) {
        Console.info(
          `Serial number skipped because WMS_LOGIS_SERIAL_NUMBER_ENABLED=${process.env?.WMS_LOGIS_SERIAL_NUMBER_ENABLED}`,
        );
        return;
      }
      // Send serial number export is option is enabled
      await temporaryFileTask(async (tempFilePath) => {
        const data = [
          ["Order reference", "Item reference", "Item designation", "Batch name", "Serial number"],
        ];

        currentOrder.order_items.forEach((orderItem) => {
          if (orderItem.serial_number) {
            data.push([
              currentOrder.shipper_order_reference,
              orderItem.item_reference,
              orderItem.designation,
              orderItem.batch_name as string,
              orderItem.serial_number,
            ]);
          }
        });

        if (!(data.length > 1)) {
          Console.warn("No serial number to export - skipped");
          return;
        }

        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Serial numbers");

        XLSX.writeFile(wb, tempFilePath, { compression: true });

        const formData = new FormData();
        formData.append("file", fs.createReadStream(tempFilePath), {
          filename: `${currentOrder.shipper_order_reference}_serial_numbers.xlsx`,
        });

        await this.sdk.upload("post", `/v1/logistic_management/orders/${orderId}/documents/`, formData);
      });
      Console.confirm(
        `Data processed for the order [id=${orderId} / shipper_order_reference=${currentOrder.shipper_order_reference}]`,
      );
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onProcessingFileSuccess(
    targetFileItem: FileItemInterface,
    _preparedData: object[],
    mappedData: OrderInterface[] | ExitOrderInterface[],
  ): Promise<void> {
    this.transfer.moveToArchiveDir(targetFileItem.file);
  }

  async onProcessingFileError(targetFileItem: FileItemInterface): Promise<void> {
    this.transfer.moveToErrorDir(targetFileItem.file);
  }
}

const task = new LoadOrderAcknowledgeTaskExample();
task.run();
