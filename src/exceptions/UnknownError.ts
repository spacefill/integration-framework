/**
 * Unknown error (not technical error)
 */
export class UnknownError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnknownError";
  }
}
