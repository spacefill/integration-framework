import { SchemaInterface } from "../../../src/data_mapping/SchemaInterface.ts";
import { MasterItemInterface } from "../GenerateMasterItemsTaskExample.mts";
import { Config } from "../../../src/configs/Config.ts";
import { AbstractSchema } from "../../../src/data_mapping/AbstractSchema.ts";


export class DefaultGenerateMasterItemsSchema extends AbstractSchema<MasterItemInterface> implements SchemaInterface<MasterItemInterface> {
  itemSchemaValidation: object = {
    type: 'object',
    properties: {
      'Type de message': {
        type: 'string',
        maxLength: 3,
      },
      'Code Client': {
        type: 'string',
      },
      'Code article': {
        type: 'string',
        maxLength: 50,
      },
      'Référence technique': {
        type: 'string',
        maxLength: 100,
        nullable: true,
      },
      'Description': {
        type: 'string',
        maxLength: 100,
      },
      'Code famille': {
        type: 'string',
        maxLength: 50,
        nullable: true,
      },
      'Code sous-famille': {
        type: 'string',
        maxLength: 50,
        nullable: true,
      },
      'Type de colis de 4ème niveau': {
        type: 'string',
        maxLength: 2,
        nullable: true,
      },
      'Nombre d\'unités par colis de 4ème niveau': {
        type: 'integer',
        maximum: 9999999999,
        nullable: true,
      },
      'Nombre de colis par unité logistique': {
        type: 'integer',
        maximum: 9999999999,
        nullable: true,
      },
      'Hauteur du colis de référence': {
        type: 'number',
        maximum: 999999999,
        nullable: true,
        // "multipleOfPrecision": 0.001, -- todo: find a solution to check precision
      },
      'Largeur du colis de référence': {
        type: 'number',
        maximum: 999999999,
        nullable: true,
        // "multipleOfPrecision": 0.001, -- todo: find a solution to check precision
      },
      'Profondeur du colis de référence': {
        type: 'number',
        maximum: 999999999,
        nullable: true,
        // "multipleOfPrecision": 0.001, -- todo: find a solution to check precision
      },
      'Poids brut du colis de référence': {
        type: 'number',
        maximum: 9999999999999,
        nullable: true,
        // "multipleOfPrecision": 0.0001, -- todo: find a solution to check precision
      },
      'Poids net du colis de référence': {
        type: 'number',
        maximum: 9999999999999,
        nullable: true,
        // "multipleOfPrecision": 0.0001, -- todo: find a solution to check precision
      },
      'Code EAN': {
        type: 'string',
        maxLength: 14,
        nullable: true,
      },
      'Code EAN colis': {
        type: 'string',
        maxLength: 14,
        nullable: true,
      },
      'Code EAN palette': {
        type: 'string',
        maxLength: 14,
        nullable: true,
      },
      'Information libre 1': {
        type: 'string',
        maxLength: 100,
        nullable: true,
      },
      'Information libre 2': {
        type: 'string',
        maxLength: 100,
        nullable: true,
      },
      'Information libre 3': {
        type: 'string',
        maxLength: 100,
        nullable: true,
      },
      'Type de conditionnement': {
        type: 'string',
        maxLength: 20,
      }
    },
    required: [
      'Type de message',
      'Code Client',
      'Code article',
      'Description',
      'Type de conditionnement'
    ]
  };

  mapFileData(rawData: MasterItemInterface[]): object[] {
    /**
     * Keys are column names in the final generated file.
     */
    return rawData.map((rawDataItem) => {
      return {
        'Type de message': 'ART',
        'Code Client': Config.get().edi.wmsShipperID,
        'Code article': rawDataItem?.item_reference,
        'Référence technique': rawDataItem?.item_reference,
        'Description': rawDataItem?.designation,
        'Code famille': '',
        'Code sous-famille': '',
        'Type de colis de 4ème niveau': '',
        'Nombre d\'unités par colis de 4ème niveau': rawDataItem?.each_quantity_by_cardboard_box,
        'Nombre de colis par unité logistique': rawDataItem?.each_quantity_by_pallet,
        'Hauteur du colis de référence': rawDataItem?.cardboard_box_height_in_cm
          ? (rawDataItem?.cardboard_box_height_in_cm / 100)
          : null,
        'Largeur du colis de référence': rawDataItem?.cardboard_box_width_in_cm
          ? (rawDataItem?.cardboard_box_width_in_cm / 100)
          : null,
        'Profondeur du colis de référence': rawDataItem?.cardboard_box_length_in_cm
          ? (rawDataItem?.cardboard_box_length_in_cm / 100)
          : null,
        'Poids brut du colis de référence': rawDataItem?.cardboard_box_gross_weight_in_kg,
        'Poids net du colis de référence': rawDataItem?.cardboard_box_net_weight_in_kg ?? rawDataItem?.cardboard_box_gross_weight_in_kg,
        'Code EAN': '',
        'Code EAN colis': rawDataItem?.cardboard_box_barcode,
        'Code EAN palette': rawDataItem?.pallet_barcode,
        'Information libre 1': rawDataItem?.designation.substring(0, 100),
        'Information libre 2': rawDataItem?.designation.substring(100, 200),
        'Information libre 3': rawDataItem?.designation.substring(200),
        'Type de conditionnement': Config.get().edi.wmsItemPackagingType,
      };
    });
  }
}
