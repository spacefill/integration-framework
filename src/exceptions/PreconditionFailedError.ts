/**
 * Missing or invalid requirement
 */
export default class PreconditionFailedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PreconditionFailedError";
  }
}


