export class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string = "Usuário não encontrado", statusCode: number = 404) {
    super(message);
    this.name = "NotFoundError";
    this.message = message;
    this.statusCode = statusCode;
  }
}
