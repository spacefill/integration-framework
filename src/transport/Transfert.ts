import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces.ts"
import { SftpClient } from "./SftpClient.ts";
import { LocalClient } from "./LocalClient.ts";
import { Config } from "../configs/Config.ts";
import Console from "../utils/Console.ts";

enum TransfertProtocol {
  sftp = 'sftp',
  ftp = 'ftp',
  local = 'local'
}

class Transfert implements TransfertInterface {
  protected protocol: TransfertProtocol;
  protected configuration: TransfertConfiguration;
  protected client: TransfertInterface;

  constructor(
    protocol: TransfertProtocol,
    configuration?: TransfertConfiguration
  ) {
    this.protocol = protocol;
    this.configuration = configuration;

    Console.debug("Transfert", {
      protocol: this.protocol,
      configuration: this.configuration
    });

    switch (this.protocol) {
      case TransfertProtocol.sftp:
        this.client = new SftpClient(this.configuration);
        break;
      case TransfertProtocol.local:
        this.client = new LocalClient();
        break;
      default:
        throw new Error(`Unsupported protocol ${this.protocol} - check your configuration`);
    }
  }
  checkStatut(): boolean {
    return this.client.checkStatut();
  }
  async close(): Promise<void> {
    return this.client.close();
  }
  async mkdirIfNotExists(): Promise<void> {
    return this.client.mkdirIfNotExists();
  }
  async upload(localPath: string, remotePath: string): Promise<void> {
    return this.client.upload(localPath, remotePath);
  }
  async downloadAndReadFile(filepath: string): Promise<string> {
    return this.client.downloadAndReadFile(filepath, Config.get().edi.fileEncoding as BufferEncoding);
  }
  async listDirWithFilter(filepathPattern: string): Promise<string[]> {
    return this.client.listDirWithFilter(filepathPattern);
  }
  async deleteFile(filepath: string): Promise<void> {
    return this.client.deleteFile(filepath);
  }
  async moveFile(sourceFilePath: string, targetFilePath: string, mkdirIfNotExists: boolean = true): Promise<void> {
    return this.client.moveFile(sourceFilePath, targetFilePath, mkdirIfNotExists);
  }
  async moveToErrorDir(sourceFilePath: string): Promise<void> {
    return this.client.moveToErrorDir(sourceFilePath);
  }
  async moveToArchiveDir(sourceFilePath: string): Promise<void> {
    return this.client.moveToArchiveDir(sourceFilePath);
  }
}

export { Transfert, TransfertProtocol };