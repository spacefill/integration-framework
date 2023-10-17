import { Config } from "../configs/Config.ts";
import { Transfert } from "../transport/Transfert.ts";
import Console from "../utils/Console.mts";
import { GenerateFileTasklnterface } from "./GenerateFileTasklnterfaces.ts";
import api from 'api';

export abstract class AbstractGenerateFileTask implements GenerateFileTasklnterface {
  protected sdk;
  protected transfert: Transfert;

  initApiClient() {
    console.log("auth ", Config.spacefillApi.apiToken);
    console.log("server ", Config.spacefillApi.url);
    this.sdk = api('@spacefill/v1#p570f12ln978a7s');
    this.sdk.auth(Config.spacefillApi.apiToken);
    this.sdk.server(Config.spacefillApi.url);
  }
  prepareFilesData(): Promise<Array<object[]>> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateFileData(_data: object[]): void {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapFileData(_data: object[]): object[]{
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  generateFile(_mappedData: object[]): string {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendFile(_mappedData: string): void {
    throw new Error("Method not implemented.");
  }

  async run(): Promise<void> {
    let errorFound = false;
    try {
      Config.validate();
      this.initApiClient();
      const filesData = await this.prepareFilesData();
      for (const fileData of filesData) {
        try {
          const mappedData = this.mapFileData(fileData);
          this.validateFileData(mappedData);
          const generatedFile = this.generateFile(mappedData);
          this.sendFile(generatedFile);
        } catch (processFileException) {
          Console.error(processFileException);
          errorFound = true;
        }
      }
    } catch (exception) {
      Console.error(exception);
      process.exit(1);
    }

    if (errorFound) {
      process.exit(1);
    }
  }

}
