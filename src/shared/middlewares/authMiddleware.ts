import type { UserAuthenticated } from "@/backend/contexts/identity/types";
import jwt from "jsonwebtoken";
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
    if (!token) return res.status(401).json({ message: "Acesso negado. Token não fornecido ou formato inválido." });

    const jwtSecret = process.env.JWT_SECRET!;

    const decoded = jwt.verify(token, jwtSecret) as UserAuthenticated;

    req.user = decoded;
    return handler(req, res);
  };
}
