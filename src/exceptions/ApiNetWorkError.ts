/**
 * Api network error
 * (This is the only type of error that will not send an event to the Spacefill api)
 */
export class ApiNetWorkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiNetWorkError";
  }
}
