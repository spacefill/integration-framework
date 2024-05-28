import { Config } from "../configs/Config.ts";
import { Console } from "../utils/Console.ts";
import { EventTypeEnumString } from "../api/EdiEvent.ts";
import { ExceptionUtils } from "../utils/ExceptionUtils.ts";
import { ApiNetWorkError } from "../exceptions/ApiNetWorkError.ts";
import { UnknownError } from "../exceptions/UnknownError.ts";
import { DataExportSchemaInterface } from "../data_mapping/SchemaInterfaces.ts";
import { InternalError } from "../exceptions/InternalError.ts";

import { AbstractTask } from "./AbstractTask.ts";
import { ExportDataToApiTaskInterface, InitialDataItemToExport } from "./ExportDataToApiTaskInterface.ts";
import { Argument } from "./BaseCommand.ts";

export abstract class AbstractApiDataExchangeTask<T>
  extends AbstractTask
  implements ExportDataToApiTaskInterface<T>
{
  protected currentDataExportConfiguration: InitialDataItemToExport<T> | undefined;
  protected inputPayload: object | undefined;

  /**
   * Overload common arguments
   * @returns Argument[]
   */
  protected getArgsList(): Argument[] {
    return [
      ...super.getArgsList(),
      {
        argName: "--input-json-payload",
        argDescription:
          "Allows to define an input json payload (useful for webhooks or to defined a dynamic configuration) ",
      },
    ];
  }

  async initDataExport(): Promise<InitialDataItemToExport<T>[]> {
    throw new Error("Method initDataExport() not implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDataSchema(): DataExportSchemaInterface<T> {
    throw new Error("Method getDataSchema() not implemented.");
  }

  prepareDataExport(): Promise<T[]> {
    throw new Error("Method prepareDataExport() not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendData(_mappedData: object[]): Promise<void> {
    throw new Error("Method sendData() not implemented.");
  }

  async onSendDataSuccess(): Promise<void> {
    Console.debug("No onSendDataSuccess actions");
  }

  async onEnd(): Promise<void> {
    Console.debug("No onEnd actions");
  }

  async run(): Promise<void> {
    let errorFound = false;
    try {
      this.beforeRun();

      Console.info(`Starting new task, type: ${this.constructor.name}`);

      Console.title("Config validation");
      Config.validate();
      Console.confirm("Config validated");

      if (this.argv?.["input-json-payload"]) {
        this.inputPayload = JSON.parse(this.argv["input-json-payload"]);
        Console.trace("inputPayload", this.inputPayload);
      }
      if (this.argv?.["input-json-payload-b64"]) {
        this.inputPayload = JSON.parse(Buffer.from(this.argv["input-json-payload-b64"], "base64").toString());
        Console.trace("inputPayload", this.inputPayload);
      }

      Console.title("Api init");
      await this.initApiClient(this.getWorkflowType());
      if (!this.sdk.client || !this.sdk.ediEvent) {
        throw new InternalError("SDK is not well initialized - client or ediEvent missing");
      }
      this.sdk.dataSource = "API";

      await this.sdk.client
        .get_v1_ping()
        .then(() => {
          Console.confirm("Api initialized");
        })
        .catch((exception) => {
          Console.printException(exception);
          throw new ApiNetWorkError("Unable to reach the api. Exit.");
        });

      await this.sdk.ediEvent.send(EventTypeEnumString.STARTED, `Data export started.`);
      const dataExportConfigurations = await this.initDataExport();

      if (dataExportConfigurations.length === 0) {
        Console.confirm("No data to export. Exit.");
        await this.sdk.ediEvent.send(
          EventTypeEnumString.NO_CONTENT_SUCCESS,
          `File generation - no file to generate.`,
        );
      }

      for (const dataExportConfiguration of dataExportConfigurations) {
        try {
          this.currentDataExportConfiguration = dataExportConfiguration;

          Console.title("Data preparation");
          const rawData = await this.prepareDataExport();
          Console.confirm("Data prepared");

          if (rawData.length === 0) {
            Console.confirm("No data to export. Exit.");
            await this.sdk.ediEvent.send(
              EventTypeEnumString.NO_CONTENT_SUCCESS,
              `Data export - nothing to export.`,
            );
            continue;
          }

          Console.title("Data mapping");
          Console.debug(`${rawData?.length} items to map.`);
          const mappedData = this.getDataSchema().mapDataToExport(rawData);
          Console.confirm("Data mapped");

          Console.title("Data validation");
          this.getDataSchema().validateFileData(mappedData);
          Console.confirm("Data validated");

          Console.title("Data sending");
          await this.sendData(mappedData);
          Console.confirm(`Data well sent.`);

          Console.title("On success callback...");
          await this.onSendDataSuccess();
          Console.confirm("On success callback done");
        } catch (processFileException) {
          Console.printException(processFileException);
          errorFound = true;

          await this.sdk.ediEvent.send(
            ExceptionUtils.getEventTypeFromException(processFileException as Error),
            `Data export failed.`,
          );
        }
        Console.printLine();
      }
      Console.title("On end callback...");
      await this.onEnd();
      Console.confirm("On end callback done");

      if (errorFound) {
        throw new UnknownError("One or more errors found during the execution");
      }
    } catch (exception) {
      Console.printException(exception);
      this.afterRun();

      if (exception instanceof ApiNetWorkError) {
        process.exit(1);
      }
      if (this.sdk.ediEvent) {
        await this.sdk.ediEvent.send(EventTypeEnumString.PRECONDITION_FAILED_ERROR, `Data export failed.`);
      }

      process.exit(1);
    }

    this.afterRun();

    if (errorFound) {
      Console.error("Task completed with errors");
      process.exit(1);
    } else {
      Console.confirm("Task completed with success");
    }
  }
}
