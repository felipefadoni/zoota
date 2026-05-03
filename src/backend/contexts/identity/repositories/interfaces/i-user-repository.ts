import type { User } from "@/backend/infra/postgres/schemas/users";

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: User, passwordHash: string): Promise<void>;
  update(id: string, data: Partial<User>): Promise<void>;
  delete(id: string): Promise<void>;
}
