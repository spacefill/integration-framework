#!/usr/bin/env -S npx ts-node --esm --transpile-only --compilerOptions '{"moduleResolution":"nodenext","module":"NodeNext","target":"esnext", "allowImportingTsExtensions": true}'

import path from "path";
import { WorkflowType } from "../../src/api/APIContext.ts";
import { Config } from "../../src/configs/Config.ts";
import AbstractLoadFileTask from "../../src/task/AbstractLoadFileTask.ts";
import Console from "../../src/utils/Console.ts";

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
    return WorkflowType.IMPORT_INVENTORY_ADJUSTEMENT;
  }

  async getFilesList(): Promise<string[]> {
    const filter = path.join(
      Config.get().edi.wmsPathWmsToSpacefillDir,
      `(CIN|CSO)_${Config.get().edi.wmsAgencyCode}_${Config.get().edi.wmsShipperID}_.*\\.(TXT|txt)$`
    );

    return await this.transfert.listDirWithFilter(filter);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async prepareData(_fileContent: string): Promise<OrderAcknowledge[]> {
    throw new Error("Method not implemented.");
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
