"use client";

import { Logger } from "@/features/shared/lib/logger";
import { Button } from "@/features/shared/components/base/button";

export default function ClientComponent() {
	const logsLogger = new Logger({ group: "logs" });

	return (
		<Button onClick={() => logsLogger.debug("I should run in the client!")}>
			Client Component
		</Button>
	);
}
