import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import auth from "@/infrastructure/auth";
import { z } from "zod/v4";
import xlsx from "node-xlsx";

// TODO: Protect routes (only admin can seed)
const app = new Hono();

const routes = app
	.post(
		"seed/manual",
		zValidator(
			"json",
			z.object({
				email: z.email(),
				// TODO: Randomly generate password
				// since we're just using magic link (users don't need to know their password)
				password: z.string().min(8),
				firstName: z.string().min(1),
				middleName: z.string().optional(),
				lastName: z.string().min(1),
				photoUrl: z.string().optional(),
			}),
		),
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
	.post(
		"seed/excel",
		zValidator(
			"form",
			z.object({
				file: z
					.instanceof(File)
					.refine(
						(file) =>
							[
								"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
								"application/vnd.ms-excel",
							].includes(file.type),
						{
							error: "Invalid file type.",
						},
					),
			}),
		),
		async (c) => {
			const { file } = c.req.valid("form");

			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);

			// * Should expect name, email, and designation
			// The actual shape is TBD, but I'll assume that the file has the following structure:
			// [
			// 	["name", "email", "designation"],
			// 	["John Doe", "john.doe@example.com", "Software Engineer"],
			// 	["Jane Smith", "jane.smith@example.com", "Product Manager"],
			// ]
			const sheets = xlsx.parse(buffer);
			const data = sheets[0].data as [string, string, string][];
			console.log(data);

			return c.json({ message: "Excel seeding" });
		},
	);

export default routes;
