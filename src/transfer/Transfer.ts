import path from "path";
import { TransferConfiguration, TransferInterface } from "./TransferInterfaces.ts";
import { SftpClient } from "./SftpClient.ts";
import { LocalClient } from "./LocalClient.ts";
import { Config } from "../configs/Config.ts";
import { Console } from "../utils/Console.ts";
import { FtpClient } from "./FtpClient.ts";

enum TransferProtocol {
  sftp = "sftp",
  ftp = "ftp",
  local = "local",
}

class Transfer implements TransferInterface {
  protected protocol: TransferProtocol;
  protected configuration: TransferConfiguration;
  protected client: TransferInterface;

  constructor(protocol: TransferProtocol, configuration?: TransferConfiguration) {
    this.protocol = protocol;
    this.configuration = configuration as TransferConfiguration;

    Console.debug("Transfer", {
      protocol: this.protocol,
      configuration: this.configuration,
    });

    switch (this.protocol) {
      case TransferProtocol.sftp:
        this.client = new SftpClient(this.configuration);
        break;
      case TransferProtocol.ftp:
        this.client = new FtpClient(this.configuration);
        break;
      case TransferProtocol.local:
        this.client = new LocalClient();
        break;
      default:
        throw new Error(`Unsupported protocol ${this.protocol} - check your configuration`);
    }
  }

  async open(): Promise<void> {
    return await this.client.open();
  }

  async close(): Promise<void> {
    return await this.client.close();
  }

  async mkdirIfNotExists(remotePath: string): Promise<void> {
    try {
      await this.open();
      await this.client.mkdirIfNotExists(remotePath);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      await this.close();
    }
  }

  async isExists(remotePath: string): Promise<boolean> {
    try {
      await this.open();
      return await this.client.isExists(remotePath);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      await this.close();
    }
  }

  async upload(localPath: string, remotePath: string): Promise<void> {
    try {
      await this.open();
      await this.client.upload(localPath, remotePath);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      await this.close();
    }
  }

  async downloadAndReadFile(remotePath: string): Promise<string> {
    try {
      await this.open();
      return await this.client.downloadAndReadFile(
        remotePath,
        Config.get().edi.fileEncoding as BufferEncoding,
      );
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      await this.close();
    }
  }
  async listDirWithFilter(filepathPattern: string): Promise<string[]> {
    try {
      const remotePath = path.dirname(filepathPattern);
      const fileNamePattern = path.basename(filepathPattern);
      Console.debug(`Listing ${remotePath} with pattern ${fileNamePattern} ...`);

      await this.open();
      const rawResult = await this.client.listDirWithFilter(remotePath);

      const result = rawResult
        .filter((file) => {
          return file.match(new RegExp(fileNamePattern));
        })
        .map((file) => {
          return path.join(remotePath, file);
        });

      Console.debug(`Files list: ${result}`);
      return result;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      this.close();
    }
  }

  async moveFile(sourcePath: string, targetPath: string): Promise<void> {
    try {
      await this.open();

      const targetFilePath = path.dirname(targetPath);
      const targetFileName = path.basename(targetPath);

      await this.client.mkdirIfNotExists(targetFilePath);

      if ((await this.client.isExists(targetPath))) {
        throw `File name ${targetFileName} already exists in ${targetFilePath} folder.`;
      } else {
        await this.client.moveFile(sourcePath, targetPath);
      }
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      await this.close();
    }
  }

  async deleteFile(remotePath: string): Promise<void> {
    try {
      await this.open();
      return await this.client.deleteFile(remotePath);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      await this.close();
    }
  }

  async moveToErrorDir(sourcePath: string): Promise<void> {
    return this.moveFile(
      sourcePath,
      path.join(Config.get().edi.wmsPathErrorDir as string, path.basename(sourcePath)),
    );
  }

  async moveToArchiveDir(sourcePath: string): Promise<void> {
    return this.moveFile(
      sourcePath,
      path.join(Config.get().edi.wmsPathArchiveDir as string, path.basename(sourcePath)),
    );
  }
}

export { Transfer, TransferProtocol };
