#!/usr/bin/env -S npx ts-node --esm --transpile-only

import { Console } from "../../src/utils/Console.ts";
import { DefaultFileTaskExample } from "./DefaultFileTaskExample.mts";

export class SpeFileTaskExample1 extends DefaultFileTaskExample {
    protected displayUsages() {
        Console.log("Usage: ./examples/TaskLauncher.mts --task launch-task-file-example -m specific1  --env=./examples/.env.example [OPTIONS]");
        super.displayUsages();
    }

    async run(): Promise<void> {
        Console.log("Mode Specific 1 is running");
    }
}
