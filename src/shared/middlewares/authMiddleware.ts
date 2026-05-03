import type { NextApiRequest, NextApiResponse } from "next";

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export function withAuth(handler: (req: AuthenticatedRequest, res: NextApiResponse) => void | Promise<void>) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) return res.status(401).json({ message: "Acesso negado. Token não fornecido ou formato inválido." });

    const token = authHeader.split(" ")[1];

    if (token !== "fake-jwt-token-123456789") return res.status(401).json({ message: "Acesso negado. Token inválido ou expirado." });

    req.user = {
      id: "usr_123",
      email: "teste@email.com",
      role: "admin",
    };

    return handler(req, res);
  };
}
