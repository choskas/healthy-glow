import { Config } from "drizzle-kit";

export default {
  schema: "./app/utils/db/schema.ts",
  out: "./app/utils/db//migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_URL as string,
    authToken: process.env.DB_TOKEN as string
  }
} satisfies Config