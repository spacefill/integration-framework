/**
 * Network error
 */
export class NetWorkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetWorkError";
  }
}
