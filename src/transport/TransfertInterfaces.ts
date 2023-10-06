import { Stream } from "stream";

interface TransfertInterface {
    checkStatut(): boolean,
    close(): void,
    mkdirIfNotExists(): void,
    upload(data: Stream, filepath: string): void,
    downloadAndReadFile(filepath: string, encoding: string): Stream,
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