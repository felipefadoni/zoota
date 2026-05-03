import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const dbRead = drizzle(process.env.DATABASE_URL_READ!);
const dbWrite = drizzle(process.env.DATABASE_URL_WRITE!);

export { dbRead, dbWrite };
