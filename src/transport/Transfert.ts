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
  close(): void {
    return this.client.close();
  }
  mkdirIfNotExists(): void {
    return this.client.mkdirIfNotExists();
  }
  upload(localPath: string, remotePath: string): void {
    return this.client.upload(localPath, remotePath);
  }
  async downloadAndReadFile(filepath: string): Promise<string> {
    return this.client.downloadAndReadFile(filepath, Config.get().edi.fileEncoding as BufferEncoding);
  }
  listDirWithFilter(filepathPattern: string): Promise<string[]> {
    return this.client.listDirWithFilter(filepathPattern);
  }
  deleteFile(filepath: string): void {
    return this.client.deleteFile(filepath);
  }
  moveFile(filepath: string): void {
    return this.client.moveFile(filepath);
  }
  renameFile(filepath: string): void {
    return this.client.renameFile(filepath);
  }
}

export { Transfert, TransfertProtocol };