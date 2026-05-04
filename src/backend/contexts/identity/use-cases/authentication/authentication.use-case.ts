import { compareHash } from "@/shared/encrypt/encrypt-hash";
import { NotAuthorizedError } from "@/shared/status/not-authorized.error";
import jwt, { type SignOptions } from "jsonwebtoken";
import type { IUserRepository } from "../../repositories/interfaces/i-user-repository";
import type { AuthenticationUseCaseInput } from "./types.input";

export class AuthenticationUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: AuthenticationUseCaseInput) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new NotAuthorizedError();

    if (user.status !== "ativo") throw new NotAuthorizedError();

    const isPasswordValid = await compareHash(password, user.password);
    if (!isPasswordValid) throw new NotAuthorizedError();

    const payload = {
      email: user.email,
      name: user.name,
      id: user.id,
      role: user.role,
      status: user.status,
    };

    const jwtSecret = process.env.JWT_SECRET!;
    const expiresIn = `${Number(process.env.JWT_EXPIRES_IN || "12")}Hours` as SignOptions["expiresIn"];
    const token = jwt.sign(payload, jwtSecret, { expiresIn });

    return token;
  }
}
