interface GenerateFileTasklnterface {
    initApiClient(): void,
    initFilesGeneration(): object[],
    prepareFileData(fileConfiguration: object): Promise<object[]>,
    validateFileData(data: object[]): void,
    mapFileData(data: object[]): object[],
    generateFile(mappedData: object[], tempFilePath: string): Promise<void>,
    sendFile(tempFilePath: string): Promise<void>,
    postAction(_rawData: object[]): Promise<void>,
    run(): void
}

export { GenerateFileTasklnterface };
