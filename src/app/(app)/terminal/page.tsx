import { requireAdmin } from "@/features/auth/utils/require-admin";
import { TerminalPage } from "@/features/terminal/components/terminal-page";

export const dynamic = "force-dynamic";

export default async function TerminalPageRoute() {
	// Route protection logic
	await requireAdmin();

	return <TerminalPage />;
}
