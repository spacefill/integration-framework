import { expect } from "chai";
import path from 'path';
import { fileURLToPath } from 'url';
import { $, fs } from "zx";

import { LocalClient } from "../../../src/transfert/LocalClient.ts";
import { Transfert, TransfertProtocol } from "../../../src/transfert/Transfert.ts";
import { initTestEnv } from "../../testUtils/initTestEnv.ts";
import { Config } from "../../../src/configs/Config.ts";

$.verbose = false;

describe("LocalTransfert", () => {

  const currentDirName = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.join(currentDirName, "folder-test");
  const folderWorkDir = path.join(rootDir, "folder-process");
  const fileName = "remote-test1.txt";
  const remoteFilePath = path.join(folderWorkDir, fileName);
  const localPath = path.join(currentDirName, "local-test.txt");
  const fileContent = "Contenu du fichier";

  const transfert = new Transfert(TransfertProtocol.local);

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
    await transfert.mkdirIfNotExists(folderWorkDir);

    const isExists = await transfert.isExists(folderWorkDir);
    expect(isExists).equal(true);
  });

  describe("Process", function () {
    before(async () => {
      await transfert.mkdirIfNotExists(folderWorkDir);
      fs.writeFileSync(localPath, fileContent);
    });

    after(async () => {
      fs.unlinkSync(localPath);
    });

    it("upload file", async () => {
      await transfert.upload(localPath, remoteFilePath);

      const isExists = await transfert.isExists(remoteFilePath);
      expect(isExists).equal(true);
    });

    it("remove file", async () => {
      await transfert.deleteFile(remoteFilePath);

      const isOldFileExists = await transfert.isExists(remoteFilePath);
      expect(isOldFileExists).equal(false);
    });

    describe("Process With Files", function () {
      beforeEach(async () => {
        await transfert.upload(localPath, remoteFilePath);

        const isExists = await transfert.isExists(remoteFilePath);
        expect(isExists).equal(true);
      });

      it("download file", async () => {
        const data = await transfert.downloadAndReadFile(remoteFilePath);
        expect(data).equal(fileContent);

        await transfert.deleteFile(remoteFilePath);
      });

      it("move file", async () => {
        await transfert.moveFile(remoteFilePath, `${rootDir}/${fileName}`);
        const isExists = await transfert.isExists(`${rootDir}/${fileName}`);
        expect(isExists).equal(true);

        await transfert.deleteFile(`${rootDir}/${fileName}`);
      });

      it("get list of file with the same pattern", async () => {
        const remoteFilePath2 = path.join(folderWorkDir, `remote-test2.TXT`);

        await transfert.upload(localPath, remoteFilePath2);

        const isExists = await transfert.isExists(remoteFilePath2);
        expect(isExists).equal(true);

        const filter = path.join(folderWorkDir, `remote-test(1|2).*\\.(TXT|txt)$`);

        const data = await transfert.listDirWithFilter(filter);
        expect(data).to.be.an("array");
        expect(data).to.have.lengthOf(2);
        expect(data).to.include.members([remoteFilePath, remoteFilePath2]);

        await transfert.deleteFile(remoteFilePath2);
        await transfert.deleteFile(remoteFilePath);
      });

      it("move file to error directory", async () => {
        await transfert.moveToErrorDir(remoteFilePath);

        const remoteErrorPath = `${rootDir}/errors/remote-test1.txt`;

        const isNewFileExists = await transfert.isExists(remoteErrorPath);
        expect(isNewFileExists).equal(true);

        const isOldFileExists = await transfert.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfert.deleteFile(remoteErrorPath);
      });

      it("move file to archives directory", async () => {
        await transfert.moveToArchiveDir(remoteFilePath);

        const remoteArchivesPath = `${rootDir}/archives/remote-test1.txt`;

        const isNewFileExists = await transfert.isExists(remoteArchivesPath);
        expect(isNewFileExists).equal(true);

        const isOldFileExists = await transfert.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfert.deleteFile(remoteArchivesPath);
      });
    });
  });
});
