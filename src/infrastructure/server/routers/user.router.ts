import { zValidator } from "@hono/zod-validator";
import auth from "@/infrastructure/auth";
import { z } from "zod/v4";
import xlsx from "node-xlsx";
import generateRandomPassword from "./utils/generate-random-password";
import { factory } from "../utils/factory";

// TODO: Protect routes (only admin can seed)

const routes = factory
	.createApp()
	.post(
		"seed/manual",
		zValidator(
			"json",
			z.object({
				email: z.email(),
				firstName: z.string().min(1),
				middleName: z.string().optional(),
				lastName: z.string().min(1),
			}),
		),
		async (c) => {
			const data = c.req.valid("json");

			// TODO: Add logger for errors
			await auth.auth.api.signUpEmail({
				body: {
					email: data.email,
					name: `${data.firstName} ${data.middleName} ${data.lastName}`,
					password: generateRandomPassword(),
				},
			});

			return c.json({
				message: `Successfully registered user ${data.email}`,
			});
		},
	)
	.post(
		"seed/file",
		zValidator(
			"form",
			z.object({
				file: z.instanceof(File).refine(
					(file) =>
						[
							"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // xls
							"application/vnd.ms-excel", // xlsx
							"text/csv", // csv
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

			// Should expect name, email, and designation
			// The actual shape is TBD, but I'll assume that the file has the following structure:
			// [
			// 	["name", "email", "designation"],
			// 	["John Doe", "john.doe@example.com", "Software Engineer"],
			// 	["Jane Smith", "jane.smith@example.com", "Product Manager"],
			// ]
			const sheets = xlsx.parse(buffer);
			const data = sheets[0].data as [string, string, string][];
			const userInformation: {
				name: string;
				email: string;
			}[] = data.slice(1).map(([name, email]) => ({
				name,
				email,
			}));

			// TODO: Add logger for errors and check if user already exists
			await Promise.all(
				userInformation.map(async (user) => {
					await auth.auth.api.signUpEmail({
						body: {
							email: user.email,
							name: user.name,
							password: generateRandomPassword(),
						},
					});
				}),
			);

			return c.json({
				message: `Successfully seeded ${userInformation.length} users`,
			});
		},
	);

export default routes;
