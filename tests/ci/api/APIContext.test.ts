import { expect } from "chai";

import { APIContext, WorkflowType } from "../../../src/api/APIContext.ts";

describe("APIContext", () => {
  it("should get correct main headers", async () => {
    const headers = APIContext.getMainHeaders();
    expect(headers).to.have.all.keys(
      "Spacefill-Ctx-Service-Source",
      "Spacefill-Ctx-Service-Version",
      "Spacefill-Ctx-Client-Type",
      "Spacefill-Ctx-Transport",
      "Spacefill-Ctx-Session-Id",
      "Spacefill-Ctx-Integration-Key",
      "Spacefill-Ctx-Warehouse-Id",
      "Spacefill-Ctx-Shipper-Account-Id",
    );
  });

  it("should get correct workflow headers", async () => {
    const headers = APIContext.getWorkflowHeader(WorkflowType.EXPORT_ITEM_REFERENCES);
    expect(headers).to.have.all.keys("Spacefill-Ctx-Workflow");
    expect(headers).to.have.property("Spacefill-Ctx-Workflow", WorkflowType.EXPORT_ITEM_REFERENCES);
  });

  it("should get correct data source headers", async () => {
    const headers = APIContext.getDataSourceHeader("test-data-source");
    expect(headers).to.have.all.keys("Spacefill-Ctx-Data-Source");
    expect(headers).to.have.property("Spacefill-Ctx-Data-Source", "test-data-source");
  });
});
