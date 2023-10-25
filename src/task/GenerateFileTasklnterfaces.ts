interface GenerateFileTasklnterface {
    initApiClient(): void,
    initFilesGeneration(): InitialDataItem[],
    prepareFileData(): Promise<object[]>,
    validateFileData(data: object[]): void,
    mapFileData(data: object[]): object[],
    generateFile(mappedData: object[], tempFilePath: string): Promise<void>,
    sendFile(tempFilePath: string): Promise<string>,
    postAction(): Promise<void>,
    run(): void
}

interface InitialDataItem {
  type: string,
  targetFileName?: string,
  initialData: object[]
}

export { GenerateFileTasklnterface, InitialDataItem };
