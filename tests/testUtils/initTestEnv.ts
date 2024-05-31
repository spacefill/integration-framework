import path from "path";
import { fileURLToPath } from "url";

import { Config } from "../../src/configs/Config.ts";

export function initTestEnv() {
  const currentDirName = path.dirname(fileURLToPath(import.meta.url));
  Config.reloadConfig(path.join(currentDirName, "test.env"));
}
