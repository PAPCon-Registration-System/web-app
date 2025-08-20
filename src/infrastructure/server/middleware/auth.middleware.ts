import { cors } from "hono/cors";
import { createMiddleware } from "hono/factory";

import type {
	AuthInstance,
	AuthSessionData,
	Session,
} from "@/infrastructure/auth";

export type AuthMiddlewareVariables = AuthSessionData & {
	auth: AuthInstance;
};

export const authMiddleware = ({
	origin,
	auth,
}: {
	origin?: string;
	auth: AuthInstance;
}) =>
	createMiddleware<{
		Variables: AuthSessionData & { auth: AuthInstance };
	}>(async (c, next) => {
		const session = (await auth.api.getSession({
			headers: c.req.raw.headers,
		})) as Session;

		c.set("auth", auth);

		if (!session) {
			c.set("user", null);
			c.set("session", null);

			return next();
		}

		c.set("user", session.user);
		c.set("session", session.session);

		// We apply the better-auth recommended CORS middleware
		const corsAuthMiddleware = cors({
			origin: origin ?? "*",
			allowHeaders: ["Content-Type", "Authorization"],
			allowMethods: ["POST", "GET", "OPTIONS"],
			exposeHeaders: ["Content-Length"],
			maxAge: 600,
			credentials: true,
		});

		return corsAuthMiddleware(c, next);
	});
