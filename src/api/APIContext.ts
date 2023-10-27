import { randomUUID } from "crypto";
import { Config } from "../configs/Config.ts";

enum ClientTransport {
  EDI = 'EDI',
  API = 'API'
}

enum ClientType {
  WMS = 'WMS',
  TMS = 'TMS',
  ERP = 'ERP'
}

enum WorkflowType {
  EXPORT_ITEM_REFERENCES = 'EXPORT_ITEM_REFERENCES',
  EXPORT_ORDERS = 'EXPORT_ORDERS',
  IMPORT_INVENTORY_ADJUSTEMENT = 'IMPORT_INVENTORY_ADJUSTEMENT',
  IMPORT_ORDER_ACK = 'IMPORT_ORDER_ACK',
  IMPORT_ITEM_REFERENCES = 'IMPORT_ITEM_REFERENCES',
  IMPORT_DOCUMENTS = 'IMPORT_DOCUMENTS'
}

export { ClientTransport, ClientType, WorkflowType };

export default class APIContext {
  public static getMainHeaders(): object {
    return {
      'Spacefill-Ctx-Service-Source': Config.get().spacefillApi.context.serviceSource,
      'Spacefill-Ctx-Service-Version': Config.get().spacefillApi.context.serviceVersion,
      'Spacefill-Ctx-Client-Type': Config.get().spacefillApi.context.clientType,
      'Spacefill-Ctx-Transport': Config.get().spacefillApi.context.transport,
      'Spacefill-Ctx-Session-Id': `${Config.get().spacefillApi.context.serviceSource}_${randomUUID()}`
    };
  }
  public static getWorkflowHeader(workflowType: WorkflowType): object {
    return { 'Spacefill-Ctx-Workflow': workflowType };
  }
  public static getDataSourceHeader(dataSourceReference: string): object {
    return { 'Spacefill-Ctx-Data-Source': dataSourceReference };
  }
}

