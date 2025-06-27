import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "@/config/env.server";

export default defineConfig({
	out: "./src/infrastructure/db/migrations",
	schema: "./src/infrastructure/db/schema",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DB_URL,
	},
});
