interface GenerateFileTasklnterface {
    initApiClient(): void,
    prepareFilesData(): Promise<Array<object[]>>,
    validateFileData(data: object[]): void,
    mapFileData(data: object[]): object[],
    generateFile(mappedData: object[]): string,
    sendFile(filepath: string): void,
    run(): void
}

export { GenerateFileTasklnterface };
