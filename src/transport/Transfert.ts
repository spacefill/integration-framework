import { Stream } from "stream"
import { TransfertConfiguration, TransfertInterface } from "./TransfertInterfaces.ts"
import { SftpClient } from "./SftpClient.ts";

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
                this.client = new SftpClient(this.configuration);
                break;
            default:
                throw new Error(`Unsupported protocol ${protocol}`);
        }
    }
    checkStatut(): boolean {
        return this.client.checkStatut();
    }
    close(): void {
        return this.client.close();
    }
    mkdirIfNotExists(): void {
        return this.client.mkdirIfNotExists();
    }
    upload(data: Stream, filepath: string): void {
        return this.client.upload(data, filepath);
    }
    downloadAndReadFile(filepath: string, encoding: string = 'utf-8'): Stream {
        return this.client.downloadAndReadFile(filepath, encoding);
    }
    listDirWithFilter(filepathPattern: string): Promise<string[]> {
        return this.client.listDirWithFilter(filepathPattern);
    }
    deleteFile(filepath: string): void {
        return this.client.deleteFile(filepath);
    }
    moveFile(filepath: string): void {
        return this.client.moveFile(filepath);
    }
    renameFile(filepath: string): void {
        return this.client.renameFile(filepath);
    }
}

export { Transfert, TransfertProtocol };