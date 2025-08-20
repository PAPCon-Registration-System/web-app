import { requireAdmin } from "@/features/auth/utils/require-admin";
import { LogsPage } from "@/features/logs/components/logs-page";

export const dynamic = "force-dynamic";

export default async function LogsPageRoute() {
	// Route protection logic
	await requireAdmin();

	return <LogsPage />;
}
