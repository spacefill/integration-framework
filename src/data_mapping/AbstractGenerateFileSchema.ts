import { GenerateFileSchemaInterface } from "./SchemaInterfaces.ts";
import { AbtractSchema } from "./AbtractSchema.ts";

export abstract class AbstractGenerateFileSchema<T>
  extends AbtractSchema
  implements GenerateFileSchemaInterface<T>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapOutputFileData(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }
}
