import { Stream } from "stream";
import { TransfertInterface } from "./TransfertInterfaces.js";
import path from 'path';
import { fs } from "zx";
import { constants } from "fs";

export class LocalClient implements TransfertInterface {

  checkStatut(): boolean {
    return true;
  }
  close(): void {
    return;
  }
  mkdirIfNotExists(): void {
    throw new Error("Method not implemented.");
  }
  upload(localPath: string, remotePath: string): void {
    const mode = constants.COPYFILE_EXCL;
    fs.copyFileSync(localPath, path.join(process.cwd(), remotePath), mode);
  }
  downloadAndReadFile(filepath: string, encoding: string): Stream {
    console.log(encoding, filepath);
    throw new Error("Method not implemented.");
  }
  async listDirWithFilter(filepathPattern: string): Promise<string[]> {
    const directory = path.dirname(filepathPattern);
    const filenamePattern = path.basename(filepathPattern);

    const rawResult = fs.readdirSync(directory);

    const result = rawResult.filter((file) => {
      return file.match(new RegExp(filenamePattern));
    }).map((file) => {
      return file;
    })

    return result;
  }
  deleteFile(filepath: string): void {
    throw new Error("Method not implemented.");
  }
  moveFile(filepath: string): void {
    throw new Error("Method not implemented.");
  }
  renameFile(filepath: string): void {
    throw new Error("Method not implemented.");
  }

}