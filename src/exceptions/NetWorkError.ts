/**
 * Network error
 */
export default class NetWorkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetWorkError";
  }
}

