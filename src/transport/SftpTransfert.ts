import { Stream } from "stream";
import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces";

export class SftpTransfert implements TransfertInterface {
    private configuration: TransfertConfiguration;
    constructor(configuration: TransfertConfiguration) {
        this.configuration = configuration;
    }
    connect(): void {
        throw new Error("Method not implemented.");
    }
    checkStatut(): boolean {
        throw new Error("Method not implemented.");
    }
    close(): void {
        throw new Error("Method not implemented.");
    }
    mkdirIfNotExists(): void {
        throw new Error("Method not implemented.");
    }
    upload(data: Stream, filepath: string): void {
        console.log(data,filepath);
        throw new Error("Method not implemented.");
    }
    downloadAndReadFile(filepath: string, encoding: string): Stream {
        console.log(encoding,filepath);
        throw new Error("Method not implemented.");
    }
    listDirWithFilter(filepathPattern: string): string[] {
        console.log(filepathPattern);
        throw new Error("Method not implemented.");
    }
    deleteFile(filepath: string): void {
        throw new Error("Method not implemented.");
    }
    moveFile(filepath: string): void {
        throw new Error("Method not implemented.");
    }
    renameFile(filepath: string): void {
        throw new Error("Method not implemented.");
    }

}