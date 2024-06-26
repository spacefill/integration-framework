import pointer from "json-pointer";
import AjvModule from "ajv";
import addFormatsModule from "ajv-formats";

import { InvalidRequestFormatError } from "../index.ts";
import { Console } from "../utils/Console.ts";

import { CommonSchemaInterface, ExportFileDescriptor } from "./SchemaInterfaces.ts";

const Ajv = AjvModule.default;
const addFormats = addFormatsModule.default;

export abstract class AbstractSchema implements CommonSchemaInterface {
  itemSchemaValidation: object = {};
  fileDescriptor: ExportFileDescriptor | undefined;

  public validateFileData(data: object[]): void {
    const schema = {
      type: "array",
      items: this.itemSchemaValidation,
    };

    const ajv = new Ajv({ coerceTypes: true });
    addFormats(ajv);

    const validate = ajv.compile(schema);
    if (!validate(data) && validate?.errors) {
      validate?.errors.forEach((validationError) => {
        Console.error("Validation error", {
          ...validationError,
          checkedItem: pointer.get(data, `/${validationError.instancePath.split("/")[1]}`), // @todo: Vérifier s'il y a mieux pour extraire le path vers l'item en erreur vs la clé de l'item
        });
      });
      throw new InvalidRequestFormatError("Data validation failed");
    }
  }
}
