import { makeGetUserInfoUseCase } from "@/backend/contexts/identity/factories/makeGetUserInfoUseCase";
import { type AuthenticatedRequest, withAuth } from "@/shared/middlewares/authMiddleware";
import { MethodNotAllowedStatus } from "@/shared/status/method-not-allowed.status";
import { NotAuthorizedError } from "@/shared/status/not-authorized.error";
import { wrapError } from "@/shared/status/wrap-errors.error";
import type { NextApiResponse } from "next";

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") throw new MethodNotAllowedStatus();

    const tokenUser = req.user;
    if (!tokenUser) throw new NotAuthorizedError();

    const getUserInfoUseCase = makeGetUserInfoUseCase();

    const user = await getUserInfoUseCase.execute({ email: tokenUser.email });

    return res.status(200).json({
      message: "Informações do usuário recuperadas com sucesso",
      user: user,
    });
  } catch (error) {
    wrapError(error, res);
  }
}

export default withAuth(handler);
