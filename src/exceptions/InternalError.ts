/**
 * Default technical error.
 */
export default class InternalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InternalError";
  }
}
