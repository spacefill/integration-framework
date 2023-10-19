interface GenerateFileTasklnterface {
    initApiClient(): void,
    initFilesGeneration(): object[],
    prepareFileData(fileConfiguration: object): Promise<object[]>,
    validateFileData(data: object[]): void,
    mapFileData(data: object[]): object[],
    generateFile(mappedData: object[]): string,
    sendFile(filepath: string): void,
    run(): void
}

export { GenerateFileTasklnterface };
