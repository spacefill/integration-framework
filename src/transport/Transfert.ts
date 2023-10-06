import { Stream } from "stream"
import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces"
import { SftpTransfert } from "./SftpTransfert";

enum TransfertProtocol {
    sftp,
    ftp,
    local
}

class Transfert implements TransfertInterface {
    private protocol: TransfertProtocol;
    private configuration: TransfertConfiguration;
    private client: TransfertInterface;

    constructor(
        protocol: TransfertProtocol,
        configuration: TransfertConfiguration
    ) {
        this.protocol = protocol;
        this.configuration = configuration;

        switch (protocol) {
            case TransfertProtocol.sftp:
                this.client = new SftpTransfert(this.configuration);
                break;
            default:
                throw new Error(`Unsupported protocol ${protocol}`);
        }
    }
    connect(): void {
        throw new Error("Method not implemented.");
    }
    checkStatut(): boolean {
        throw new Error("Method not implemented.")
    }
    close(): void {
        throw new Error("Method not implemented.")
    }
    mkdirIfNotExists(): void {
        throw new Error("Method not implemented.")
    }
    upload(data: Stream, filepath: string): void {
        throw new Error("Method not implemented.")
    }
    downloadAndReadFile(filepath: string, encoding: string): Stream {
        throw new Error("Method not implemented.")
    }
    listDirWithFilter(filepathPattern: string): string[] {
        throw new Error("Method not implemented.")
    }
    deleteFile(filepath: string): void {
        throw new Error("Method not implemented.")
    }
    moveFile(filepath: string): void {
        throw new Error("Method not implemented.")
    }
    renameFile(filepath: string): void {
        throw new Error("Method not implemented.")
    }
}

export {Transfert}