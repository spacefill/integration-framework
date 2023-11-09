#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { DateTime } from "luxon";
import * as csv from 'fast-csv';

import { Config } from '../../src/configs/Config.ts';
import { AbstractGenerateFileTask } from '../../src/task/AbstractGenerateFileTask.ts';
import Console from '../../src/utils/Console.ts';
import { InitialDataItem } from "../../src/task/GenerateFileTasklnterfaces.ts";
import { DefaultGenerateMasterItemsSchema } from "./schemas/DefaultGenerateMasterItemsSchema.ts";
import { WorkflowType } from "../../src/api/APIContext.ts";
import InternalError from "../../src/exceptions/InternalError.ts";
import { Argument } from "../../src/task/BaseCommand.ts";
import { fs } from "zx";
import { GenerateFileSchemaInterface } from "../../src/data_mapping/SchemaInterfaces.ts";

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

  /**
   * Overload common arguments
   * @returns Argument[]
   */
  protected getArgsList(): Argument[] {
    return [
      ...super.getArgsList(),
      {
        argName: '--disable-is-transfered-to-wms-update',
        argDescription: '[Test Only] Disable the update of transfered_to_wms_at field, to run the script multiple times.'
      },
      {
        argName: '--headers',
        argDescription: '[Test Only] Add headers in file output.'
      }
    ];
  }

  getWorkflowType(): WorkflowType {
    return WorkflowType.EXPORT_ITEM_REFERENCES;
  }

  getDataSchema(): GenerateFileSchemaInterface<MasterItemInterface> {
    return new DefaultGenerateMasterItemsSchema();
  }

  initFilesGeneration(): InitialDataItem<MasterItemInterface>[] {
    return [
      // Only one file to be generated, so only one object returned.
      {
        initialData: []
      }
    ]
  }

  async prepareFileData(offset: number = 0): Promise<MasterItemInterface[]> {
    let masterItems = this.currentFileConfiguration?.initialData ?? [];

    await this.sdk.client.get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get(
      {
        offset: offset,
        limit: Config.get().spacefillApi.defaultPaginationLimit,
        is_transfered_to_wms: false,
        shipper_account_id: Config.get().edi.wmsShipperAccountId
      }
    )
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
        throw new InternalError(`Error during prepareFileData - ${err?.response?.status} - ${err?.response?.statusText} - ${err?.response?.data}`);
      });

    return masterItems as MasterItemInterface[];
  }

  async generateFile(mappedData: object[], tempFilePath: string): Promise<void> {

    const csvStream = csv.format({
      headers: this.argv?.['headers'] ? true : false,
      delimiter: ';'
    });

    const writeStream = fs.createWriteStream(tempFilePath);

    return await new Promise<void>((resolve, reject) => {
      csvStream.pipe(writeStream)
        .once('finish', () => {
          Console.debug(`Write stream end for ${tempFilePath}`);
          resolve();
        })
        .once('error', (error) => {
          Console.error(error);
          reject(error);
        });

      const fileDescriptor = this.getDataSchema().fileDescriptor;

      if (this.argv?.['headers']) {
        const headersLine = new Array(fileDescriptor.csvTotalColumnNumber);
        for (const field of Object.keys(fileDescriptor.columnsPosition)) {
          headersLine[fileDescriptor.columnsPosition[field]] = field;
        }
        csvStream.write(headersLine);
      }

      for (const mappedItem of mappedData) {
        // Init line from max number of columns
        const line = new Array(fileDescriptor.csvTotalColumnNumber);

        for (const field in mappedItem) {
          line[fileDescriptor.columnsPosition[field]] = mappedItem[field];
        }
        csvStream.write(line);
      }
      csvStream.end();
    });
  }

  async sendFile(tempFilePath: string): Promise<string> {
    const targetFileName = `${Config.get().edi.wmsPathSpacefillToWmsDir}/ARTICLE_${DateTime.now().toFormat('yyyyMMdd_HHmmss')}.txt`;
    this.transfert.upload(tempFilePath, targetFileName);
    return targetFileName;
  }

  async postFileSending(): Promise<void> {
    let errorFound = false;

    if (this.argv?.['disable-is-transfered-to-wms-update']) {
      Console.debug("Skip transfered_to_wms_at update");
      return;
    }

    for (const item of this.currentFileConfiguration.initialData) {
      await this.sdk.client.patch_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___patch(
        { master_item_id: `${item.id}` },
        { transfered_to_wms_at: DateTime.now().toFormat('yyyy-MM-dd\'T\'HH:mm:ss\'Z\'') }
      ).catch(() => {
        Console.error(`Failed to patch transfered to wms at for master_item_id: ${item.id}`);
        errorFound = true;
      });
    }

    if (errorFound) {
      throw new Error("One or more errors during patch master items");
    }
  }
}

const task = new GenerateMasterItemsTaskExample();
task.run();
