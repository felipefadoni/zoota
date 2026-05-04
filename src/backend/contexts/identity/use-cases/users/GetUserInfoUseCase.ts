import { NotFoundError } from "@/shared/status/not-found.error";
import type { IUserRepository } from "../../repositories/interfaces/i-user-repository";
import type { GetUserInfoUseCaseInput } from "./types.input";

export class GetUserInfoUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email }: GetUserInfoUseCaseInput) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new NotFoundError();

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      cpfCnpj: user.cpfCnpj,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
    };
  }
}
