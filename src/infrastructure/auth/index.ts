import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db";
import { accountTable, sessionTable, userTable, verificationTable } from "../db/schema/auth.schema";

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
});
export default { auth };
