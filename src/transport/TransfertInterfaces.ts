interface TransfertInterface {
    checkStatut(): boolean,
    close(): void,
    mkdirIfNotExists(): void,
    upload(localPath: string, remotePath: string): void,
    downloadAndReadFile(filepath: string, encoding: BufferEncoding): Promise<string>,
    listDirWithFilter(filepathPattern: string): Promise<string[]>,
    deleteFile(filepath: string): void,
    moveFile(filepath: string): void,
    renameFile(filepath: string): void
}

interface TransfertConfiguration {
    hostname: string,
    port: number,
    username: string,
    password: string
}

export {TransfertConfiguration, TransfertInterface}