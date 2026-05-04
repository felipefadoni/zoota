import { makeAuthenticationUseCase } from "@/backend/contexts/identity/factories/authentication/makeAuthenticationUseCase";
import { validateLogin } from "@/backend/contexts/identity/validators/authentication/auth-login.validation";
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

export default async function postAuthentication(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method !== "POST") throw new MethodNotAllowedStatus();

    const { email, password } = req.body;

    const loginData = await validateLogin({ email, password });
    const authenticationUseCase = makeAuthenticationUseCase();
    const token = await authenticationUseCase.execute({ email: loginData.email, password: loginData.password });

    return res.status(200).json({
      message: "Authentication successful",
      token,
    });
  } catch (error) {
    wrapError(error, res);
  }
}
