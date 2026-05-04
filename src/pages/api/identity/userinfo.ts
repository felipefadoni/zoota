import type { UserAuthenticated } from "@/backend/contexts/identity/types";
import { type AuthenticatedRequest, withAuth } from "@/shared/middlewares/authMiddleware";
import { MethodNotAllowedStatus } from "@/shared/status/method-not-allowed.status";
import { NotAuthorizedError } from "@/shared/status/not-authorized.error";
import { wrapError } from "@/shared/status/wrap-errors.error";
import type { NextApiResponse } from "next";

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") throw new MethodNotAllowedStatus();

    const authenticatedUser = req.user as UserAuthenticated;
    if (!authenticatedUser) throw new NotAuthorizedError();

    return res.status(200).json({
      message: "Informações do usuário recuperadas com sucesso",
      user: authenticatedUser,
    });
  } catch (error) {
    wrapError(error, res);
  }
}

export default withAuth(handler);
