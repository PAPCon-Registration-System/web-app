import { factory } from "../utils/factory";
import { z } from "zod";
import { validator } from "hono/validator";
import { zValidator } from "@hono/zod-validator";
import db from "@/infrastructure/db";
import { logs } from "@/infrastructure/db/schema/logs.schema";
import { eq, sql, and } from "drizzle-orm";
import { Logger } from "@/features/shared/lib/logger";
import type {
	ClientErrorStatusCode,
	ServerErrorStatusCode,
	SuccessStatusCode,
} from "hono/utils/http-status";

const ROUTER_GROUP = "logs";

const validateLog = validator("json", (value, c) => {
	const postLogSchema = z.object({
		msg: z.string().optional(),
		level: z.number(),
		time: z.string(),
		group: z.string(),
		environment: z.enum(["production", "development", "test"]),
		context: z.any().optional(),
	});

	const parsed = postLogSchema.safeParse(value);
	if (!parsed.success) {
		return c.text("Malformed log structure.", 400 as ClientErrorStatusCode);
	}
	return parsed.data;
});

const app = factory
	.createApp()
	.post("/", validateLog, async (c) => {
		const log = c.req.valid("json");

		try {
			await db.insert(logs).values({ content: log });
		} catch (error) {
			c.var.logger.error(
				"An error occured while inserting a log to the database.",
				{ error, group: ROUTER_GROUP },
			);
			return c.body(null, 500 as ServerErrorStatusCode);
		}

		return c.body(null, 201 as SuccessStatusCode);
	})
	// TODO: add auth role-based middleware for admin access to view logs
	.get(
		"/",
		zValidator(
			"query",
			z.object({
				group: z.string().optional(),
				level: z
					.enum(Object.keys(Logger.levelMap) as [keyof typeof Logger.levelMap])
					.optional(),
				environment: z.enum(["production", "development", "test"]).optional(),
				limit: z.number().positive().default(100),
			}),
		),
		async (c) => {
			const query = c.req.valid("query");

			const conditions = [sql`jsonb_typeof(content) = 'object'`];

			if (query.group) {
				conditions.push(eq(sql`content->>'group'`, query.group));
			}

			if (query.level !== undefined) {
				conditions.push(
					eq(
						sql`(content->>'level')::int`,
						Logger.getLogLevelValue(query.level),
					),
				);
			}

			if (query.environment) {
				conditions.push(eq(sql`content->>'environment'`, query.environment));
			}

			const result = await db
				.select()
				.from(logs)
				.where(conditions.length ? and(...conditions) : undefined)
				.orderBy(sql`content->>'time' DESC`)
				.limit(query.limit);

			return c.json(result);
		},
	);

export default app;
