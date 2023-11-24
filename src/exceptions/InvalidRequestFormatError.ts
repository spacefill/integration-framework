/**
 * Error due to invalid data format
 */
export default class InvalidRequestFormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidRequestFormatError";
  }
}
