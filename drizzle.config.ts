import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/backend/infra/postgres/drizzle",
  schema: "./src/backend/infra/postgres/schemas/*.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL_WRITE!,
  },
});
