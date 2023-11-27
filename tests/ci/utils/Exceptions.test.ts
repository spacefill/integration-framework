import { expect, assert } from "chai";
import { InvalidRequestDataError } from "../../../src/exceptions/InvalidRequestDataError.ts";
import { ApiNetWorkError } from "../../../src/exceptions/ApiNetWorkError.ts";
import { InternalError } from "../../../src/exceptions/InternalError.ts";
import { InvalidRequestFormatError } from "../../../src/exceptions/InvalidRequestFormatError.ts";
import { IoError } from "../../../src/exceptions/IoError.ts";
import { NetWorkError } from "../../../src/exceptions/NetWorkError.ts";
import { PreconditionFailedError } from "../../../src/exceptions/PreconditionFailedError.ts";
import { UnknownError } from "../../../src/exceptions/UnknownError.ts";

describe("Exceptions", () => {
  it("ApiNetWorkError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new ApiNetWorkError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "ApiNetWorkError");
    assert(error.message, errorMsg);
  });

  it("InternalError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new InternalError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "InternalError");
    assert(error.message, errorMsg);
  });

  it("InvalidRequestDataError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new InvalidRequestDataError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "InvalidRequestDataError");
    assert(error.message, errorMsg);
  });

  it("InvalidRequestFormatError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new InvalidRequestFormatError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "InvalidRequestFormatError");
    assert(error.message, errorMsg);
  });

  it("IoError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new IoError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "IoError");
    assert(error.message, errorMsg);
  });

  it("NetWorkError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new NetWorkError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "NetWorkError");
    assert(error.message, errorMsg);
  });

  it("PreconditionFailedError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new PreconditionFailedError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "PreconditionFailedError");
    assert(error.message, errorMsg);
  });

  it("UnknownError should be well constructed", async () => {
    const errorMsg = "fake failed";
    const error = new UnknownError(errorMsg);
    expect(error).to.be.an.instanceof(Error);
    assert(error.name, "UnknownError");
    assert(error.message, errorMsg);
  });
});
