import { Config } from '../configs/Config.ts';
import Console from '../utils/Console.ts';
import type { Client as SpacefillAPIClient } from './spacefill-api-openapi.d.ts';

enum EventTypeEnumString {
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  NO_CONTENT_SUCCESS = "NO_CONTENT_SUCCESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  PRECONDITION_FAILED_ERROR = "PRECONDITION_FAILED_ERROR",
  INVALID_REQUEST_DATA_ERROR = "INVALID_REQUEST_DATA_ERROR",
  INVALID_REQUEST_FORMAT_ERROR = "INVALID_REQUEST_FORMAT_ERROR",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  NETWORK_ERROR = "NETWORK_ERROR",
  API_NETWORK_ERROR = "API_NETWORK_ERROR",
  IO_ERROR = "IO_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  TEST = "TEST"
}

export { EventTypeEnumString };

export default class EdiEvent {
  private apiClient: SpacefillAPIClient;

  public constructor(apiClient: SpacefillAPIClient) {
    this.apiClient = apiClient;
  }

  public async send(type: EventTypeEnumString, message: string, meta: object = {}) : Promise<void> {
    Console.info(`Sending event ${type}: ${message}`);
    if (type === EventTypeEnumString.API_NETWORK_ERROR) {
      Console.info("Ignore sending event, because is a network error event");
      return;
    }
    if (!Config.get().spacefillApi.eventEnabled) {
      Console.info("Event sending disabled in configuration");
      return;
    }
    await this.apiClient.post_v1_logistic_management_event(
      null,
      {
        type: type,
        message: message.substring(0, 300),
        data: {
          shipper_account_id: Config.get().edi.wmsShipperAccountId,
          warehouse_id: Config.get().edi.wmsWarehouseId
        },
        meta: meta
      }
    ).catch((error) => {
      Console.error(`Error during emit event ${type} - ${message}. ${error?.response?.status} - ${error?.response?.statusText}`);
    });
  }
}