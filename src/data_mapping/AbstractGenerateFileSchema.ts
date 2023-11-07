import pointer from "json-pointer";
import AjvModule from "ajv";
import addFormatsModule from 'ajv-formats';

const Ajv = AjvModule.default;
const addFormats = addFormatsModule.default;

import Console from "../utils/Console.ts";
import { CommonSchemaInterface, ExportFileDescriptor, GenerateFileSchemaInterface } from "./SchemaInterfaces.ts";

export abstract class AbstractGenerateFileSchema<T> implements GenerateFileSchemaInterface, CommonSchemaInterface<T> {
  itemSchemaValidation: object = {};
  fileDescriptor: ExportFileDescriptor;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapFileData(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }

  validateFileData(data: object[]): void {
    const schema = {
      type: "array",
      items: this.itemSchemaValidation
    };

    const ajv = new Ajv();
    addFormats(ajv);

    const validate = ajv.compile(schema);
    if (!validate(data)) {
      validate?.errors.forEach((validationError) => {

        Console.error("Validation error",
          {
            ...validationError,
            checkedItem: pointer.get(data, `/${validationError.instancePath.split("/")[1]}`) // @todo: Vérifier s'il y a mieux pour extraire le path vers l'item en erreur vs la clé de l'item
          }
        );
      })
      throw new Error('Configuration validation failed for spacefillApi');
    }
  }
}