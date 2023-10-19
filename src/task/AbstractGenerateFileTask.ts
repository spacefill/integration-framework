import { Config } from "../configs/Config.ts";
import Console from "../utils/Console.mts";
import { AbstractTask } from "./AbstractTask.ts";
import { GenerateFileTasklnterface } from "./GenerateFileTasklnterfaces.ts";

export abstract class AbstractGenerateFileTask extends AbstractTask implements GenerateFileTasklnterface {
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
      await this.initApiClient();
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
