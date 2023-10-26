import pointer from "json-pointer";
import AjvModule from "ajv";
import addFormatsModule from 'ajv-formats';
const Ajv = AjvModule.default;
const addFormats = addFormatsModule.default;

import { SchemaInterface } from "./SchemaInterface.ts";
import Console from "../utils/Console.mts";

export abstract class AbstractSchema<T> implements SchemaInterface<T> {
  itemSchemaValidation: object = {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapFileData(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }
  validateFileData(data: object[]): void {

    const schema = {
      type: "array",
      items: this.itemSchemaValidation
    };

    // @todo - déplacer cette section dans la classe abstraite
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