import { zValidator } from "@hono/zod-validator";
import auth from "@/infrastructure/auth";
import z from "zod/v4";
import xlsx from "node-xlsx";
import generateRandomPassword from "./utils/generate-random-password";
import { factory } from "../utils/factory";
import type { UserRoleEnum } from "@/types/enums/UserRoleEnum";
import { withRole } from "../middleware/with-role.middleware";
import type { ServerErrorStatusCode } from "hono/utils/http-status";

const routes = factory
	.createApp()
	.use(withRole("ADMIN"))
	.post(
		"seed/manual",
		zValidator(
			"json",
			z.object({
				email: z.email(),
				firstName: z.string().min(1),
				middleName: z.string().optional(),
				lastName: z.string().min(1),
				// Using string since zod enums get inferred as `unknown`,
				// causing this parsing to break
				role: z.string(),
			}),
		),
		async (c) => {
			const data = c.req.valid("json");

			try {
				await auth.auth.api.signUpEmail({
					body: {
						email: data.email,
						name: `${data.firstName} ${data.middleName} ${data.lastName}`,
						role: data.role as UserRoleEnum,
						password: generateRandomPassword(),
					},
				});

				return c.json({
					message: `Successfully registered user ${data.email}`,
				});
			} catch (error) {
				c.var.logger.error("An error occurred while registering a user.", {
					error,
				});

				return c.text(
					"An error occurred while registering the user. Please try again later.",
					500 as ServerErrorStatusCode,
				);
			}
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

			// Should expect name, email, and role
			// The actual shape is TBD, but I'll assume that the file has the following structure:
			// [
			// 	["name", "email", "role"],
			// 	["John Doe", "john.doe@example.com", "ADMIN"],
			// 	["Jane Smith", "jane.smith@example.com", "USER"],
			// ]
			const sheets = xlsx.parse(buffer);
			const data = sheets[0].data as [string, string, string][];
			const userInformation: {
				name: string;
				email: string;
				role: UserRoleEnum;
			}[] = data.slice(1).map(([name, email, role]) => ({
				name,
				email,
				role: role as UserRoleEnum,
			}));

			// TODO: Add logger for errors and check if user already exists
			await Promise.all(
				userInformation.map(async (user) => {
					await auth.auth.api.signUpEmail({
						body: {
							email: user.email,
							name: user.name,
							role: user.role,
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
