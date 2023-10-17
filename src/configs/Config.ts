import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import Console, { LOG_LEVEL_DEBUG, LOG_LEVEL_FATAL, LOG_LEVEL_INFO } from "../utils/Console.mts"


export class Config {
  public static spacefillApi = {
    url: process.env?.SPACEFILL_API_URL ?? 'http://localhost:5004',
    apiToken: process.env?.SPACEFILL_API_TOKEN ?? '',
  }
  public static edi = {
    wmsAgencyCode: process.env?.WMS_AGENCY_CODE,
    wmsShipperID: process.env?.WMS_EDI_WMS_SHIPPER_ID,
    wmsShipperAccountId: process.env?.WMS_SHIPPER_ACCOUNT_ID,
    wmsWarehouseId: process.env?.WMS_WAREHOUSE_ID,
    wmsItemPackagingType: process.env?.WMS_LOGIS_MASTER_ITEM_PACKAGING_TYPE,
  }
  public static console = {
    color: process.env?.CONSOLE_COLOR_ENABLED == '1' ? true : false,
    interactiveMode: process.env?.CONSOLE_INTERACTIVE_MODE == '1' ? true : false,
  }

  public static log = {
    level: process.env?.LOG_LEVEL ?? LOG_LEVEL_INFO,
    defaultLogLevel: LOG_LEVEL_INFO
  }


  public static validate() {
    const ajv = new Ajv();
    addFormats(ajv);
    let errorFound = false;

    const schemaSpacefillApi = {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
        },
        apiToken: {
          type: 'string',
        }
      },
      required: ['url', 'apiToken']
    };
    const validateSpacefillApi = ajv.compile(schemaSpacefillApi);
    if (!validateSpacefillApi(Config.spacefillApi)) {
      Console.error('Configuration validation failed for spacefillApi', validateSpacefillApi?.errors);
      errorFound = true;
    }

    const schemaEdi = {
      type: 'object',
      properties: {
        wmsAgencyCode: {
          type: 'string',
        },
        wmsShipperID: {
          type: 'string',
          format: 'uuid',
        },
        wmsShipperAccountId: {
          type: 'string',
          format: 'uuid',
        },
        wmsWarehouseId: {
          type: 'string',
          format: 'uuid',
        },
        wmsItemPackagingType: {
          type: 'string',
          enum: ['EACH', 'CARDBOARD_BOX', 'PALLET']
        }
      },
      required: [
        'wmsShipperID',
        'wmsShipperAccountId',
        'wmsWarehouseId',
        'wmsItemPackagingType'
      ]
    }
    const validateEdi = ajv.compile(schemaEdi);
    if (!validateEdi(Config.edi)) {
      Console.error('Configuration validation failed for spacefillApi', validateEdi?.errors);
      errorFound = true;
    }

    const schemaConsole = {
      type: 'object',
      properties: {
        color: {
          type: 'boolean'
        },
        interactiveMode: {
          type: 'boolean',
        }
      },
      required: ['color', 'interactiveMode']
    }
    const validateConsole = ajv.compile(schemaConsole);
    if (!validateConsole(Config.console)) {
      Console.error('Configuration validation failed for spacefillApi', validateConsole?.errors);
      errorFound = true;
    }

    const schemaLog = {
      type: 'object',
      properties: {
        level: {
          type: 'number',
          minimum: LOG_LEVEL_FATAL,
          maximum: LOG_LEVEL_DEBUG
        },
        defaultLogLevel: {
          type: 'number',
          minimum: LOG_LEVEL_FATAL,
          maximum: LOG_LEVEL_DEBUG
        }
      },
      required: ['level', 'defaultLogLevel']
    }
    const validateLog = ajv.compile(schemaLog);
    if (!validateLog(Config.log)) {
      Console.error('Configuration validation failed for spacefillApi', validateLog?.errors);
      errorFound = true;
    }

    if (errorFound) {
      throw new Error("Invalid configuration");
    }
  }
}