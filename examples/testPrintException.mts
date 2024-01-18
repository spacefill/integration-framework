#!/usr/bin/env -S npx ts-node --esm --transpile-only

import axios from "axios";

import { Console } from "../src/utils/Console.ts";

try {
  await axios.post(
    "http://localhost:5004/v1/logistic_management/master_items/?item_reference=test&archived=no&offset=0&limit=25",
    { hello: "toto" },
  );
} catch (error) {
  Console.printException(error);
}
