import { Hono } from "hono";

export const app = new Hono().basePath("/api").get("/hello", (c) => {
	return c.json({
		message: "Hello Next.js!",
	});
});

/**
 * @example
 * import { hc } from 'hono/client';
 *
 * import type { AppType } from 'server';
 *
 * const client = hc<App>(process.env.NEXT_PUBLIC_BASE_URL); // we have to pass a full URL like 'http://localhost:3000'
 */
export type AppType = typeof app;
