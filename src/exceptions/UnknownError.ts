/**
 * Unknown error (not technical error)
 */
export default class UnknownError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnknownError";
  }
}


