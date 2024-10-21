#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { PestoreWrapperExample } from "./PestoreWrapperExample.ts";

const petStoreApiWrapper = new PestoreWrapperExample();
await petStoreApiWrapper.initClient("https://petstore3.swagger.io/api/v3", "fakeBearer");

const resultByMethodName = await petStoreApiWrapper.client?.findPetsByStatus({ status: "available" });

console.log("resultByMethodName", resultByMethodName?.data);

// other method:

const resultByPath = await petStoreApiWrapper.client?.paths["/pet/findByStatus"].get({ status: "available" });

console.log("resultByPath", resultByPath?.data);
