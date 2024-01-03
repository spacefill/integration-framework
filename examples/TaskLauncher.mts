#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { TaskLauncher } from '../src/task/TaskLauncher.ts';
import { DefaultFileTaskExample } from './launch_task_file_example/DefaultFileTaskExample.mts';
import { SpeFileTaskExample1 } from './launch_task_file_example/SpeFileTaskExample1.mts';

const tasksList = {
  "launch-task-file-example": {
    mode: {
      default: DefaultFileTaskExample,
      specific1: SpeFileTaskExample1
    },
  },
};

const taskLauncher = new TaskLauncher(tasksList);
taskLauncher.run();
