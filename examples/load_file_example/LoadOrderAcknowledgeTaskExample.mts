#!/usr/bin/env -S npx ts-node --esm --transpile-only --compilerOptions '{"moduleResolution":"nodenext","module":"NodeNext","target":"esnext", "allowImportingTsExtensions": true}'

import path from "path";
import { WorkflowType } from "../../src/api/APIContext.ts";
import { Config } from "../../src/configs/Config.ts";
import AbstractLoadFileTask from "../../src/task/AbstractLoadFileTask.ts";
import Console from "../../src/utils/Console.ts";
import DefaultLoadOrderAckSchema from "./schemas/DefaultLoadOrderAckSchema.ts";
import { FileItemInterface } from "../../src/task/LoadFileTaskInterfaces.ts";
import { parse } from "fast-csv";
import { LoadFileSchemaInterface } from "../../src/data_mapping/SchemaInterfaces.ts";

interface OrderItemInterface {
  item_reference: string,
  batch_name?: string,
  serial_number: string,
  actual_quantity: number,
  item_packaging_type: string,
  serial_shipping_container_code?: string,
  designation: string,
}

interface OrderInterface {
  order_type: string,
  shipper_order_reference: string,
  planned_execution_datetime_range: {
    datetime_from: string,
    datetime_to: string
  },
  transport_management_owner: string,
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

export { ExitOrderInterface, OrderInterface, OrderItemInterface };


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
      const stream = parse({ headers: false, delimiter: ';' })
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async dataProcessing(_preparedData: OrderInterface[] | ExitOrderInterface[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async postDataProcessing(): Promise<void> {
    Console.debug("No post actions");
  }

}

const task = new LoadOrderAcknowledgeTaskExample();
task.run();
