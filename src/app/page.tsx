import { Logger } from "@/features/shared/lib/logger";
import { rpc } from "@/infrastructure/server/rpc";

export const dynamic = "force-dynamic";

export default async function Home() {
	const [helloRes, worldRes] = await Promise.all([rpc.api.hello.$get(), rpc.api.world.$get()]);
	const [helloData, worldData] = await Promise.all([helloRes.json(), worldRes.json()]);

	const logger = new Logger({ group: "server" });

	logger.debug("debug in a Server Component!");
	logger.info("info in a Server Component!");
	logger.warn("warn in a Server Component!");
	logger.error("error in a Server Component!");

	return (
		<div>
			<h1>
				RPC payload from API: {helloData.message} {worldData.message}
			</h1>
		</div>
	);
}
