import { TransfertInterface } from "./TransfertInterfaces.ts";
import path from 'path';
import { $, fs } from "zx";
import { constants } from "fs";

export class LocalClient implements TransfertInterface {

  async open(): Promise<void> {
    return;
  }

  async close(): Promise<void> {
    return;
  }

  async mkdirIfNotExists(remotePath: string): Promise<void> {
    fs.mkdirSync(remotePath, { recursive: true });
  }

  async isExists(remotePath: string): Promise<string|boolean>  {
    return fs.existsSync(remotePath);
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    const mode = constants.COPYFILE_EXCL;
    fs.copyFileSync(localPath, path.join(process.cwd(), remotePath), mode);
  }

  async downloadAndReadFile(remotePath: string, encoding: BufferEncoding): Promise<string> {
    return fs.readFile(remotePath, encoding);
  }

  async listDirWithFilter(remotePath: string): Promise<string[]> {
    return fs.readdirSync(remotePath);
  }

  async deleteFile(filepath: string): Promise<void> {
    await $`rm ${filepath}`;
  }

  async moveFile(sourceFilePath: string, targetFilePath: string): Promise<void> {
    await $`mv ${sourceFilePath} ${targetFilePath}`;
  }
}
