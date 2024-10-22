import path from "path";

import * as ftp from "basic-ftp";
import { fs } from "zx";
import { temporaryFileTask } from "tempy";

import { Console } from "../utils/Console.ts";

import { FileMetadata, TransferConfiguration, TransferInterface } from "./TransferInterfaces.ts";

interface FTPTransferConfiguration {
  host: string;
  port: number;
  user: string;
  password: string;
  retries?: number;
  retry_minTimeout?: number;
}

export class FtpClient implements TransferInterface {
  private configuration: FTPTransferConfiguration;
  private client: ftp.Client;

  constructor(configuration: TransferConfiguration) {
    this.configuration = {
      host: configuration.hostname,
      port: configuration.port,
      user: configuration.username,
      password: configuration.password,
      retries: configuration.retries,
      retry_minTimeout: configuration.delay,
    };
    this.client = new ftp.Client();
  }

  async open(): Promise<void> {
    this.client = new ftp.Client();
    await this.client.access(this.configuration);
  }

  async close(): Promise<void> {
    this.client.close();
  }

  async mkdirIfNotExists(remotePath: string): Promise<void> {
    await this.client.ensureDir(remotePath);
  }

  async isExists(remotePath: string): Promise<boolean> {
    const targetFilePath = path.dirname(remotePath);
    const targetFileName = path.basename(remotePath);

    const list = await this.client.list(targetFilePath);

    return list.length > 0 && list.some((item) => item.name === targetFileName);
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    Console.debug(`Uploading ${localPath} to ${remotePath} ...`);
    await this.client.uploadFrom(localPath, remotePath);
  }

  async downloadAndReadFile(remotePath: string, encoding: BufferEncoding): Promise<string> {
    Console.debug(`Downloading ${remotePath} ...`);

    let fileContent: string = "";

    await temporaryFileTask(async (tempFilePath) => {
      const writableStream = fs.createWriteStream(tempFilePath);
      await this.client.downloadTo(writableStream, remotePath);

      fileContent = await fs.readFile(tempFilePath, encoding);
    });

    return fileContent;
  }

  async listDirWithFilter(remotePath: string): Promise<string[]> {
    const files = await this.client.list(remotePath);
    return files.map((file) => file.name as unknown as string);
  }

  async listDirWithMetadataWithFilter(remotePath: string): Promise<FileMetadata[]> {
    const files = await this.client.list(remotePath);
    return files.map((file) => ({
      name: file.name as unknown as string,
      modifiedDate: file.modifiedAt,
    }));
  }

  async moveFile(sourcePath: string, targetPath: string): Promise<void> {
    Console.debug(`Moving file ${sourcePath} to ${targetPath} ...`);
    await this.client.rename(path.join("/", sourcePath), path.join("/", targetPath)); // For ftp we need to add '/' before the path
  }

  async deleteFile(remotePath: string): Promise<void> {
    Console.debug(`Deleting ${remotePath}`);
    await this.client.remove(remotePath);
  }
}
