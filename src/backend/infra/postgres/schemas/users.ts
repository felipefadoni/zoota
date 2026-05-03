import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: varchar("user_id").primaryKey().notNull().unique(),
  name: varchar("user_name", { length: 200 }).notNull(),
  email: varchar("user_email", { length: 150 }).notNull().unique(),
  password: varchar("user_password", { length: 100 }).notNull(),
  cpfCnpj: varchar("user_cnpj", { length: 30 }).notNull().unique(),
  role: varchar("user_role", { length: 50 }).notNull().default("user"),
  status: varchar("user_status", { length: 50 }).notNull().default("active"),

  createdAt: timestamp("user_created_at").defaultNow(),
  updatedAt: timestamp("user_updated_at"),
  deletedAt: timestamp("user_deleted_at"),
});

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;
