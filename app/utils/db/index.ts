import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
const client = createClient({ url: process.env.DB_URL as string, authToken: process.env.DB_TOKEN as string });
const db = drizzle(client);

export default db