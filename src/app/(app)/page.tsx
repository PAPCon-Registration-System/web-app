import { requireAdmin } from "@/features/auth/utils/require-admin";
import { Dashboard } from "@/features/dashboard/components/dashboard";

export const dynamic = "force-dynamic";

export default async function Home() {
	// Route protection logic
	await requireAdmin();

	return (
		<div className="col-span-full flex flex-col">
			<Dashboard />
		</div>
	);
}
