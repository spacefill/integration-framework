import { expect } from "chai";
import path from 'path';
import { fs } from "zx";

import { SftpClient } from "../../../src/transfert/SftpClient.ts";
import { Transfert, TransfertProtocol } from "../../../src/transfert/Transfert.ts";
import { initTestEnv } from "../../testUtils/initTestEnv.ts";
import { Config } from "../../../src/configs/Config.ts";
import { TestHelpers } from "../../../src/utils/TestHelpers.ts";

describe("SftpTransfert", () => {
  const rootDir = `folder-test`;
  const folderWorkDir = path.join(rootDir, 'folder-process');
  const fileName = "remote-test1.txt";
  const localPath = "./local-test.txt";
  const remoteFilePath = `${fileName}`;
  const remoteFilePath2 = `remote-test2.TXT`;
  const remoteErrorPath = `${rootDir}/errors/remote-test1.txt`;
  const remoteArchivesPath = `${rootDir}/archives/remote-test1.txt`;
  const fileContent = "Contenu du fichier";

  const config = { hostname: "127.0.0.1", port: 2222, username: "alice", password: "password" };
  const transfert = new Transfert(TransfertProtocol.sftp, config);

  before(async () => {
    initTestEnv();
    process.env.WMS_PATH_ERROR_DIR = "folder-test/errors";
    process.env.WMS_PATH_ARCHIVE_DIR = "folder-test/archives";
    Config.validate();
  });

  it("should get configuration", async () => {
    const instance = new SftpClient(config);
    expect(instance).to.be.an.instanceof(SftpClient);
  });

  it("create new directory", async () => {
    await transfert.mkdirIfNotExists(folderWorkDir);

    const isExists = await transfert.isExists(folderWorkDir);
    expect(isExists).equal("d");
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
      expect(isExists).equal("-");
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
        expect(isExists).equal("-");
      });

      it("download file", async () => {
        const data = await transfert.downloadAndReadFile(remoteFilePath);
        expect(data).equal(fileContent);
      });

      it("move file", async () => {
        await transfert.moveFile(remoteFilePath, `${rootDir}/${fileName}`);
        await transfert.deleteFile(`${rootDir}/${fileName}`);
      });

      it("get list of file with the same pattern", async () => {
        await transfert.upload(localPath, remoteFilePath2);

        const isExists = await transfert.isExists(remoteFilePath2);
        expect(isExists).equal("-");

        const filter = `remote-test(1|2).*\\.(TXT|txt)$`;

        const data = await transfert.listDirWithFilter(filter);
        expect(data).to.be.an("array");
        expect(data).to.have.lengthOf(2);
        expect(data).to.include.members(["remote-test1.txt", "remote-test2.TXT"]);

        await transfert.deleteFile(remoteFilePath2);
      });

      it("move file to error directory", async () => {
        await transfert.moveToErrorDir(remoteFilePath);

        const isNewFileExists = await transfert.isExists(remoteErrorPath);
        expect(isNewFileExists).equal("-");

        const isOldFileExists = await transfert.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfert.deleteFile(remoteErrorPath);
      });

      it("move file to archives directory", async () => {
        await transfert.moveToArchiveDir(remoteFilePath);

        const isNewFileExists = await transfert.isExists(remoteArchivesPath);
        expect(isNewFileExists).equal("-");

        const isOldFileExists = await transfert.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfert.deleteFile(remoteArchivesPath);
      });

      it('error to check if folder exists with wrong config but good hostname', async () => {
        const wrongConfig = {
          hostname: '127.0.0.1',
          port: 2229,
          username: 'alice',
          password: 'passwordd'
        }

        const transfert = new Transfert(TransfertProtocol.sftp, wrongConfig);
        await TestHelpers.expectThrowsAsync(() => transfert.isExists(''), `connect: Remote host refused connection`);

      }).timeout(200000);

      it('error to check if folder exists with wrong hostname config', async () => {
        const wrongConfig = {
          hostname: '127.0.60.1',
          port: 2222,
          username: 'alice',
          password: 'password'
        }

        const transfert = new Transfert(TransfertProtocol.sftp, wrongConfig);
        await TestHelpers.expectThrowsAsync(() => transfert.isExists(''), `connect: getConnection: Timed out while waiting for handshake`);

      }).timeout(200000);
    });
  });
});
