import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces.ts";
import sftp from "ssh2-sftp-client";
import { Console } from "../utils/Console.ts";

interface SSH2TransfertConfiguration {
  hostname: string;
  port: number;
  username: string;
  password: string;
  retries?: number,
  retry_minTimeout?: number
}

export class SftpClient implements TransfertInterface {
  private configuration: SSH2TransfertConfiguration;
  private client: sftp;

  constructor(configuration: TransfertConfiguration) {
    this.configuration = {
      hostname: configuration.hostname,
      port: configuration.port,
      username: configuration.username,
      password: configuration.password,
      retries: configuration.retries,
      retry_minTimeout: configuration.delay
    };
    this.client = new sftp();
  }

  async open(): Promise<void> {
    this.client = new sftp();
    await this.client.connect(this.configuration);
  }

  async close(): Promise<void> {
    this.client.end();
  }

  async mkdirIfNotExists(remotePath: string): Promise<void> {
    await this.client.mkdir(remotePath, true);
  }

  async isExists(remotePath: string): Promise<string | boolean> {
    return await this.client.exists(remotePath);
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    Console.debug(`Uploading ${localPath} to ${remotePath} ...`);
    await this.client.put(localPath, remotePath);
  }

  async downloadAndReadFile(remotePath: string, encoding: BufferEncoding): Promise<string> {
    Console.debug(`Downloading ${remotePath} ...`);
    const options = {
      readStreamOptions: {
        encoding: encoding,
      },
    };
    return (await this.client.get(remotePath, undefined, options)) as string; // remotePath is path to the remote file to download
  }

  async listDirWithFilter(remotePath: string): Promise<string[]> {
    return (await this.client.list(remotePath)).map((file) => file.name) as unknown as string[];
  }

  async moveFile(sourcePath: string, targetPath: string): Promise<void> {
    Console.debug(`Moving file ${sourcePath} to ${targetPath} ...`);
    await this.client.rename(sourcePath, targetPath);
  }

  async deleteFile(remotePath: string): Promise<void> {
    Console.debug(`Deleting ${remotePath}`);
    await this.client.delete(remotePath);
  }
}
