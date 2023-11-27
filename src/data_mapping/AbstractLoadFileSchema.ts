import { AbtractSchema } from "./AbtractSchema.ts";
import { LoadFileSchemaInterface } from "./SchemaInterfaces.ts";

export abstract class AbstractLoadFileSchema<T> extends AbtractSchema implements LoadFileSchemaInterface<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapInputFileData(_rawData: object[]): T[] {
    throw new Error("Method not implemented.");
  }
}
