import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer("id", {mode: "number"}).notNull().unique().primaryKey({autoIncrement: true}),
    name: text("name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    doctorCode: text("doctor_code").notNull(),
    creditMonths: text("credit_months"),
    creditAmount: text("credit_amount"),
    createdAt: integer("created_at").default(sql`CURRENT_TIMESTAMP`),
  });