import { GenerateFileSchemaInterface } from "../../../src/data_mapping/GenerateFileSchemaInterface.ts";
import { MasterItemInterface } from "../GenerateMasterItemsTaskExample.mts";
import { Config } from "../../../src/configs/Config.ts";
import { AbstractGenerateFileSchema, ExportFileDescriptor } from "../../../src/data_mapping/AbstractGenerateFileSchema.ts";


export class DefaultGenerateMasterItemsSchema extends AbstractGenerateFileSchema<MasterItemInterface> implements GenerateFileSchemaInterface<MasterItemInterface> {
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
        maximum: 999.999999,
        nullable: true,
        // "multipleOfPrecision": 0.001, -- todo: find a solution to check precision
      },
      'Largeur du colis de référence': {
        type: 'number',
        maximum: 999.999999,
        nullable: true,
        // "multipleOfPrecision": 0.001, -- todo: find a solution to check precision
      },
      'Profondeur du colis de référence': {
        type: 'number',
        maximum: 999.999999,
        nullable: true,
        // "multipleOfPrecision": 0.001, -- todo: find a solution to check precision
      },
      'Poids brut du colis de référence': {
        type: 'number',
        maximum: 9999999.999999,
        nullable: true,
        // "multipleOfPrecision": 0.0001, -- todo: find a solution to check precision
      },
      'Poids net du colis de référence': {
        type: 'number',
        maximum: 9999999.999999,
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

  fileDescriptor: ExportFileDescriptor = {
    csvTotalColumnNumber: 133,
    columnsPosition: {
      'Type de message': 0,
      'Code Client': 1,
      'Code article': 2,
      'Référence technique': 3,
      'Description': 4,
      'Code famille': 5,
      'Code sous-famille': 6,
      'Type de colis de 4ème niveau': 7,
      'Nombre d\'unités par colis de 4ème niveau': 8,
      'Nombre de colis par unité logistique': 16,
      'Hauteur du colis de référence': 18,
      'Largeur du colis de référence': 19,
      'Profondeur du colis de référence': 20,
      'Poids brut du colis de référence': 23,
      'Poids net du colis de référence': 24,
      'Code EAN': 69,
      'Code EAN colis': 70,
      'Code EAN palette': 71,
      'Information libre 1': 76,
      'Information libre 2': 77,
      'Information libre 3': 78,
      'Type de conditionnement': 106,
    }
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
        'Nombre d\'unités par colis de 4ème niveau': Number(rawDataItem?.each_quantity_by_cardboard_box),
        'Nombre de colis par unité logistique': Number(rawDataItem?.each_quantity_by_pallet),
        'Hauteur du colis de référence': rawDataItem?.cardboard_box_height_in_cm
          ? parseFloat(Number(rawDataItem?.cardboard_box_height_in_cm / 100).toFixed(6))
          : null,
        'Largeur du colis de référence': rawDataItem?.cardboard_box_width_in_cm
          ? parseFloat(Number(rawDataItem?.cardboard_box_width_in_cm / 100).toFixed(6))
          : null,
        'Profondeur du colis de référence': rawDataItem?.cardboard_box_length_in_cm
          ? parseFloat(Number(rawDataItem?.cardboard_box_length_in_cm / 100).toFixed(6))
          : null,
        'Poids brut du colis de référence': parseFloat(Number(rawDataItem?.cardboard_box_gross_weight_in_kg)?.toFixed(6)),
        'Poids net du colis de référence': rawDataItem?.cardboard_box_net_weight_in_kg
          ? parseFloat(Number(rawDataItem?.cardboard_box_net_weight_in_kg).toFixed(6))
          : parseFloat(Number(rawDataItem?.cardboard_box_gross_weight_in_kg).toFixed(6)),
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
