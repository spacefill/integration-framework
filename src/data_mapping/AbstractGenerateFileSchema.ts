import { GenerateFileSchemaInterface } from "./SchemaInterfaces.ts";
import { AbstractSchema } from "./AbstractSchema.ts";

export abstract class AbstractGenerateFileSchema<T>
  extends AbstractSchema
  implements GenerateFileSchemaInterface<T>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapOutputFileData(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }
}
