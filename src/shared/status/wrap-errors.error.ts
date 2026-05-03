import type { NextApiResponse } from "next";
import { BadRequestError } from "./BadRequest.error";
import { MethodNotAllowedStatus } from "./method-not-allowed.status";
import { NotAuthorizedError } from "./not-authorized.error";
import { NotFoundError } from "./not-found.error";

export async function wrapError<T>(error: T, res: NextApiResponse) {
  if (error instanceof NotFoundError || error instanceof MethodNotAllowedStatus || error instanceof NotAuthorizedError || error instanceof BadRequestError)
    return res.status(error.statusCode).json({ code: error.statusCode, timestamp: new Date().toISOString(), message: error.message });

  if (error instanceof Error) return res.status(500).json({ message: error.message });

  console.error("Erro ao buscar usuário:", error);
  return res.status(500).json({ message: "Erro interno do servidor" });
}
