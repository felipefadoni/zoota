export class MethodNotAllowedStatus extends Error {
  statusCode = 405;

  constructor(message: string = "Method Not Allowed", statusCode = 405) {
    super(message);
    this.name = "Method Not Allowed";
    this.statusCode = statusCode;
  }
}
