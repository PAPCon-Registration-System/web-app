import type { Session as BetterAuthSession } from "@/infrastructure/auth";

export interface ExtendedSession extends BetterAuthSession {
	user: BetterAuthSession["user"] & {
		role: string;
	};
}
