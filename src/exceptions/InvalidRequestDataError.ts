/**
 * Error due to invalid data values
 */
export class InvalidRequestDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidRequestDataError";
  }
}
