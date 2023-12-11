import { assert } from "chai";

import { TaskLauncher } from "../../../src/task/TaskLauncher.ts";
import { AbstractGenerateFileTask, AbstractTask } from "../../../src/index.ts";
import { initTestEnv } from "../../testUtils/initTestEnv.ts";

interface TestItem {
  id: number;
}

class TesGenFile extends AbstractGenerateFileTask<TestItem> {}

describe("TaskLauncher", () => {
  before(async () => {
    initTestEnv();
  });

  it("parseArgs", async () => {
    process.argv.push("-t");
    process.argv.push("test-command");
    process.argv.push("-m");
    process.argv.push("default");

    const testTastLauncher = new TaskLauncher({
      "test-command": {
        mode: {
          default: TesGenFile,
        },
      },
    });

    assert.instanceOf(testTastLauncher.getTask(), AbstractTask);
  });
});
