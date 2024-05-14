#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { Console } from "../../../src/index.ts";
import { AbstractApiDataExchangeTask } from "../../../src/task/AbstractApiDataExchangeTask.ts";

export class JsonPayloadB64TaskExample extends AbstractApiDataExchangeTask<string> {
  async run(): Promise<void> {
    if (this.argv?.["input-json-payload-b64"]) {
      this.inputPayload = JSON.parse(Buffer.from(this.argv["input-json-payload-b64"], "base64").toString());
      Console.trace("inputPayload", this.inputPayload);
    } else {
      Console.info("No inputPayload provided");
    }
  }
}
