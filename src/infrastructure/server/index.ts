import { Hono } from "hono";

import hello from "./routers/hello.router";
import world from "./routers/world.router";

export const app = new Hono().basePath("/api");

const routes = app.route("/hello", hello).route("/world", world);

/**
 * @example
 * import { hc } from 'hono/client';
 *
 * import type { AppType } from 'server';
 *
 * const client = hc<App>(process.env.NEXT_PUBLIC_BASE_URL); // we have to pass a full URL like 'http://localhost:3000'
 */
export type AppType = typeof routes;
