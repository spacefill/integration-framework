/**
 * Error due to invalid data format
 */
export class InvalidRequestFormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidRequestFormatError";
  }
}
