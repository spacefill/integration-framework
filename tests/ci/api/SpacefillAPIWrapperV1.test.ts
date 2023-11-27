import { expect } from "chai";
import MockAdapter from "axios-mock-adapter";

import { SpacefillAPIWrapperV1 } from "../../../src/api/SpacefillAPIWrapperV1.ts";
import { WorkflowType } from "../../../src/api/APIContext.ts";
import { beforeEach } from "mocha";
import { initTestEnv } from "../../testUtils/initTestEnv.ts";
import { Console } from "../../../src/utils/Console.ts";

describe("SpacefillAPIWrapperV1", () => {
  let sdk: SpacefillAPIWrapperV1;

  before(() => initTestEnv());

  beforeEach(async () => {
    process.env.LOG_LEVEL = "fatal"; // set to 'debug' to see request logs.

    sdk = new SpacefillAPIWrapperV1();
    await sdk.initClient("http://127.0.0.1:5004", "testBearer", WorkflowType.EXPORT_ITEM_REFERENCES);
  });

  it("should get ping", async () => {
    const axiosInstance = sdk.getAxiosInstance();

    if (!axiosInstance) {
      Console.error("axiosInstance not initialized");
      return;
    }

    const mock = new MockAdapter(axiosInstance, { onNoMatch: "throwException" });
    mock.onGet("/v1/ping", {}).reply(200, { data: "mocked response" });

    if (!sdk.client) {
      Console.error("sdk.client not initialized");
      return;
    }
    await sdk.client.get_v1_ping();

    expect(mock.history.get.length).to.equals(1);
  });
});
