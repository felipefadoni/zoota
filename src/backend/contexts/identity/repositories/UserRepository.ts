import { type User, usersTable } from "@/backend/infra/postgres/schemas/users";
import { eq } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { IUserRepository } from "./interfaces/i-user-repository";

export class UserRepository implements IUserRepository {
  constructor(
    private readonly dbRead: NodePgDatabase,
    private readonly dbWrite: NodePgDatabase,
  ) {}

  async findById(id: string): Promise<User | null> {
    const [record] = await this.dbRead.select().from(usersTable).where(eq(usersTable.id, id)).limit(1);
    return record;
  }

  async findByEmail(email: string): Promise<User | null> {
    const [record] = await this.dbRead.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
    return record;
  }

  async create(user: User, passwordHash: string): Promise<void> {
    await this.dbWrite.insert(usersTable).values({
      id: user.id,
      name: user.name,
      email: user.email,
      cpfCnpj: user.cpfCnpj,
      password: passwordHash,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt || new Date(),
    });
  }

  async update(id: string, data: Partial<User>): Promise<void> {
    await this.dbWrite
      .update(usersTable)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(usersTable.id, id));
  }

  async delete(id: string): Promise<void> {
    await this.dbWrite.update(usersTable).set({ deletedAt: new Date(), status: "deleted" }).where(eq(usersTable.id, id));
  }
}
