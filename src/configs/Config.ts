import { fs, path } from "zx";
import * as dotenv from "dotenv";
import AjvModule from "ajv";
const Ajv = AjvModule.default;
import addFormatsModule from "ajv-formats";
const addFormats = addFormatsModule.default;

import { Console, logLevelOrder } from "../utils/Console.ts";
import { ClientTransport, ClientType } from "../api/APIContext.ts";

export class Config {
  public static get() {
    return {
      spacefillApi: {
        url: process.env?.SPACEFILL_API_URL ?? "http://localhost:5004",
        apiToken: process.env?.SPACEFILL_API_TOKEN ?? "",
        defaultPaginationLimit: process.env?.SPACEFILL_API_DEFAULT_PAGINATION_LIMIT
          ? parseInt(process.env?.SPACEFILL_API_DEFAULT_PAGINATION_LIMIT)
          : 50,
        context: {
          serviceSource: process.env?.SPACEFILL_API_CONTEXT_SERVICE_SOURCE,
          serviceVersion: process.env?.SPACEFILL_API_CONTEXT_SERVICE_VERSION,
          transport: process.env?.SPACEFILL_API_CONTEXT_TRANSPORT,
          clientType: process.env?.SPACEFILL_API_CONTEXT_CLIENT_TYPE,
        },
        eventEnabled: process.env?.SPACEFILL_API_EVENT_ENABLED == "1" ? true : false,
      },
      transfer: {
        protocol: process.env?.WMS_TRANSFER_PROTOCOL,
        hostname: process.env?.WMS_TRANSFER_HOST,
        port: process.env?.WMS_TRANSFER_PORT ? parseInt(process.env?.WMS_TRANSFER_PORT) : undefined,
        username: process.env?.WMS_TRANSFER_USER,
        password: process.env?.WMS_TRANSFER_PASSWORD,
        retries: process.env?.WMS_TRANSFER_RETRIES ? process.env?.WMS_TRANSFER_RETRIES : 3,
        delay: process.env?.WMS_TRANSFER_RETRIES_DELAY ? process.env?.WMS_TRANSFER_RETRIES_DELAY : 5000,
        autoAddPolicy: process.env?.WMS_TRANSFER_SFTP_AUTOADDPOLICY == "1" ? true : false,
      },
      edi: {
        wmsAgencyCode: process.env?.WMS_AGENCY_CODE,
        wmsShipperID: process.env?.WMS_EDI_WMS_SHIPPER_ID,
        wmsShipperAccountId: process.env?.WMS_SHIPPER_ACCOUNT_ID,
        wmsWarehouseId: process.env?.WMS_WAREHOUSE_ID,
        wmsItemPackagingType: process.env?.WMS_MASTER_ITEM_PACKAGING_TYPE,
        wmsPathWmsToSpacefillDir:
          process.env?.WMS_DEFAULT_DIR && process.env?.WMS_PATH_WMS_TO_SPACEFILL_DIR
            ? path.join(process.env?.WMS_DEFAULT_DIR, process.env?.WMS_PATH_WMS_TO_SPACEFILL_DIR)
            : process.env?.WMS_PATH_WMS_TO_SPACEFILL_DIR,
        wmsPathSpacefillToWmsDir:
          process.env?.WMS_DEFAULT_DIR && process.env?.WMS_PATH_SPACEFILL_TO_WMS_DIR
            ? path.join(process.env?.WMS_DEFAULT_DIR, process.env?.WMS_PATH_SPACEFILL_TO_WMS_DIR)
            : process.env?.WMS_PATH_SPACEFILL_TO_WMS_DIR,
        wmsPathArchiveDir:
          process.env?.WMS_DEFAULT_DIR && process.env?.WMS_PATH_ARCHIVE_DIR
            ? path.join(process.env?.WMS_DEFAULT_DIR, process.env?.WMS_PATH_ARCHIVE_DIR)
            : process.env?.WMS_PATH_ARCHIVE_DIR,
        wmsPathErrorDir:
          process.env?.WMS_DEFAULT_DIR && process.env?.WMS_PATH_ERROR_DIR
            ? path.join(process.env?.WMS_DEFAULT_DIR, process.env?.WMS_PATH_ERROR_DIR)
            : process.env?.WMS_PATH_ERROR_DIR,
        fileEncoding: process.env?.WMS_FILE_ENCODING ?? "utf-8",
        runId: process.env?.RUN_ID ?? "LocalRun",
      },
      console: {
        color: process.env?.CONSOLE_COLOR_ENABLED == "1" ? true : false,
        interactiveMode: process.env?.CONSOLE_INTERACTIVE_MODE == "1" ? true : false,
        printDuration: process.env?.CONSOLE_PRINT_DURATION == "1" ? true : false,
      },
      log: {
        level: process.env?.LOG_LEVEL ?? "info",
        defaultLogLevel: "info",
      },
    };
  }

