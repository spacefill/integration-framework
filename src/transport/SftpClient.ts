import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces.js";
import WFtp from 'w-ftp';
import path from 'path';
import { Config } from "../configs/Config.ts";


interface SSH2TransfertConfiguration {
  hostname: string,
  port: number,
  username: string,
  password: string,
  transportation: string
}

interface FileObject {
  name: string
}

export class SftpClient implements TransfertInterface {
  private configuration: SSH2TransfertConfiguration;

  constructor(configuration: TransfertConfiguration) {
    // others options see: https://github.com/Atinux/node-ftps#usage
    this.configuration = {
      transportation: 'SFTP',
      hostname: configuration.hostname,
      port: configuration.port,
      username: configuration.username,
      password: configuration.password,
    };
  }

  checkStatut(): boolean {
    throw new Error("Method not implemented.");
  }

  async close(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async mkdirIfNotExists(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async downloadAndReadFile(filepath: string, encoding: BufferEncoding): Promise<string> {
    console.log(encoding, filepath);
    throw new Error("Method not implemented.");
  }

  async listDirWithFilter(filepathPattern: string): Promise<string[]> {
    const client = new WFtp(this.configuration);
    await client.conn();

    const directory = path.dirname(filepathPattern);
    const filenamePattern = path.basename(filepathPattern);

    const rawResult = await client.ls(directory);

    const result = rawResult.filter((file: FileObject) => {
      return file.name.match(new RegExp(filenamePattern));
    }).map((file: FileObject) => {
      return file.name;
    })

    await client.quit()
    return result;
  }

  async deleteFile(filepath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async moveFile(sourceFilePath: string, targetFilePath: string, mkdirIfNotExists: boolean = true): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async moveToErrorDir(sourceFilePath: string): Promise<void> {
    return this.moveFile(sourceFilePath, path.join(Config.get().edi.wmsPathErrorDir, path.basename(sourceFilePath)));
  }

  async moveToArchiveDir(sourceFilePath: string): Promise<void> {
    return this.moveFile(sourceFilePath, path.join(Config.get().edi.wmsPathArchiveDir, path.basename(sourceFilePath)));
  }
}
