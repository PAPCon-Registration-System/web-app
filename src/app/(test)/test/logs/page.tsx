import { Logger } from "@/features/shared/lib/logger";
import { env } from "@/config/env.server";
import ClientComponent from "./client-component";

export const dynamic = "force-dynamic";

export default function ServerPage() {
	const logsLogger = new Logger({ group: "logs" });

	logsLogger.debug(
		"I should run in the server and you should see DB_URL attached!",
		{ DB_URL: env.DB_URL },
	);

	return (
		<section>
			<h1 className="font-bold text-4xl">Logs</h1>
			<ClientComponent />
		</section>
	);
}
