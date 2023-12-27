import chaiAsPromised from "chai-as-promised";
import chai, { expect } from "chai";
chai.use(chaiAsPromised);

import { Transfer, TransferProtocol } from "../../../src/transfer/Transfer.ts";

describe("Transfer", () => {
  it("create a transfer with unknown protocol", async () => {
    const protocol = "unknown";

    expect(() => {
      new Transfer(protocol as TransferProtocol);
    }).to.throw(Error, `Unsupported protocol ${protocol} - check your configuration`);
  });

  it("create directory with no path", async () => {
    const transfer = new Transfer(TransferProtocol.local);
    await expect(transfer.mkdirIfNotExists("")).to.be.rejectedWith(Error, 'ENOENT: no such file or directory, mkdir');
  });

  it("error to upload with no path", async () => {
    const transfer = new Transfer(TransferProtocol.local);
    await expect(transfer.upload("", "")).to.be.rejectedWith(Error, 'ENOENT: no such file or directory');
  });

  it("error to download with no path", async () => {
    const transfer = new Transfer(TransferProtocol.local);
    await expect(transfer.downloadAndReadFile("")).to.be.rejectedWith(Error, 'ENOENT: no such file or directory');
  });
});
