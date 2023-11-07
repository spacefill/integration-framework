import { DateTime } from "luxon";
import { Config } from "../../../src/configs/Config.ts";
import { AbstractLoadFileSchema } from "../../../src/data_mapping/AbstractLoadFileSchema.ts"
import { ExportFileDescriptor } from "../../../src/data_mapping/SchemaInterfaces.ts";

interface OrderIterface {
  order_id: number,
  order_type: string,
  shipper_order_reference: string,
  order_effective_executed_at: string,
  order_items: {
    item_reference: string,
    batch_name: string,
    serial_number: string,
    actual_quantity: number,
    item_packaging_type: string,
    serial_shipping_container_code: string,
    designation: string,

  }
}

interface ExitOrderInterface extends OrderIterface {
  exit_final_recipient: string,
  exit_final_recipient_address_line1: string,
  exit_final_recipient_address_zip: string,
  exit_final_recipient_address_city: string,
  exit_final_recipient_address_country_code:string,
  exit_final_recipient_address_details: string,
  exit_final_recipient_address_details_2: string,
  exit_final_recipient_address_details_3: string,
}

export default class DefaultLoadOrderAckSchema extends AbstractLoadFileSchema<OrderIterface> {

  fileDescriptor: ExportFileDescriptor = {
    columnsPosition: {                              // examples:
      'Type de fichier': 0,                         // MOUVEMENT
      'Type de mouvement': 1,                       // LV
      'Code client': 2,                             // EDI-WMS-SHIPPER-ID-001
      'Date et heure fichier': 3,                   // 20231020164200
      'N de mouvement': 4,                          // 20B00461
      'Date de mouvement': 5,                       // 20231020
      'Reference article': 6,                       // JNE 410 / 36
      'Numero de lot': 7,                           // 20B00461-PAILLOUX-CBL4*3
      'Numero de palette': 8,                       // 399487
      'Quantit article': 9,                         // 1
      'Reference secondaire': 10,
      "Code barre sur l'article": 11,               // @todo- à compléter
      'Designation article': 12,                    // CABLE  ACCESSOIRE
      'Code fournisseur': 13,                       // JULI
      Transporteur: 14,                             // @todo- à compléter
      'Nb Um': 15,                                  // 1
      'Type Um': 16,                                // UN
      'Type conditionnement': 17,                   // PALETTE  -- custom field
      'Nom livraison': 18,                          // ZIEGLER CLERMONT
      'Adresse1 livraison': 19,                     // LOGISTIQUE ZIEGLER
      'Adresse2 livraison': 20,                     //
      'CPT livraison': 21,                          // 63000
      'Localite livraison': 23,                     // CLERMONT FERRAND
      'Code pays livraison': 24,                    // FR
      'Tel livraison': 25,                          // @todo- à compléter
      'Mail livraison': 26,                         // @todo- à compléter
      'Contact livraison': 27,                      // @todo- à compléter
      'Numero de serie': 28,                        // S613022710958 -- custom field
    }
  };

  itemSchemaValidation: object = {
    type: 'object',
    properties: {
      'Type de fichier': {
        type: 'string',
        maxLength: 20,
        enum: ['MOUVEMENT', 'PICKING', 'COMMANDE_TERMINEE']
      },
      'Type de mouvement': {
        type: 'string',
        maxLength: 10,
        enum: ['IN', 'LV', 'SO', 'RE', 'AE']
      },
      'Code client': {
        type: 'string',
        maxLength: 35,
        enum: [Config.get().edi.wmsShipperID]
      },
      'Date et heure fichier': {
        type: 'string',
        maxLength: 12,
      },
      'N de mouvement': {
        type: 'string',
        maxLength: 50,
      },
      'Date de mouvement': {
        type: 'string',
        maxLength: 8,
      },
      'Reference article': {
        type: 'string',
        maxLength: 50,
      },
      'Numero de lot': {
        type: 'string',
        maxLength: 100,
      },
      'Numero de palette': {
        type: 'string',
        maxLength: 100,
      },
      'Quantit article': {
        type: 'number',
        maximum: 99999999,
      },
      'Reference secondaire': {
        type: 'string',
        maxLength: 50,
      },
      "Code barre sur l'article": {
        type: 'string',
        maxLength: 50,
      },
      'Designation article': {
        type: 'string',
        maxLength: 100,
      },
      'Code fournisseur': {
        type: 'string',
        maxLength: 50, // pas de documentation sur ce champ
      },
      Transporteur: {
        type: 'string',
        maxLength: 50,
      },
      'Nb Um': {
        type: 'number',
        maximum: 99999999,
      },
      'Type Um': {
        type: 'string',
        maxLength: 50,
      },
      'Nom livraison':{
        type: 'string',
        maxLength: 50,
      },
      'Adresse1 livraison':{
        type: 'string',
        maxLength: 50,
      },
      'CPT livraison': {
        type: 'string',
        maxLength: 10,
      },
      'Localite livraison': {
        type: 'string',
        maxLength: 50,
      },
      'Code pays livraison': {
        type: 'string',
        maxLength: 2,
      },
      'Tel livraison': {
        type: 'string',
        maxLength: 50,
      },
      'Mail livraison': {
        type: 'string',
        maxLength: 50,
      },
      'Contact livraison': {
        type: 'string',
        maxLength: 50,
      }
    },
    required: [
      'Type de fichier',
      'Type de mouvement',
      'Code client',
      'Date et heure fichier',
      'N de mouvement',
      'Date de mouvement',
      'Reference article',
      'Quantit article',
    ]
  };

  mapFileData(rawData: object[]): OrderIterface[] {
    const itemsWithColumns = rawData.map((rawItem) => {
      const itemWithColumns = {};

      Object.keys(this.fileDescriptor.columnsPosition).forEach((columnKey) => {
        itemWithColumns[columnKey] = rawItem[this.fileDescriptor.columnsPosition[columnKey]];
      });
      return itemWithColumns;
    });

    const firstItem = itemsWithColumns[0];
    let mappedData: OrderIterface | ExitOrderInterface;

    if (firstItem['Type de mouvement'] === 'IN' || firstItem['Type de mouvement']) {
      mappedData.order_type = 'IN';
    } else {
      mappedData.order_type = 'EXIT';
    }
    mappedData.shipper_order_reference = firstItem['N de mouvement'];
    mappedData.order_effective_executed_at = DateTime.fromFormat(firstItem['Date de mouvement'], 'yyyyMMdd').toFormat('yyyy-MM-dd\'T\'HH:mm:ss\'Z\'');

    // @todo suite ici.

    return mappedData;
  }
}