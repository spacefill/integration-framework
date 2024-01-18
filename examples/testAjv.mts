#!/usr/bin/env -S npx ts-node --esm --transpile-only

import AjvModule from "ajv";
import addFormatsModule from "ajv-formats";
const Ajv = AjvModule.default;
const addFormats = addFormatsModule.default;

const ajv = new Ajv();
addFormats(ajv);

/**
 * The default import is not working.
 * Current solution found here: https://github.com/dsherret/code-block-writer/issues/42
 */
