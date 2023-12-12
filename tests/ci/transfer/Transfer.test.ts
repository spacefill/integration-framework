import { expect } from "chai";

import { Transfer, TransferProtocol } from "../../../src/transfer/Transfer.ts";
import { TestHelpers } from "../../../src/utils/TestHelpers.ts";

describe("Transfer", () => {
  it("create a transfer with unknown protocol", async () => {
    const protocol = "unknown";

    expect(() => {
      new Transfer(protocol as TransferProtocol);
    }).to.throw(Error, `Unsupported protocol ${protocol} - check your configuration`);
  });

  it("create directory with no path", async () => {
    const transfer = new Transfer(TransferProtocol.local);
    await TestHelpers.expectThrowsAsync(
      () => transfer.mkdirIfNotExists(""),
      `ENOENT: no such file or directory, mkdir`,
    );
  });

  it("error to upload with no path", async () => {
    const transfer = new Transfer(TransferProtocol.local);
    await TestHelpers.expectThrowsAsync(() => transfer.upload("", ""), `ENOENT: no such file or directory`);
  });

  it("error to download with no path", async () => {
    const transfer = new Transfer(TransferProtocol.local);
    await TestHelpers.expectThrowsAsync(
      () => transfer.downloadAndReadFile(""),
      `ENOENT: no such file or directory`,
    );
  });
});
