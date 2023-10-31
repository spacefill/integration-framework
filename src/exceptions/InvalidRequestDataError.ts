/**
 * Error due to invalid data values
 */
export default class InvalidRequestDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidRequestDataError";
  }
}

