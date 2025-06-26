import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./src/infrastructure/db/migrations",
	schema: "./src/infrastructure/db/schema",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DB_URL!,
	},
});
