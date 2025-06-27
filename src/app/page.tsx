import { Dashboard } from "@/features/dashboard/components/dashboard";
import { BaseLayout } from "@/features/shared/layout/content-layout";

import { Logger } from "@/features/shared/lib/logger";
import { rpc } from "@/infrastructure/server/rpc";

export const dynamic = "force-dynamic";

export default async function Home() {
	const [helloRes, worldRes] = await Promise.all([
		rpc.api.hello.$get(),
		rpc.api.world.$get(),
	]);

	const [_helloData, _worldData] = await Promise.all([
		helloRes.json(),
		worldRes.json(),
	]);

	const logger = new Logger({ group: "server" });

	logger.debug("debug in a Server Component!");
	logger.info("info in a Server Component!");
	logger.warn("warn in a Server Component!");
	logger.error("error in a Server Component!");

	return (
		<BaseLayout>
			<Dashboard />
		</BaseLayout>
	);
}
