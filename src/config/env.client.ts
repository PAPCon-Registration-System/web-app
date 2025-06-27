import { z } from "zod";

const isNotTrailingSlash = (val: string) => !val.endsWith("/");

const envParseResult = z
	.object({
		NEXT_PUBLIC_BASE_URL: z.string().url().refine(isNotTrailingSlash, {
			message: "NEXT_PUBLIC_BASE_URL must not end with a slash",
		}),
	})
	.safeParse({
		// Add the client environment variables here!
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	});

if (!envParseResult.success) {
	console.error(
		"❌ Invalid environment variables:",
		envParseResult.error.format(),
	);
	throw new Error("Invalid environment variables");
}

export const env = envParseResult.data;
