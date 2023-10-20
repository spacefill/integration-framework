import {temporaryFileTask} from 'tempy';

import { Config } from "../configs/Config.ts";
import Console from "../utils/Console.mts";
import { AbstractTask } from "./AbstractTask.ts";
import { GenerateFileTasklnterface } from "./GenerateFileTasklnterfaces.ts";

export abstract class AbstractGenerateFileTask extends AbstractTask implements GenerateFileTasklnterface {
  initFilesGeneration(): object[] {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prepareFileData(_fileConfiguration: object): Promise<object[]> {
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
  async sendFile(_tempFilePath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postAction(_rawData: object[]): Promise<void> {
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
          Console.info("Data preparation --------------------");
          const rawData = await this.prepareFileData(fileConfiguration);
          Console.confirm("Data prepared");

          Console.info("Data mapping ------------------------");
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
            await this.sendFile(tempFilePath);
            Console.confirm("File sent");
          })

          await this.postAction(rawData);
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
