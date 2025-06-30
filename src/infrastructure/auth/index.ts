import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db";
import { account, session, user, verification } from "../db/schema/auth.schema";
import { magicLink } from "better-auth/plugins/magic-link";

const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			user: user,
			account: account,
			session: session,
			verification: verification,
		},
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
	},
	user: {
		fields: {
			emailVerified: "is_email_verified",
		},
	},
	plugins: [
		magicLink({
			sendMagicLink: async ({ email, token, url }, _request) => {
				// TODO: Send magic link to email
			},
		}),
	],
});
export default { auth };
