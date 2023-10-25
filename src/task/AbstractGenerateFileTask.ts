import {temporaryFileTask} from 'tempy';

import { Config } from "../configs/Config.ts";
import Console from "../utils/Console.mts";
import { AbstractTask } from "./AbstractTask.ts";
import { GenerateFileTasklnterface, InitialDataItem } from "./GenerateFileTasklnterfaces.ts";

export abstract class AbstractGenerateFileTask extends AbstractTask implements GenerateFileTasklnterface {

  protected currentFileConfiguration: InitialDataItem;

  initFilesGeneration(): InitialDataItem[] {
    throw new Error("Method not implemented.");
  }
  prepareFileData(): Promise<object[]> {
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
  async generateFile(_mappedData: object[], _tempFilePath: string): Promise<void>{
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendFile(_tempFilePath: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postAction(): Promise<void> {
    Console.debug("No post actions");
  }

  async run(): Promise<void> {
    let errorFound = false;
    try {
      Console.info("Config validation -------------------")
      Config.validate();
      Console.confirm("Config validated");

      Console.info("Api init ----------------------------")
      await this.initApiClient();
      Console.confirm("Api initialized");

      const filesConfiguration = this.initFilesGeneration();
      for (const fileConfiguration of filesConfiguration) {
        try {
          this.currentFileConfiguration = fileConfiguration;
          Console.info("Data preparation --------------------");
          const rawData = await this.prepareFileData();
          Console.confirm("Data prepared");

          Console.info("Data mapping ------------------------");
          Console.debug(`${rawData?.length} items to map.`);
          const mappedData = this.mapFileData(rawData);
          Console.confirm("Data mapped");

          Console.info("Data validation ---------------------");
          this.validateFileData(mappedData);
          Console.confirm("Data validated");

          await temporaryFileTask(async(tempFilePath) => {
            Console.info(`Temporary file: ${tempFilePath}`)
            Console.info("File generation ---------------------");
            await this.generateFile(mappedData, tempFilePath);
            Console.confirm("File generated");

            Console.info("File sending ------------------------");
            const sentFile = await this.sendFile(tempFilePath);
            Console.confirm(`File ${sentFile} well sent.`);
          });

          Console.info("Post action ---------------------");
          await this.postAction();
          Console.confirm("Data action done");

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
