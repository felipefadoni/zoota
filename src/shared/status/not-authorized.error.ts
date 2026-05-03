export class NotAuthorizedError extends Error {
  statusCode: number;

  constructor(message: string = "Usuário não autorizado", statusCode: number = 403) {
    super(message);
    this.name = "NotAuthorizedError";
    this.message = message;
    this.statusCode = statusCode;
  }
}
