#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { Console } from "../../src/utils/Console.ts";
import { AbstractTask } from "../../src/index.ts";

export class DefaultFileTaskExample extends AbstractTask {
    protected displayUsages() {
        Console.log("Usage: ./examples/TaskLauncher.mts --task launch-task-file-example -m default  --env=./examples/.env.example [OPTIONS]");
        super.displayUsages();
    }

    async run(): Promise<void> {
        Console.log("Mode Default is running");
    }
}
