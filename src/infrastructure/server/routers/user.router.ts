import { Hono } from "hono";
import { z } from "zod/v4";
import { zValidator } from "@hono/zod-validator";
import auth from "@/infrastructure/auth";

const ParticipantCreateSchema = z.object({
	firstName: z.string().min(1),
	middleName: z.string().optional(),
	lastName: z.string().min(1),
	password: z.string().min(8),
	email: z.email(),
	image: z.string().optional(),
});

// TODO
// Protect routes (only admin can seed)
// Log actions
// Wrap with try-catch
// Implement clean code (business logic in service, couple infra and service since we probably won't change it)
// Need to extract service since the same insertion logic will be reused in other pipelines
const app = new Hono();

const routes = app.post(
	"seed/manual",
	zValidator("json", ParticipantCreateSchema),
	async (c) => {
		const data = c.req.valid("json");

		const res = await auth.auth.api.signUpEmail({
			body: {
				email: data.email,
				name: `${data.firstName} ${data.middleName} ${data.lastName}`,
				password: data.password,
			},
		});

		return c.json(res);
	},
);

export default routes;
