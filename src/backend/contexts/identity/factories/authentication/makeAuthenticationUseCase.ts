import { dbRead, dbWrite } from "@/backend/infra/postgres";
import { UserRepository } from "../../repositories/UserRepository";
import { AuthenticationUseCase } from "../../use-cases/authentication/authentication.use-case";

export function makeAuthenticationUseCase() {
  const userRepository = new UserRepository(dbRead, dbWrite);
  return new AuthenticationUseCase(userRepository);
}
