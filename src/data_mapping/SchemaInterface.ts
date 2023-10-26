interface SchemaInterface<T> {
  itemSchemaValidation: object,
  mapFileData(rawData: T[]): object[],
  validateFileData(rawData: object[]): void,
}

export { SchemaInterface };