import { AbstractSchema } from "./AbstractSchema.ts";
import { LoadFileSchemaInterface } from "./SchemaInterfaces.ts";

export abstract class AbstractLoadFileSchema<T> extends AbstractSchema implements LoadFileSchemaInterface<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapInputFileData(_rawData: object[]): T[] {
    throw new Error("Method not implemented.");
  }
}
