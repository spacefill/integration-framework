interface TransfertInterface {
    open(): Promise<void>,
    close(): Promise<void>,
    mkdirIfNotExists(remotePath: string): Promise<void>,
    isExists(remotePath: string): Promise<string|boolean>,
    upload(localPath: string, remotePath: string): Promise<void>,
    downloadAndReadFile(remotePath: string, encoding: BufferEncoding): Promise<string>,
    listDirWithFilter(filepathPattern: string): Promise<string[]>,
    deleteFile(filepath: string): Promise<void>,
    moveFile(sourceFilePath: string, targetFilePath: string): Promise<void>,
}

interface TransfertConfiguration {
    hostname: string,
    port: number,
    username: string,
    password: string
}

export {TransfertConfiguration, TransfertInterface}