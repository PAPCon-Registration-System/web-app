import { z } from "zod";
import { Logger } from "../features/shared/lib/logger";

const isNotTrailingSlash = (val: string) => !val.endsWith("/");

const envSchema = z.object({
	DB_URL: z.string().url().startsWith("postgresql://"),
	BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET is required"),
	BETTER_AUTH_URL: z.string().url().refine(isNotTrailingSlash, {
		message: "BETTER_AUTH_URL must not end with a slash",
	}),
	NEXT_PUBLIC_BASE_URL: z.string().url().refine(isNotTrailingSlash, {
		message: "NEXT_PUBLIC_BASE_URL must not end with a slash",
	}),
});

const envParseResult = envSchema.safeParse(process.env);

if (!envParseResult.success) {
	Logger.error(
		"❌ Invalid environment variables:",
		envParseResult.error.format(),
	);
	throw new Error("Invalid environment variables");
}

export const env = envParseResult.data;
