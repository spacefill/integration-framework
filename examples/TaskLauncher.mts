#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { TaskLauncher } from "../src/task/TaskLauncher.ts";

import { MasterItemExportExampleTask } from "./api_to_api/data_export_task_example/MasterItemExportExampleTask.mts";
import { InputJsonPayloadTaskExample } from "./api_to_api/input_json_payload_example/InputJsonPayloadTaskExample.mts";
import { JsonPayloadB64TaskExample } from "./api_to_api/input_json_payload_example/JsonPayloadB64TaskExample.mts";
import { DefaultFileTaskExample } from "./launch_task_file_example/DefaultFileTaskExample.mts";
import { SpeFileTaskExample1 } from "./launch_task_file_example/SpeFileTaskExample1.mts";

const tasksList = {
  "launch-task-file-example": {
    mode: {
      default: DefaultFileTaskExample,
      specific1: SpeFileTaskExample1,
    },
  },
  "data-export-task-example": {
    mode: {
      default: MasterItemExportExampleTask,
    },
  },
  "input-json-task-example": {
    mode: {
      default: InputJsonPayloadTaskExample,
      b64: JsonPayloadB64TaskExample,
    },
  },
};

const taskLauncher = new TaskLauncher(tasksList);
taskLauncher.run();
