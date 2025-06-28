import { Hono } from "hono";
import { z } from "zod/v4";
import { zValidator } from "@hono/zod-validator";
import { userTable } from "@/infrastructure/db/schema/auth.schema";
import { v4 as uuidv4 } from "uuid";
import db from "@/infrastructure/db";

const ParticipantCreateSchema = z.object({
	firstName: z.string().min(1),
	middleName: z.string().optional(),
	lastName: z.string().min(1),
	email: z.email(),
	image: z.string().optional(),
});

type DrizzleInsertUser = typeof userTable.$inferInsert;
type DrizzleSelectUser = typeof userTable.$inferSelect;

// TODO
// Protect routes (only admin can seed)
// Log actions
// Wrap with try-catch
// Implement clean code (business logic in service, couple infra and service since we probably won't change it)

const app = new Hono().post(
	"seed/manual",
	zValidator("json", ParticipantCreateSchema),
	async (c) => {
		const data = c.req.valid("json");

		const payload: DrizzleInsertUser = {
			id: uuidv4(),
			name: `${data.firstName} ${data.middleName} ${data.lastName}`,
			email: data.email,
			image: data.image,
		};

		const newUser = await db.insert(userTable).values(payload).returning();

		return c.json(newUser);
	},
);

export default app;
