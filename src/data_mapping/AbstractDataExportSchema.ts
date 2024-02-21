import { DataExportSchemaInterface } from "./SchemaInterfaces.ts";
import { AbstractSchema } from "./AbstractSchema.ts";

export abstract class AbstractDataExportSchema<T>
  extends AbstractSchema
  implements DataExportSchemaInterface<T>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapDataToExport(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }
}
