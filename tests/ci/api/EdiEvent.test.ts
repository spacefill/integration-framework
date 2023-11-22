import { assert, expect } from 'chai';
import MockAdapter from 'axios-mock-adapter';

import { EventTypeEnumString } from '../../../src/api/EdiEvent.ts';
import { SpacefillAPIWrapperV1 } from '../../../src/api/SpacefillAPIWrapperV1.ts';
import { WorkflowType } from '../../../src/api/APIContext.ts';
import { beforeEach } from 'mocha';
import initTestEnv from '../../testUtils/initTestEnv.ts';

describe('EdiEvent', () => {
  let sdk: SpacefillAPIWrapperV1;

  before(() => initTestEnv())

  beforeEach(async () => {
    process.env.SPACEFILL_API_EVENT_ENABLED = '1';
    process.env.WMS_SHIPPER_ACCOUNT_ID = 'fake-shipper-id';
    process.env.WMS_WAREHOUSE_ID = 'fake-warehouse-id';
    process.env.LOG_LEVEL = 'fatal'; // set to 'debug' to see request logs.

    sdk = new SpacefillAPIWrapperV1();
    await sdk.initClient(
      'http://127.0.0.1:5004',
      'testBearer',
      WorkflowType.EXPORT_ITEM_REFERENCES
    );
  });

  it('should send event', async () => {

    const axiosInstance = sdk.getAxiosInstance();

    const mock = new MockAdapter(axiosInstance,  { onNoMatch: "throwException" });
    mock.onPost("/v1/logistic_management/events/").reply(200, { data: 'mocked response' });

    const meta = { test: "hello" };
    await sdk.ediEvent.send(EventTypeEnumString.STARTED, 'Test started event message', meta);

    expect(mock.history.post.length).to.equals(1);
    assert(mock.history.post[0].data,
      JSON.stringify({
        type: "STARTED",
        message: "Test started event message",
        data: {
          shipper_account_id: "fake-shipper-id",
          warehouse_id: "fake-warehouse-id"
        },
        meta: { "test": "hello" }
      })
    );
  });

  it('should not send network error', async () => {
    const axiosInstance = sdk.getAxiosInstance();

    const mock = new MockAdapter(axiosInstance);
    mock.onPost("/v1/logistic_management/events/").reply(200, { data: 'mocked response' });

    await sdk.ediEvent.send(EventTypeEnumString.API_NETWORK_ERROR, 'Network error event message');

    expect(mock.history.post.length).to.equals(0);
  });

  it('should not send events', async () => {
    process.env.SPACEFILL_API_EVENT_ENABLED = '0';
    const axiosInstance = sdk.getAxiosInstance();

    const mock = new MockAdapter(axiosInstance);
    mock.onPost("/v1/logistic_management/events/").reply(200, { data: 'mocked response' });

    await sdk.ediEvent.send(EventTypeEnumString.STARTED, 'Test started event message');

    expect(mock.history.post.length).to.equals(0);
  });
});