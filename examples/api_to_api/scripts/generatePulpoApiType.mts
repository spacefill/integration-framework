#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { $, cd, path } from "zx";

const currentDir = path.resolve();
cd(path.join(currentDir, ".."));

// !! To update the openapi file, please follow these instructions:
//
// - Download the wms_pulpo_openapi.json file from https://eu-show.pulpo.co/api/v1/swagger/wms.json
// - Clean the file using anomalies.md

await $`npx openapi-client-axios-typegen "wms_pulpo_openapi.json" > pulpo-api-openapi.d.ts`;
