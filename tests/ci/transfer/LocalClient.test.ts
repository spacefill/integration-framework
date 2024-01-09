import path from "path";
import { fileURLToPath } from "url";

import { expect } from "chai";
import { $, fs } from "zx";

import { LocalClient } from "../../../src/transfer/LocalClient.ts";
import { Transfer, TransferProtocol } from "../../../src/transfer/Transfer.ts";
import { initTestEnv } from "../../testUtils/initTestEnv.ts";
import { Config } from "../../../src/configs/Config.ts";

$.verbose = false;

describe("LocalTransfer", () => {
  const currentDirName = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.join(currentDirName, "folder-test");
  const folderWorkDir = path.join(rootDir, "folder-process");
  const fileName = "remote-test1.txt";
  const remoteFilePath = path.join(folderWorkDir, fileName);
  const localPath = path.join(currentDirName, "local-test.txt");
  const fileContent = "Contenu du fichier";

  const transfer = new Transfer(TransferProtocol.local);

  before(async () => {
    initTestEnv();
    process.env.WMS_DEFAULT_DIR = rootDir;
    Config.validate();
  });

  it("should get configuration", async () => {
    const instance = new LocalClient();
    expect(instance).to.be.an.instanceof(LocalClient);
  });

  it("try to create new directory already exist", async () => {
    await transfer.mkdirIfNotExists(folderWorkDir);

    const isExists = await transfer.isExists(folderWorkDir);
    expect(isExists).equal(true);
  });

  describe("Process", function () {
    before(async () => {
      await transfer.mkdirIfNotExists(folderWorkDir);
      fs.writeFileSync(localPath, fileContent);
    });

    after(async () => {
      fs.unlinkSync(localPath);
    });

    it("upload file", async () => {
      await transfer.upload(localPath, remoteFilePath);

      const isExists = await transfer.isExists(remoteFilePath);
      expect(isExists).equal(true);
    });

    it("remove file", async () => {
      await transfer.deleteFile(remoteFilePath);

      const isOldFileExists = await transfer.isExists(remoteFilePath);
      expect(isOldFileExists).equal(false);
    });

    describe("Process With Files", function () {
      beforeEach(async () => {
        await transfer.upload(localPath, remoteFilePath);

        const isExists = await transfer.isExists(remoteFilePath);
        expect(isExists).equal(true);
      });

      it("download file", async () => {
        const data = await transfer.downloadAndReadFile(remoteFilePath);
        expect(data).equal(fileContent);

        await transfer.deleteFile(remoteFilePath);
      });

      it("move file", async () => {
        await transfer.moveFile(remoteFilePath, `${rootDir}/${fileName}`);
        const isExists = await transfer.isExists(`${rootDir}/${fileName}`);
        expect(isExists).equal(true);

        await transfer.deleteFile(`${rootDir}/${fileName}`);
      });

      it("get list of file with the same pattern", async () => {
        const remoteFilePath2 = path.join(folderWorkDir, `remote-test2.TXT`);

        await transfer.upload(localPath, remoteFilePath2);

        const isExists = await transfer.isExists(remoteFilePath2);
        expect(isExists).equal(true);

        const filter = path.join(folderWorkDir, `remote-test(1|2).*\\.(TXT|txt)$`);

        const data = await transfer.listDirWithFilter(filter);
        expect(data).to.be.an("array");
        expect(data).to.have.lengthOf(2);
        expect(data).to.include.members([remoteFilePath, remoteFilePath2]);

        await transfer.deleteFile(remoteFilePath2);
        await transfer.deleteFile(remoteFilePath);
      });

      it("move file to error directory", async () => {
        await transfer.moveToErrorDir(remoteFilePath);

        const remoteErrorPath = `${rootDir}/errors/remote-test1.txt`;

        const isNewFileExists = await transfer.isExists(remoteErrorPath);
        expect(isNewFileExists).equal(true);

        const isOldFileExists = await transfer.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfer.deleteFile(remoteErrorPath);
      });

      it("move file to archives directory", async () => {
        await transfer.moveToArchiveDir(remoteFilePath);

        const remoteArchivesPath = `${rootDir}/archives/remote-test1.txt`;

        const isNewFileExists = await transfer.isExists(remoteArchivesPath);
        expect(isNewFileExists).equal(true);

        const isOldFileExists = await transfer.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfer.deleteFile(remoteArchivesPath);
      });
    });
  });
});
