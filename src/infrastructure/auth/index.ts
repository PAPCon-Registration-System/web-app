import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db";
import {
	accountTable,
	sessionTable,
	userTable,
	verificationTable,
} from "../db/schema/auth.schema";
import { magicLink } from "better-auth/plugins/magic-link";

const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			user: userTable,
			account: accountTable,
			session: sessionTable,
			verification: verificationTable,
		},
	}),
	plugins: [
		magicLink({
			sendMagicLink: async ({ email, token, url }, _request) => {
				// TODO: Send magic link to email
			},
		}),
	],
});
export default { auth };
