#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { Console } from "../../../src/index.ts";
import { AbstractApiDataExchangeTask } from "../../../src/task/AbstractApiDataExchangeTask.ts";

export class InputJsonPayloadTaskExample extends AbstractApiDataExchangeTask<string> {
  async run(): Promise<void> {
    if (this.argv?.["input-json-payload"]) {
      this.inputPayload = JSON.parse(this.argv["input-json-payload"]);
      Console.info("inputPayload", this.inputPayload);
    } else {
      Console.info("No inputPayload provided");
    }
  }
}
