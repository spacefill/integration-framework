import { randomUUID } from "crypto";

import { Config } from "../configs/Config.ts";

enum ClientTransport {
  EDI = "EDI",
  API = "API",
}

enum ClientType {
  WMS = "WMS",
  TMS = "TMS",
  ERP = "ERP",
}

enum WorkflowType {
  EXPORT_ITEM_REFERENCES = "EXPORT_ITEM_REFERENCES",
  EXPORT_ORDERS = "EXPORT_ORDERS",
  IMPORT_INVENTORY_ADJUSTMENT = "IMPORT_INVENTORY_ADJUSTMENT",
  IMPORT_ORDER_ACK = "IMPORT_ORDER_ACK",
  IMPORT_ITEM_REFERENCES = "IMPORT_ITEM_REFERENCES",
  IMPORT_DOCUMENTS = "IMPORT_DOCUMENTS",
  IMPORT_TRANSPORT_ACK = "IMPORT_TRANSPORT_ACK",
  EXPORT_TRANSPORT_ACK = "EXPORT_TRANSPORT_ACK",
  TECHNICAL_OPERATION = "TECHNICAL_OPERATION",
}

export { ClientTransport, ClientType, WorkflowType };

export class APIContext {
  public static getMainHeaders(): object {
    return {
      "Spacefill-Ctx-Service-Source": encodeURI(Config.get().spacefillApi.context.serviceSource as string),
      "Spacefill-Ctx-Service-Version": encodeURI(Config.get().spacefillApi.context.serviceVersion as string),
      "Spacefill-Ctx-Client-Type": encodeURI(Config.get().spacefillApi.context.clientType as string),
      "Spacefill-Ctx-Transport": encodeURI(Config.get().spacefillApi.context.transport as string),
      "Spacefill-Ctx-Session-Id": encodeURI(
        Config.get().edi.runId ?? `${Config.get().spacefillApi.context.serviceSource}_${randomUUID()}`,
      ),
    };
  }
  public static getWorkflowHeader(workflowType: WorkflowType): object {
    return { "Spacefill-Ctx-Workflow": encodeURI(workflowType) };
  }
  public static getDataSourceHeader(dataSourceReference: string): object {
    return { "Spacefill-Ctx-Data-Source": encodeURI(dataSourceReference) };
  }
}
