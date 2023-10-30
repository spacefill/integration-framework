import {temporaryFileTask} from 'tempy';

import { Config } from "../configs/Config.ts";
import Console from "../utils/Console.ts";
import { AbstractTask } from "./AbstractTask.ts";
import { GenerateFileTasklnterface, InitialDataItem } from "./GenerateFileTasklnterfaces.ts";

export abstract class AbstractGenerateFileTask<T> extends AbstractTask implements GenerateFileTasklnterface<T> {

  protected currentFileConfiguration: InitialDataItem<T>;

  initFilesGeneration(): InitialDataItem<T>[] {
    throw new Error("Method not implemented.");
  }
  prepareFileData(): Promise<T[]> {
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
      this.beforeRun();

      Console.info(`Starting new task, type: ${this.constructor.name}`);
      Console.info("Config validation -------------------");
      Config.validate();
      Console.confirm("Config validated");

      const filesConfiguration = this.initFilesGeneration();
      for (const fileConfiguration of filesConfiguration) {
        try {
          this.currentFileConfiguration = fileConfiguration;

          Console.info("Api init ----------------------------");
          await this.initApiClient(this.currentFileConfiguration.workflowType);
          this.sdk.dataSource = 'API';
          await this.sdk.client.get_v1_ping_v1_ping_get().then(() => {
            Console.confirm("Api initialized");
          }).catch(() => {
            Console.error("Cannot reach api. Exit.");
            process.exit(1);
          })

          Console.info("Data preparation --------------------");
          const rawData = await this.prepareFileData();
          Console.confirm("Data prepared");

          if (rawData.length === 0) {
            Console.confirm("No data to export. Exit.");
            continue;
          }

          Console.info("Data mapping ------------------------");
          Console.debug(`${rawData?.length} items to map.`);
          const mappedData = this.currentFileConfiguration.schema.mapFileData(rawData);
          Console.confirm("Data mapped");

          Console.info("Data validation ---------------------");
          this.currentFileConfiguration.schema.validateFileData(mappedData);
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
      this.afterRun();
      process.exit(1);
    }

    Console.confirm("Task completed with success");
    this.afterRun();

    if (errorFound) {
      process.exit(1);
    }
  }

}
