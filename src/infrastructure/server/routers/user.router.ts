import { zValidator } from "@hono/zod-validator";
import auth from "@/infrastructure/auth";
import { UserCreateEntitySchema } from "@/types/entities/user.entity";
import { factory } from "../utils/factory";

// TODO: Protect routes (only admin can seed)

const routes = factory
	.createApp()
	.post(
		"seed/manual",
		zValidator("json", UserCreateEntitySchema),
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
	)
	.post("seed/csv", async (c) => {
		// TODO: Implement CSV seeding
		return c.json({ message: "CSV seeding" });
	})
	.post("seed/excel", async (c) => {
		// TODO: Implement Excel seeding
		return c.json({ message: "Excel seeding" });
	});

export default routes;
