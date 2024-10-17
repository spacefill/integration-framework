interface TransferInterface {
  open(): Promise<void>;
  close(): Promise<void>;
  mkdirIfNotExists(remotePath: string): Promise<void>;
  isExists(remotePath: string): Promise<boolean>;
  upload(localPath: string, remotePath: string): Promise<void>;
  downloadAndReadFile(remotePath: string, encoding: BufferEncoding): Promise<string>;
  listDirWithFilter(filepathPattern: string): Promise<string[]>;
  listDirWithMetadataWithFilter(filepathPattern: string): Promise<FileMetadata[]>;
  deleteFile(filepath: string): Promise<void>;
  moveFile(sourceFilePath: string, targetFilePath: string): Promise<void>;
}

interface FileMetadata {
  name: string;
  date: Date | undefined;
}

interface TransferConfiguration {
  hostname: string;
  port: number;
  username: string;
  password: string;
  retries?: number;
  delay?: number;
}

export { TransferConfiguration, TransferInterface, FileMetadata };
