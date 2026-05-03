export class BadRequestError extends Error {
  statusCode = 400;

  constructor(message: string = "Bad Request", statusCode = 400) {
    super(message);
    this.name = "BadRequestError";
    this.message = message;
    this.statusCode = statusCode;
  }
}
