import { Dashboard } from "@/features/dashboard/components/dashboard";
import { BaseLayout } from "@/features/shared/layout/content-layout";

export default function Home() {
	return (
		<BaseLayout>
			<Dashboard />
		</BaseLayout>
	);
}
