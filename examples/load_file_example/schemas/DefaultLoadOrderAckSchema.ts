import { DateTime } from "luxon";
import { Config } from "../../../src/configs/Config.ts";
import { AbstractLoadFileSchema } from "../../../src/data_mapping/AbstractLoadFileSchema.ts"
import { ExportFileDescriptor } from "../../../src/data_mapping/SchemaInterfaces.ts";
import { ExitOrderInterface, ItemPackagingTypeEnum, OrderInterface, OrderItemInterface, OrderTypeEnum } from "../LoadOrderAcknowledgeTaskExample.mts";

export class DefaultLoadOrderAckSchema extends AbstractLoadFileSchema<OrderInterface | ExitOrderInterface> {

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
      'Localite livraison': 22,                     // CLERMONT FERRAND
      'Code pays livraison': 23,                    // FR
      'Tel livraison': 24,                          // @todo- à compléter
      'Mail livraison': 25,                         // @todo- à compléter
      'Contact livraison': 26,                      // @todo- à compléter
      'Numero de serie': 27,                        // S613022710958 -- custom field
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
      'Nom livraison': {
        type: 'string',
        maxLength: 50,
      },
      'Adresse1 livraison': {
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

  mapInputFileData(rawData: object[]): OrderInterface[] | ExitOrderInterface[] {
    const itemsWithColumns = rawData.map((rawItem) => {
      const itemWithColumns = {};

      Object.keys(this.fileDescriptor.columnsPosition).forEach((columnKey) => {
        itemWithColumns[columnKey] = rawItem[this.fileDescriptor.columnsPosition[columnKey]];
      });
      return itemWithColumns;
    });
    const grouped_order_items = [];

    itemsWithColumns.forEach((line) => {
      const keyArr = [
        line['Reference article'],
        line['Numero de lot'],
        Config.get().edi.wmsItemPackagingType,
        line["Code barre sur l'article"]
      ];
      const key = keyArr.join('#');

      const defautOrderItem: OrderItemInterface = {
        item_reference: line['Reference article'],
        batch_name: line['Numero de lot'].length > 0 ? line['Numero de lot'] : null,
        serial_number: line['Numero de palette'].length > 0 ? line['Numero de palette'] : null,
        expected_quantity: parseInt(line['Quantit article']),
        item_packaging_type: Config.get().edi.wmsItemPackagingType as ItemPackagingTypeEnum,
        serial_shipping_container_code: line["Code barre sur l'article"].length > 0 ? line["Code barre sur l'article"] : null,
        designation: line['Designation article'],
      };

      const previousValue = grouped_order_items[key] ?? defautOrderItem;
      grouped_order_items[key] = {
        ...previousValue,
        expected_quantity: (defautOrderItem.expected_quantity + previousValue.expected_quantity) as number
      }
    });

    const firstItem = itemsWithColumns[0];
    let order_type: string;
    if (firstItem['Type de mouvement'] === 'IN' || firstItem['Type de mouvement'] === 'AE') {
      order_type = 'ENTRY';
    } else {
      order_type = 'EXIT';
    }
    const executionDate = DateTime.fromFormat(firstItem['Date de mouvement'], 'yyyyMMdd').toFormat('yyyy-MM-dd\'T\'HH:mm:ss\'Z\'');
    const mappedData: OrderInterface = {
      shipper_order_reference: firstItem['N de mouvement'],
      order_type: order_type as OrderTypeEnum,
      shipper_account_id: Config.get().edi.wmsShipperAccountId as string,
      warehouse_id: Config.get().edi.wmsWarehouseId as string,
      planned_execution_datetime_range: {
        datetime_from: executionDate,
        datetime_to: executionDate
      },
      transport_management_owner: "SHIPPER",
      order_items: Object.values(grouped_order_items),
    }

    if (mappedData.order_type === 'EXIT') {
      const exitOrderMappeData: ExitOrderInterface = {
        ...mappedData as ExitOrderInterface,
        exit_final_recipient: firstItem['Nom livraison'],
        exit_final_recipient_address_line1: firstItem['Adresse1 livraison'],
        exit_final_recipient_address_zip: firstItem['CPT livraison'],
        exit_final_recipient_address_city: firstItem['Localite livraison'],
        exit_final_recipient_address_country_code: firstItem['Code pays livraison'],
        exit_final_recipient_address_details: firstItem['Tel livraison'],
        exit_final_recipient_address_details_2: firstItem['Mail livraison'],
        exit_final_recipient_address_details_3: firstItem['Contact livraison'],
      }

      return [exitOrderMappeData];
    }

    // We return an array due to different behaviour With Logis there is only one order, but with ItemStock there are several orders per file
    return [mappedData];
  }
}
