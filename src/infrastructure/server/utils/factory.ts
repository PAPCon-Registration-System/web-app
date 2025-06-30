import { createFactory } from "hono/factory";
import type { RequestIdVariables } from "hono/request-id";
import type { Logger } from "@/features/shared/lib/logger";

/**
 * If you're creating a new middleware that needs to attach a type to `c.var` or `c.env`, do it here.
 */
type AppEnv = {
	Variables: {
		logger: Logger;
	} & RequestIdVariables;
};

/**
 * Used to create middleware, handlers, and app to share definition of the Hono Env
 * Reference: https://hono.dev/docs/helpers/factory#createfactory
 */
export const factory = createFactory<AppEnv>();
