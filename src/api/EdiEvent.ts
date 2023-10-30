import { Config } from '../configs/Config.ts';
import type { Components, Client as SpacefillAPIClient } from './spacefill-api-openapi.d.ts';

export default class EdiEvent {
  private apiClient: SpacefillAPIClient;

  public constructor(apiClient: SpacefillAPIClient) {
    this.apiClient = apiClient;
  }

  public async send(type: Components.Schemas.EventTypeEnum, message: string, meta: object) {
    await this.apiClient.post_v1_logistic_management_event_v1_logistic_management_events__post(
      null,
      {
        type: type,
        message: message.substring(0,300),
        data: {
          shipper_account_id: Config.get().edi.wmsShipperAccountId,
          warehouse_id: Config.get().edi.wmsWarehouseId
        },
        meta: meta
      }
    );
  }
}