#!/usr/bin/env -S npx ts-node --esm --compilerOptions '{"moduleResolution":"nodenext","module":"esnext","target":"esnext", "allowImportingTsExtensions": true}'

import AjvModule from "ajv";
import addFormatsModule from 'ajv-formats';
const Ajv = AjvModule.default;
const addFormats = addFormatsModule.default;

import { Config } from '../../src/configs/Config.ts';
import { AbstractGenerateFileTask } from '../../src/task/AbstractGenerateFileTask.ts';
import Console from '../../src/utils/Console.mts';

interface MasterItemInterface {
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
export class GenerateMasterItemsTaskExample extends AbstractGenerateFileTask {
  async prepareFilesData(): Promise<Array<object[]>> {
    const result = await this.sdk.get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get({
      offset: '0',
      limit: '1000',
      is_transfered_to_wms: false,
      shipper_account_id: Config.edi.wmsShipperID
    })
      .then(({ data }) => {
        //console.log(data)
        return [data?.items] ?? [];
      })
      .catch(err => {
        Console.error(err)
        process.exit(1);
      });

    //Console.debug(result);

    return result;
  }

  mapFileData(rawData: MasterItemInterface[]): object[] {
    /**
     * Keys are column names in the final generated file.
     */
    return rawData.map((rawDataItem) => {
      return {
        'Type de message': 'ART',
        'Code Client': Config.edi.wmsShipperID,
        'Code article': rawDataItem?.item_reference,
        'Référence technique': rawDataItem?.item_reference,
        'Description': rawDataItem?.designation,
        'Code famille': '',
        'Code sous-famille': '',
        'Type de colis de 4ème niveau': '',
        'Nombre d\'unités par colis de 4ème niveau': rawDataItem?.each_quantity_by_cardboard_box,
        'Nombre de colis par unité logistique': rawDataItem?.each_quantity_by_pallet,
        'Hauteur du colis de référence': rawDataItem?.cardboard_box_height_in_cm
          ? (rawDataItem?.cardboard_box_height_in_cm['cardboard_box_height_in_cm'] / 100)
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
        'Type de conditionnement': Config.edi.wmsItemPackagingType,
      };
    });
  }

  validateFileData(data: object[]): void {
    Console.debug('validate', data);
    const itemSchema = {
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
        },
        'Description': {
          type: 'string',
          maxLength: 100,
        },
        'Code famille': {
          type: 'string',
          maxLength: 50,
        },
        'Code sous-famille': {
          type: 'string',
          maxLength: 50,
        },
        'Type de colis de 4ème niveau': {
          type: 'string',
          maxLength: 2,
        },
        'Nombre d\'unités par colis de 4ème niveau': {
          type: 'integer',
          maximum: 9999999999,
        },
        'Nombre de colis par unité logistique': {
          type: 'integer',
          maximum: 9999999999,
        },
        'Hauteur du colis de référence': {
          type: 'number',
          maximum: 999999999,
          multipleOfPrecision: 0.001,
        },
        'Largeur du colis de référence': {
          type: 'number',
          maximum: 999999999,
          multipleOfPrecision: 0.001,
        },
        'Profondeur du colis de référence': {
          type: 'number',
          maximum: 999999999,
          multipleOfPrecision: 0.001,
        },
        'Poids brut du colis de référence': {
          type: 'number',
          maximum: 9999999999999,
          multipleOfPrecision: 0.0001,
        },
        'Poids net du colis de référence': {
          type: 'number',
          maximum: 9999999999999,
          multipleOfPrecision: 0.0001,
        },
        'Code EAN': {
          type: 'string',
          maxLength: 14,
        },
        'Code EAN colis': {
          type: 'string',
          maxLength: 14,
        },
        'Code EAN palette': {
          type: 'string',
          maxLength: 14,
        },
        'Information libre 1': {
          type: 'string',
          maxLength: 100,
        },
        'Information libre 2': {
          type: 'string',
          maxLength: 100,
        },
        'Information libre 3': {
          type: 'string',
          maxLength: 100,
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

    const schema = {
      type: "array",
      items: itemSchema
    };

    const ajv = new Ajv();
    addFormats(ajv);

    const validate = ajv.compile(schema);
    if (!validate(data)) {
      Console.error(validate?.errors);
      throw new Error('Configuration validation failed for spacefillApi');
    }
  }

  // @todo
  // Utiliser MapFieldInterface.ts et Schema.ts pour pouvoir charger un schema de données et effectuer la partie validation.
  // A noter: validateData prend en paramètre toutes les données pour un fichier.


  generateFile(_mappedData: object[]): string {
    return ''
  }

  sendFile(): void {
    throw new Error('Method not implemented.');
  }
}

Console.log(Config)

const task = new GenerateMasterItemsTaskExample();
task.run();
