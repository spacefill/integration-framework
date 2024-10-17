import { constants } from "fs";

import { fs } from "zx";

import { FileMetadata, TransferInterface } from "./TransferInterfaces.ts";

export class LocalClient implements TransferInterface {
  async open(): Promise<void> {
    return;
  }

  async close(): Promise<void> {
    return;
  }

  async mkdirIfNotExists(remotePath: string): Promise<void> {
    fs.mkdirSync(remotePath, { recursive: true });
  }

  async isExists(remotePath: string): Promise<boolean> {
    return fs.existsSync(remotePath);
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    const mode = constants.COPYFILE_EXCL;
    fs.copyFileSync(localPath, remotePath, mode);
  }

  async downloadAndReadFile(remotePath: string, encoding: BufferEncoding): Promise<string> {
    return fs.readFile(remotePath, encoding);
  }

  async listDirWithFilter(remotePath: string): Promise<string[]> {
    return fs.readdirSync(remotePath);
  }

  async listDirWithMetadataWithFilter(remotePath: string): Promise<FileMetadata[]> {
    // list all files in the directory with date
    return fs.readdirSync(remotePath).map((file) => {
      const stats = fs.statSync(file);
      return {
        name: file,
        date: stats.mtime,
      };
    });
  }

  async deleteFile(filepath: string): Promise<void> {
    fs.unlinkSync(filepath);
  }

  async moveFile(sourceFilePath: string, targetFilePath: string): Promise<void> {
    fs.renameSync(sourceFilePath, targetFilePath);
  }
}
