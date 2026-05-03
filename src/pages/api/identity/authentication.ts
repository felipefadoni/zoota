import { BadRequestError } from "@/shared/status/BadRequest.error";
import { MethodNotAllowedStatus } from "@/shared/status/method-not-allowed.status";
import { wrapError } from "@/shared/status/wrap-errors.error";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  token?: string;
  user?: {
    email: string;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method !== "POST") throw new MethodNotAllowedStatus();

    const { email, password } = req.body;

    if (!email || !password) throw new BadRequestError("Email e password são obrigatórios");

    return res.status(200).json({
      message: "Autenticação realizada com sucesso (Modo Teste)",
      token: "fake-jwt-token-123456789",
      user: {
        email: email,
      },
    });
  } catch (error) {
    wrapError(error, res);
  }
}