  public static reloadConfig(envFile: string) {
    if (fs.existsSync(envFile)) {
      dotenv.config({
        path: envFile,
        override: true,
      });
    } else {
      throw new Error(`Cannot find env file ${envFile}`);
    }
  }

  public static validate() {
    const ajv = new Ajv();
    addFormats(ajv);
    let errorFound = false;

    const schemaSpacefillApi = {
      type: "object",
      properties: {
        url: {
          type: "string",
          format: "uri",
        },
        apiToken: {
          type: "string",
        },
        defaultPaginationLimit: {
          type: "number",
          minimum: 1,
          maximum: 1000,
        },
        context: {
          type: "object",
          properties: {
            serviceSource: {
              type: "string",
            },
            serviceVersion: {
              type: "string",
              // semVer pattern
              pattern:
                "^([0-9]+)\\.([0-9]+)\\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?(?:\\+[0-9A-Za-z-]+)?$",
            },
            transport: {
              type: "string",
              enum: Object.values(ClientTransport),
            },
            clientType: {
              type: "string",
              enum: Object.values(ClientType),
            },
          },
          required: ["serviceSource", "serviceVersion", "transport", "clientType"],
        },
      },
      required: ["url", "apiToken", "defaultPaginationLimit"],
    };
    const validateSpacefillApi = ajv.compile(schemaSpacefillApi);
    if (!validateSpacefillApi(Config.get().spacefillApi)) {
      Console.error("Configuration validation failed for spacefillApi", validateSpacefillApi?.errors);
      errorFound = true;
    }

    const schemaTransfer = {
      type: "object",
      properties: {
        protocol: {
          type: "string",
          enum: ["local", "sftp", "ftp"],
        },
        hostname: {
          type: "string",
          oneOf: [{ format: "hostname" }, { format: "ipv4" }, { format: "ipv6" }],
        },
        port: {
          type: "number",
          minimum: 0,
          maximum: 65535,
        },
        username: {
          type: "string",
        },
        password: {
          type: "string",
        },
        autoAddPolicy: {
          type: "boolean",
        },
      },
      if: { properties: { protocol: { enum: ["sftp", "ftp"] } } },
      then: { required: ["protocol", "hostname", "port", "username", "password"] },
      else: { required: ["protocol"] },
    };
    const validateTransfer = ajv.compile(schemaTransfer);
    if (!validateTransfer(Config.get().transfer)) {
      Console.error("Configuration validation failed for transfer", validateTransfer?.errors);
      errorFound = true;
    }

    const schemaEdi = {
      type: "object",
      properties: {
        wmsAgencyCode: {
          type: "string",
        },
        wmsShipperID: {
          type: "string",
        },
        wmsShipperAccountId: {
          type: "string",
          format: "uuid",
        },
        wmsWarehouseId: {
          type: "string",
          format: "uuid",
        },
        wmsItemPackagingType: {
          type: "string",
          enum: ["EACH", "CARDBOARD_BOX", "PALLET"],
        },
        wmsPathWmsToSpacefillDir: {
          type: "string",
        },
        wmsPathSpacefillToWmsDir: {
          type: "string",
        },
        wmsPathArchiveDir: {
          type: "string",
        },
        wmsPathErrorDir: {
          type: "string",
        },
        fileEncoding: {
          type: "string",
        },
        runId: {
          type: "string",
          minLength: 1,
        },
      },
      required: [
        "wmsShipperID",
        "wmsShipperAccountId",
        "wmsWarehouseId",
        "wmsItemPackagingType",
        "wmsPathWmsToSpacefillDir",
        "wmsPathSpacefillToWmsDir",
        "wmsPathArchiveDir",
        "wmsPathErrorDir",
        "runId",
      ],
    };
    const validateEdi = ajv.compile(schemaEdi);
    if (!validateEdi(Config.get().edi)) {
      Console.error("Configuration validation failed for edi", validateEdi?.errors);
      errorFound = true;
    }

    const schemaConsole = {
      type: "object",
      properties: {
        color: {
          type: "boolean",
        },
        interactiveMode: {
          type: "boolean",
        },
        printDuration: {
          type: "boolean",
        },
      },
      required: ["color", "interactiveMode", "printDuration"],
    };
    const validateConsole = ajv.compile(schemaConsole);
    if (!validateConsole(Config.get().console)) {
      Console.error("Configuration validation failed for console", validateConsole?.errors);
      errorFound = true;
    }

    const schemaLog = {
      type: "object",
      properties: {
        level: {
          type: "string",
          enum: Object.keys(logLevelOrder),
        },
        defaultLogLevel: {
          type: "string",
          enum: Object.keys(logLevelOrder),
        },
      },
      required: ["level", "defaultLogLevel"],
    };
    const validateLog = ajv.compile(schemaLog);
    if (!validateLog(Config.get().log)) {
      Console.error("Configuration validation failed for log", validateLog?.errors);
      errorFound = true;
    }

    if (errorFound) {
      throw new Error("Invalid configuration");
    }
  }
}
