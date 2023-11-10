interface TransfertInterface {
    checkStatut(): boolean,
    close(): Promise<void>,
    mkdirIfNotExists(): Promise<void>,
    upload(localPath: string, remotePath: string): Promise<void>,
    downloadAndReadFile(filepath: string, encoding: BufferEncoding): Promise<string>,
    listDirWithFilter(filepathPattern: string): Promise<string[]>,
    deleteFile(filepath: string): Promise<void>,
    moveFile(sourceFilePath: string, targetFilePath: string, mkdirIfNotExists: boolean): Promise<void>,
    moveToErrorDir(sourceFilePath: string): Promise<void>,
    moveToArchiveDir(sourceFilePath: string): Promise<void>,
}

interface TransfertConfiguration {
    hostname: string,
    port: number,
    username: string,
    password: string
}

export {TransfertConfiguration, TransfertInterface}