import { dbRead, dbWrite } from "@/backend/infra/postgres";
import { UserRepository } from "../../repositories/UserRepository";
import { GetUserInfoUseCase } from "../../use-cases/users/GetUserInfoUseCase";

export function makeGetUserInfoUseCase(): GetUserInfoUseCase {
  const userRepository = new UserRepository(dbRead, dbWrite);
  return new GetUserInfoUseCase(userRepository);
}
