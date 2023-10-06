import { Config } from "../configs/Config.ts";
import { Transfert } from "../transport/Transfert.ts";
import Console from "../utils/Console.mts";
import { GenerateFileTasklnterface } from "./GenerateFileTasklnterfaces.ts";
import api from 'api';

export abstract class AbstractGenerateFileTask implements GenerateFileTasklnterface {
  protected sdk;
  protected transfert: Transfert;

  initApiClient() {
    console.log("test ", Config.spacefill_api);
    this.sdk = api('@spacefill/v1#p570f12ln978a7s');
    this.sdk.auth(Config.spacefill_api.api_token);
    this.sdk.server(Config.spacefill_api.url);
  }
  prepareData(): Promise<Array<object>> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateData(_data: object): void {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapResult(_data: object): Array<string> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  generateFile(_mappedData: string[]): string {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendFile(_mappedData: string): void {
    throw new Error("Method not implemented.");
  }

  async run(): Promise<void> {
    try {
      this.initApiClient();
      const filesData = await this.prepareData();
      for (const fileData of filesData) {
        try {
          this.validateData(fileData);
          const mappedData = this.mapResult(fileData);
          const generatedFile = this.generateFile(mappedData);
          this.sendFile(generatedFile);
        } catch (processFileException) {
          Console.error(processFileException);
        }
      }
    } catch (exception) {
      Console.error(exception);
    }
  }

}
