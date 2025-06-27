import "server-only";
import { z } from "zod";

const isNotTrailingSlash = (val: string) => !val.endsWith("/");

const envParseResult = z
	.object({
		DB_URL: z.string().url().startsWith("postgresql://"),
		BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET is required"),
		BETTER_AUTH_URL: z
			.string()
			.url()
			.refine(isNotTrailingSlash, {
				message: "BETTER_AUTH_URL must not end with a slash",
			})
			.default("http://localhost:3000"),
	})
	.safeParse(process.env);

if (!envParseResult.success) {
	console.error(
		"❌ Invalid environment variables:",
		envParseResult.error.format(),
	);
	throw new Error("Invalid environment variables");
}

export const env = envParseResult.data;
