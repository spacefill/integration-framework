import path from "path";

import { fs } from "zx";
import chaiAsPromised from "chai-as-promised";
import chai, { expect } from "chai";
chai.use(chaiAsPromised);

import { Transfer, TransferProtocol } from "../../../src/transfer/Transfer.ts";
import { initTestEnv } from "../../testUtils/initTestEnv.ts";
import { Config } from "../../../src/configs/Config.ts";
import { FtpClient } from "../../../src/transfer/FtpClient.ts";

describe("FtpClient", () => {
  const rootDir = `folder-test`;
  const folderWorkDir = path.join(rootDir, "folder-process");
  const fileName = "remote-test1.txt";
  const localPath = "./local-test.txt";
  const remoteFilePath = `${fileName}`;
  const remoteFilePath2 = `remote-test2.TXT`;
  const remoteErrorPath = `${rootDir}/errors/remote-test1.txt`;
  const remoteArchivesPath = `${rootDir}/archives/remote-test1.txt`;
  const fileContent = "Contenu du fichier";

  const config = { hostname: "127.0.0.1", port: 21, username: "bob", password: "password" };
  const transfer = new Transfer(TransferProtocol.ftp, config);

  before(async () => {
    initTestEnv();
    process.env.WMS_PATH_ERROR_DIR = "folder-test/errors";
    process.env.WMS_PATH_ARCHIVE_DIR = "folder-test/archives";
    Config.validate();
  });

  it("should get configuration", async () => {
    const instance = new FtpClient(config);
    expect(instance).to.be.an.instanceof(FtpClient);
  });

  it("create new directory", async () => {
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

      after(async () => {
        await transfer.deleteFile(remoteFilePath);
      });

      it("download file", async () => {
        const data = await transfer.downloadAndReadFile(remoteFilePath);
        expect(data).equal(fileContent);
      });

      it("move file", async () => {
        await transfer.moveFile(remoteFilePath, `${rootDir}/${fileName}`);
        await transfer.deleteFile(`${rootDir}/${fileName}`);
      });

      it("get list of file with the same pattern", async () => {
        await transfer.upload(localPath, remoteFilePath2);

        const isExists = await transfer.isExists(remoteFilePath2);
        expect(isExists).equal(true);

        const filter = `remote-test(1|2).*\\.(TXT|txt)$`;

        const data = await transfer.listDirWithFilter(filter);
        expect(data).to.be.an("array");
        expect(data).to.have.lengthOf(2);
        expect(data).to.include.members(["remote-test1.txt", "remote-test2.TXT"]);

        await transfer.deleteFile(remoteFilePath2);
      });

      it("move file to error directory", async () => {
        await transfer.moveToErrorDir(remoteFilePath);

        const isNewFileExists = await transfer.isExists(remoteErrorPath);
        expect(isNewFileExists).equal(true);

        const isOldFileExists = await transfer.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfer.deleteFile(remoteErrorPath);
      });

      it("move file to archives directory", async () => {
        await transfer.moveToArchiveDir(remoteFilePath);

        const isNewFileExists = await transfer.isExists(remoteArchivesPath);
        expect(isNewFileExists).equal(true);

        const isOldFileExists = await transfer.isExists(remoteFilePath);
        expect(isOldFileExists).equal(false);

        await transfer.deleteFile(remoteArchivesPath);
      });

      it("error to check if folder exists with wrong config but good hostname", async () => {
        const wrongConfig = {
          hostname: "127.0.0.1",
          port: 21,
          username: "bob",
          password: "passwordd",
        };

        const transfer = new Transfer(TransferProtocol.ftp, wrongConfig);
        await expect(transfer.isExists("")).to.be.rejectedWith(Error, "530 Login authentication failed");
      });

      it("error to check if folder exists with wrong hostname config", async () => {
        const wrongConfig = {
          hostname: "127.0.60.1",
          port: 21,
          username: "bob",
          password: "password",
        };

        const transfer = new Transfer(TransferProtocol.ftp, wrongConfig);
        await expect(transfer.isExists("")).to.be.rejectedWith(Error, "Timeout (control socket)");
      }).timeout(100000);
    });
  });
});
