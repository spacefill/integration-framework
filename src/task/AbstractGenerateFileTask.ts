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
      Console.info("Config validation -------------------")
      Config.validate();
      Console.confirm("Config validated");

      Console.info("Api init ----------------------------")
      await this.initApiClient();
      Console.confirm("Api initialized");

      const filesConfiguration = this.initFilesGeneration();
      for (const fileConfiguration of filesConfiguration) {
        try {
          Console.info("Data preparation ----------------");
          const fileData = await this.prepareFileData(fileConfiguration);
          Console.confirm("Data prepared");

          Console.info("Data mapping --------------------");
          const mappedData = this.mapFileData(fileData);
          Console.confirm("Data mapped");

          Console.info("Data validation -----------------");
          this.validateFileData(mappedData);
          Console.confirm("Data validated");

          Console.info("File generation -----------------");
          const generatedFile = this.generateFile(mappedData);
          Console.confirm("File generated");

          Console.info("File sending --------------------");
          this.sendFile(generatedFile);
          Console.confirm("File sent");

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
