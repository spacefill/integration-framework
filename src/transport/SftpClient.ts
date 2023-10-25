import { Stream } from "stream";
import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces.js";
import WFtp from 'w-ftp';
import path from 'path';


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
  close(): void {
    throw new Error("Method not implemented.");
  }
  mkdirIfNotExists(): void {
    throw new Error("Method not implemented.");
  }
  upload(localPath: string, remotePath: string): void {
    throw new Error("Method not implemented.");
  }
  downloadAndReadFile(filepath: string, encoding: string): Stream {
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