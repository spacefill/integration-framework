/**
 * Error relative to read or write file
 */
export default class IoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "IoError";
  }
}
