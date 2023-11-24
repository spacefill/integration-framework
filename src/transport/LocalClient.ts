import { TransfertInterface } from "./TransfertInterfaces.ts";
import path from "path";
import { $, fs } from "zx";
import { constants } from "fs";
import { Config } from "../configs/Config.ts";

export class LocalClient implements TransfertInterface {
  checkStatut(): boolean {
    return true;
  }

  async close(): Promise<void> {
    return;
  }

  async mkdirIfNotExists(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    const mode = constants.COPYFILE_EXCL;
    fs.copyFileSync(localPath, path.join(process.cwd(), remotePath), mode);
  }

  async downloadAndReadFile(filepath: string, encoding: BufferEncoding): Promise<string> {
    return fs.readFile(filepath, encoding);
  }

  async listDirWithFilter(filepathPattern: string): Promise<string[]> {
    const directory = path.dirname(filepathPattern);
    const filenamePattern = path.basename(filepathPattern);

    const rawResult = fs.readdirSync(directory);

    const result = rawResult
      .filter((file) => {
        return file.match(new RegExp(filenamePattern));
      })
      .map((file) => {
        return path.join(directory, file);
      });

    return result;
  }

  async deleteFile(filepath: string): Promise<void> {
    await $`rm ${filepath}`;
  }

  async moveFile(
    sourceFilePath: string,
    targetFilePath: string,
    mkdirIfNotExists: boolean = false,
  ): Promise<void> {
    if (mkdirIfNotExists) {
      await $`mkdir -p ${path.dirname(targetFilePath)}`;
    }
    await $`mv ${sourceFilePath} ${targetFilePath}`;
  }

  async moveToErrorDir(sourceFilePath: string): Promise<void> {
    return this.moveFile(
      sourceFilePath,
      path.join(Config.get().edi.wmsPathErrorDir, path.basename(sourceFilePath)),
    );
  }

  async moveToArchiveDir(sourceFilePath: string): Promise<void> {
    return this.moveFile(
      sourceFilePath,
      path.join(Config.get().edi.wmsPathArchiveDir, path.basename(sourceFilePath)),
    );
  }
}
