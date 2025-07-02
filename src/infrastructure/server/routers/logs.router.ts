import { factory } from "../utils/factory";
import { validator } from "hono/validator";
import { zValidator } from "@hono/zod-validator";
import type {
	ClientErrorStatusCode,
	ServerErrorStatusCode,
	SuccessStatusCode,
} from "hono/utils/http-status";
import { streamSSE } from "hono/streaming";
import {
	LogContentSchema,
	GetLogsQueryParamsSchema,
	GetLogsStreamQueryParamsSchema,
} from "@/types/entities/logs.entity";
import { LogsService } from "../services/logs.service";

const ROUTER_GROUP = "logs";

const validateLog = validator("json", (value, c) => {
	const parsed = LogContentSchema.safeParse(value);
	if (!parsed.success) {
		return c.text("Malformed log structure.", 400 as ClientErrorStatusCode);
	}
	return parsed.data;
});

const app = factory
	.createApp()
	.post("/", validateLog, async (c) => {
		const logContent = c.req.valid("json");
		const logsService = new LogsService(c.var.logger);

		try {
			await logsService.insertLog(logContent);
		} catch (error) {
			c.var.logger.error(
				"An error occured while inserting a log to the database.",
				{ error, group: ROUTER_GROUP },
			);
			return c.body(null, 500 as ServerErrorStatusCode);
		}

		return c.body(null, 201 as SuccessStatusCode);
	})
	// TODO: add auth role-based middleware for admin access to view & stream logs
	.get("/", zValidator("query", GetLogsQueryParamsSchema), async (c) => {
		const query = c.req.valid("query");
		const logsService = new LogsService(c.var.logger);

		const result = await logsService.getLogs(query);

		return c.json(result);
	})
	.get(
		"/stream",
		zValidator("query", GetLogsStreamQueryParamsSchema),
		async (c) => {
			const query = c.req.valid("query");
			const logsService = new LogsService(c.var.logger);

			return streamSSE(c, async (stream) => {
				while (true) {
					const result = await logsService.getLogsStream(query);

					// SSE requires you to serialize payloads into strings, so we need to parse it on the frontend
					await stream.writeSSE({
						data: JSON.stringify(result),
						event: "log-stream",
					});

					await stream.sleep(1000);
				}
			});
		},
	);

export default app;
