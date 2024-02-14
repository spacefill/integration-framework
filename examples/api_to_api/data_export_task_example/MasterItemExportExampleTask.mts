#!/usr/bin/env -S npx ts-node --esm --transpile-only
import { DateTime } from "luxon";

import {
  Argument,
  Config,
  Console,
  DataExportSchemaInterface,
  EntityTypeEnum,
  EventTypeEnumString,
  InternalError,
  WorkflowType,
} from "../../../src/index.ts";
import { AbstractApiDataExchangeTask } from "../../../src/task/AbstractApiDataExchangeTask.ts";
import { InitialDataItemToExport } from "../../../src/task/ExportDataToApiTaskInterface.ts";
import { PulpoAPIWrapper } from "../PulpoAPIWrapper.mts";

import { DefaultExportMasterItemsSchema } from "./schemas/DefaultExportMasterItemsSchema.ts";

interface MasterItemInterface {
  id: string;
  item_reference: string;
  designation: string;
  each_barcode: string;
  each_quantity_by_cardboard_box: number;
  each_quantity_by_pallet: number;
  cardboard_box_quantity_by_pallet: number;
  cardboard_box_height_in_cm: number;
  cardboard_box_width_in_cm: number;
  cardboard_box_length_in_cm: number;
  cardboard_box_gross_weight_in_kg: number;
  cardboard_box_net_weight_in_kg: number;
  cardboard_box_barcode: string;
  each_net_weight_in_kg: number;
  each_height_in_cm: number;
  each_width_in_cm: number;
  each_length_in_cm: number;
  each_volume_in_cm3: number;
  pallet_barcode: string;
  archived_at: string;
  edi_wms_id: string;
}

interface PulpoProductInterface {
  spacefill_id?: string;
  spacefill_edi_wms_id?: string;
  active: boolean;
  description: string;
  name: string;
  sku: string;
  barcodes: string[];
  cost_price: string;
  management_type: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  volume: number;
  purchase_measure_units: string;
  sales_measure_units: string;
  units_per_sales_package: number;
  units_per_purchase_package: number;
  minimum_purchase_unit: number;
  minimum_sales_unit: number;
  units_per_pallet?: number;
}

interface InitialMasterItemDataToExport<T> extends InitialDataItemToExport<T> {
  filter?: object;
}

export { MasterItemInterface, PulpoProductInterface };

export class MasterItemExportExampleTask extends AbstractApiDataExchangeTask<MasterItemInterface> {
  protected currentDataExportConfiguration: InitialMasterItemDataToExport<MasterItemInterface> | undefined;
  private pulpoApiWrapper: PulpoAPIWrapper;

  /**
   * Overload common arguments
   * @returns Argument[]
   */
  protected getArgsList(): Argument[] {
    return [
      ...super.getArgsList(),
      {
        argName: "--disable-is-transfered-to-wms-update",
        argDescription:
          "[Test Only] Disable the update of transfered_to_wms_at field, to run the script multiple times.",
      },
      {
        argName: "--headers",
        argDescription: "[Test Only] Add headers in file output.",
      },
    ];
  }

  getWorkflowType(): WorkflowType {
    return WorkflowType.EXPORT_ITEM_REFERENCES;
  }

  getDataSchema(): DataExportSchemaInterface<MasterItemInterface> {
    return new DefaultExportMasterItemsSchema();
  }

  async initDataExport(): Promise<InitialMasterItemDataToExport<MasterItemInterface>[]> {
    if (this.argv?.["disable-is-transfered-to-wms-update"]) {
      Console.info("Update of `transfered_to_wms_at` is disabled");
    }

    this.pulpoApiWrapper = new PulpoAPIWrapper();
    await this.pulpoApiWrapper.initClient(
      process.env.PULPO_API_URL as string,
      process.env.PULPO_API_PASSWORD as string,
    );

    return [
      {
        initialData: [],
        filter: {
          limit: Config.get().spacefillApi.defaultPaginationLimit,
          is_transfered_to_wms: false,
          shipper_account_id: Config.get().edi.wmsShipperAccountId,
          archived: "all",
        },
      },
    ];
  }

  async prepareDataExport(offset: number = 0): Promise<MasterItemInterface[]> {
    let masterItems = this.currentDataExportConfiguration?.initialData ?? [];

    if (!this.sdk.client || !this.sdk.ediEvent) {
      throw new InternalError("SDK is not well initialized - client or ediEvent missing");
    }

    await this.sdk.client
      .get_v1_logistic_management_master_item_list({
        ...this.currentDataExportConfiguration?.filter,
        offset: offset,
      })
      .then(async ({ data }) => {
        const tmpItems = data?.items as unknown as MasterItemInterface[];
        masterItems = [...masterItems, ...tmpItems];

        this.currentDataExportConfiguration = {
          ...this.currentDataExportConfiguration,
          initialData: masterItems,
        };

        if (data?.next) {
          masterItems = await this.prepareDataExport(
            offset + Config.get().spacefillApi.defaultPaginationLimit,
          );
        }
      })
      .catch((err) => {
        Console.error("prepareFileData error", {
          status: err?.response?.status,
          text: err?.response?.statusText,
          data: err?.response?.data,
        });
        throw new InternalError("Error during prepareFileData");
      });

    return masterItems as MasterItemInterface[];
  }

  async sendData(mappedData: PulpoProductInterface[]): Promise<void> {
    let errorFound = false;
    for (const mappedItem of mappedData) {
      let tmpSpacefillEdiWmsId: number = Number(mappedItem.spacefill_edi_wms_id);
      delete mappedItem.spacefill_edi_wms_id;

      const tmpSpacefillId: string = mappedItem.spacefill_id as string;
      delete mappedItem.spacefill_id;

      try {
        if (!tmpSpacefillEdiWmsId) {
          if (!mappedItem.active) {
            Console.log(`Ignore reference ${mappedItem.name} because is archived.`);
            continue;
          }
          // Wms.Inventory.ProductController.create
          const response = await this.pulpoApiWrapper.client.paths["/inventory/products"].post(
            {},
            mappedItem,
          );
          tmpSpacefillEdiWmsId = Number(response.data.id);
        } else {
          // Wms.Inventory.ProductController.update
          await this.pulpoApiWrapper.client.paths["/inventory/products/{id}"].put(
            {
              id: tmpSpacefillEdiWmsId,
            },
            mappedItem,
          );
        }
        const patchBody = { edi_wms_id: `${tmpSpacefillEdiWmsId}` };
        if (!this.argv?.["disable-is-transfered-to-wms-update"]) {
          patchBody["transfered_to_wms_at"] = DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
        }
        await this.sdk.client?.patch_v1_logistic_management_master_item(
          { master_item_id: tmpSpacefillId },
          patchBody,
        );
      } catch (exception) {
        errorFound = true;
        Console.printException(exception);
        this.sdk.ediEvent?.send(
          EventTypeEnumString.INTERNAL_ERROR,
          "Error during synchronizing reference.",
          {},
          tmpSpacefillId,
          EntityTypeEnum.MASTER_ITEM,
        );
      }
      if (errorFound) {
        throw new Error("One or more errors during patch master items");
      }
    }
  }

  async onSendDataSuccess(): Promise<void> {
    if (!this.sdk.ediEvent) {
      throw new InternalError("SDK is not well initialized - ediEvent missing");
    }
    await this.sdk.ediEvent.send(EventTypeEnumString.SUCCESS, `File generation ended.`);
  }

  async onEnd(): Promise<void> {
    // Wms.Auth.AuthController.revoke_token
    await this.pulpoApiWrapper.client.paths["/auth/logout"].post();
  }
}
