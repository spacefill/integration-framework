#!/usr/bin/env -S npx ts-node --esm --transpile-only --compilerOptions '{"moduleResolution":"nodenext","module":"NodeNext","target":"esnext", "allowImportingTsExtensions": true}'

import { DateTime } from "luxon";
import { createObjectCsvWriter } from "csv-writer";


import { Config } from '../../src/configs/Config.ts';
import { AbstractGenerateFileTask } from '../../src/task/AbstractGenerateFileTask.ts';
import Console from '../../src/utils/Console.ts';
import { InitialDataItem } from "../../src/task/GenerateFileTasklnterfaces.ts";
import { DefaultGenerateMasterItemsSchema } from "./schemas/DefaultGenerateMasterItemsSchema.ts";

interface MasterItemInterface {
  id: number,
  item_reference: string,
  designation: string,
  each_quantity_by_cardboard_box: number,
  each_quantity_by_pallet: number,
  cardboard_box_height_in_cm: number,
  cardboard_box_width_in_cm: number,
  cardboard_box_length_in_cm: number,
  cardboard_box_gross_weight_in_kg: number,
  cardboard_box_net_weight_in_kg: number,
  cardboard_box_barcode: string,
  pallet_barcode: string,
}

export { MasterItemInterface };
export class GenerateMasterItemsTaskExample extends AbstractGenerateFileTask<MasterItemInterface> {

  protected displayUsages() {
    Console.log("Usage: ./GenerateMasterItemsTaskExample.mts [OPTIONS]")
    super.displayUsages();
  }

  initFilesGeneration(): InitialDataItem<MasterItemInterface>[] {
    const schema = new DefaultGenerateMasterItemsSchema();
    return [
      {
        schema: schema,
        initialData: []
      }
    ]
  }
  async prepareFileData(offset: number = 0): Promise<MasterItemInterface[]> {
    let masterItems = this.currentFileConfiguration?.initialData ?? [];

    await this.sdk.get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get({
      offset: offset,
      limit: Config.get().spacefillApi.defaultPaginationLimit,
      is_transfered_to_wms: false,
      shipper_account_id: Config.get().edi.wmsShipperAccountId
    })
      .then(async ({ data }) => {
        const tmpItems = data?.items as unknown as MasterItemInterface[];
        masterItems = [...masterItems, ...tmpItems];

        this.currentFileConfiguration = {
          ...this.currentFileConfiguration,
          initialData: masterItems
        }

        if (data?.next) {
          masterItems = await this.prepareFileData(offset + Config.get().spacefillApi.defaultPaginationLimit);
        }
      })
      .catch(err => {
        Console.error(`Status: ${err?.response?.status} - ${err?.response?.statusText}`)
        Console.error(err?.response?.data)
        process.exit(1);
      });

    return masterItems as MasterItemInterface[];
  }

  async generateFile(mappedData: object[], tempFilePath: string): Promise<void> {
    const header = Object.keys(mappedData[0]).map((key) => {
      return {
        id: key,
        title: key
      }
    });

    const csvWriter = createObjectCsvWriter({
      path: tempFilePath,
      header: header,
      fieldDelimiter: ';'
    });

    await csvWriter.writeRecords(mappedData)
  }

  async sendFile(tempFilePath: string): Promise<string> {
    const targetFileName = `${Config.get().edi.wmsPathSpacefillToWmsDir}/ARTICLE_${DateTime.now().toFormat('yyyymmdd_HHmmss')}.txt`;
    this.transfert.upload(tempFilePath, targetFileName);
    return targetFileName;
  }

  async postAction(): Promise<void> {
    this.currentFileConfiguration.initialData.forEach((item) => {
      this.sdk.patch_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___patch(
        { master_item_id: `${item.id}`},
        { transfered_to_wms_at: DateTime.now().toFormat('yyyymmdd_HHmmss') }
      )
    });
  }
}

const task = new GenerateMasterItemsTaskExample();
task.run();
