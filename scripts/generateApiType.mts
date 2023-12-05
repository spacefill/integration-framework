#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { temporaryFileTask } from "tempy";
import { $, cd, fs, path } from "zx";

const openapiDef = "https://api.spacefill.fr/openapi.json";

const currentDir = path.resolve();
cd(path.join(currentDir, ".."));

await temporaryFileTask(async (tempFilePath) => {
  await $`wget ${openapiDef} -O ${tempFilePath}`;

  const openApiJson = JSON.parse(fs.readFileSync(tempFilePath, "utf-8"));

  for (const currentPath in openApiJson.paths) {
    for (const currentOperationIndex in openApiJson.paths[currentPath]) {
      const currentOperation = openApiJson.paths[currentPath][currentOperationIndex];

      if (currentOperation?.operationId) {
        // replace operation names because of FastApi generation openapi file repeats same terms several times
        // ex.
        // before:  get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get
        // after:   get_v1_logistic_management_master_item_list
        const currentOperationPartNames = currentOperation.operationId.split("_v1");
        currentOperationPartNames.pop();
        openApiJson.paths[currentPath][currentOperationIndex].operationId =
          currentOperationPartNames.join("_v1");
      }
    }
  }
  fs.writeFileSync("./src/api/openapi.json", JSON.stringify(openApiJson));

  await $`npx openapi-client-axios-typegen "src/api/openapi.json" > src/api/spacefill-api-openapi.d.ts`;
});
