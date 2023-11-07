#!/usr/bin/env -S npx ts-node --esm --transpile-only --compilerOptions '{"moduleResolution":"nodenext","module":"NodeNext","target":"esnext", "allowImportingTsExtensions": true}'

import path from "path";
import { WorkflowType } from "../../src/api/APIContext.ts";
import { Config } from "../../src/configs/Config.ts";
import AbstractLoadFileTask from "../../src/task/AbstractLoadFileTask.ts";
import Console from "../../src/utils/Console.ts";
import DefaultLoadOrderAckSchema from "./schemas/DefaultLoadOrderAckSchema.ts";
import { FileItemInterface } from "../../src/task/LoadFileTaskInterfaces.ts";
import { parse } from "fast-csv";

interface OrderAcknowledge {
  order_id: number
}

export { OrderAcknowledge };

export default class LoadOrderAcknowledgeTaskExample extends AbstractLoadFileTask<OrderAcknowledge> {

  protected displayUsages() {
    Console.log("Usage: ./LoadOrderAcknowledgeTaskExample.mts [OPTIONS]")
    super.displayUsages();
  }

  getWorkflowType(): WorkflowType {
    return WorkflowType.IMPORT_ORDER_ACK;
  }

  async getFilesList(): Promise<FileItemInterface<OrderAcknowledge>[]> {
    const filter = path.join(
      Config.get().edi.wmsPathWmsToSpacefillDir,
      `(CIN|CSO)_${Config.get().edi.wmsAgencyCode}_${Config.get().edi.wmsShipperID}_.*\\.(TXT|txt)$`
    );
    const schema = new DefaultLoadOrderAckSchema();

    const filesList = await this.transfert.listDirWithFilter(filter);
    return filesList.map((filename) => ({ file: filename, schema: schema }));
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
  async dataProcessing(_preparedData: OrderAcknowledge[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async postDataProcessing(): Promise<void> {
    Console.debug("No post actions");
  }

}

const task = new LoadOrderAcknowledgeTaskExample();
task.run();
