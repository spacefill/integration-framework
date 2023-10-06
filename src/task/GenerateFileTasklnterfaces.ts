interface GenerateFileTasklnterface {
    initApiClient(): void,
    prepareData(): Promise<Array<object>>,
    validateData(data: object): void,
    mapResult(data: object): Array<string>,
    generateFile(mappedData: Array<string>): string,
    sendFile(filepath: string): void,
    run(): void
}

export { GenerateFileTasklnterface };
