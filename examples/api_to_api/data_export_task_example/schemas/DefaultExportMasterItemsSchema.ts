import { AbstractDataExportSchema, DataExportSchemaInterface } from "../../../../src/index.ts";
import { MasterItemInterface, PulpoProductInterface } from "../MasterItemExportExampleTask.mts";

export class DefaultExportMasterItemsSchema
  extends AbstractDataExportSchema<MasterItemInterface>
  implements DataExportSchemaInterface<MasterItemInterface>
{
  itemSchemaValidation: object = {
    type: "object",
    properties: {
      active: {
        type: "boolean",
      },
      // champ non présent dans le model.
      description: {
        type: "string",
      },
      // champ non présent dans le model.
      name: {
        type: "string",
      },
      sku: {
        type: "string",
      },
      barcodes: {
        type: "array",
      },
      Description: {
        type: "string",
      },
      cost_price: {
        type: "number",
      },
      management_type: {
        type: "string",
      },
      weight: {
        type: "number",
      },
      height: {
        type: "number",
      },
      width: {
        type: "number",
      },
      length: {
        type: "number",
      },
      volume: {
        type: "number",
      },
      purchase_measure_units: {
        type: "string",
      },
      sales_measure_units: {
        type: "string",
      },
      units_per_sales_package: {
        type: "integer",
      },
      units_per_purchase_package: {
        type: "integer",
      },
      minimum_purchase_unit: {
        type: "integer",
      },
      minimum_sales_unit: {
        type: "integer",
      },
      units_per_pallet: {
        type: "integer",
      },
    },
  };

  mapDataToExport(rawData: MasterItemInterface[]): PulpoProductInterface[] {
    return rawData.map((rawDataItem) => {
      let unitsPerSalesPackage = 1;
      let unitsPerPurchasePackage = 1;
      let unitsPerPallet: number | undefined;

      if (rawDataItem.each_quantity_by_cardboard_box) {
        if (
          rawDataItem.each_quantity_by_cardboard_box === 1 &&
          rawDataItem.cardboard_box_quantity_by_pallet
        ) {
          unitsPerPallet = rawDataItem.cardboard_box_quantity_by_pallet;
        } else {
          if (rawDataItem.cardboard_box_quantity_by_pallet) {
            unitsPerPallet =
              rawDataItem.cardboard_box_quantity_by_pallet * rawDataItem.each_quantity_by_cardboard_box;
          }

          unitsPerSalesPackage = rawDataItem.each_quantity_by_cardboard_box;
          unitsPerPurchasePackage = rawDataItem.each_quantity_by_cardboard_box;
        }
      } else {
        if (rawDataItem.each_quantity_by_pallet) {
          unitsPerPallet = rawDataItem.each_quantity_by_pallet;
        }
      }

      return {
        spacefill_id: rawDataItem.id,
        spacefill_edi_wms_id: rawDataItem.edi_wms_id,
        active: rawDataItem.archived_at ? false : true,
        description: rawDataItem.designation,
        name: rawDataItem.item_reference,
        sku: rawDataItem.item_reference,
        barcodes: [rawDataItem?.each_barcode ?? rawDataItem.item_reference.replace(" ", "")],
        cost_price: "0",
        management_type: "none",
        weight: rawDataItem.each_net_weight_in_kg ?? 0,
        height: rawDataItem.each_height_in_cm,
        width: rawDataItem.each_width_in_cm,
        length: rawDataItem.each_length_in_cm,
        volume: rawDataItem.each_volume_in_cm3,
        purchase_measure_units: "Piece",
        sales_measure_units: "Piece",
        units_per_sales_package: unitsPerSalesPackage,
        units_per_purchase_package: unitsPerPurchasePackage,
        minimum_purchase_unit: 1,
        minimum_sales_unit: 1,
        units_per_pallet: unitsPerPallet,
      };
    });
  }
}
