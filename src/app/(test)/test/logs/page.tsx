"use client";

import { Button } from "@/features/shared/components/base/button";
import { LOG_GROUPS, Logger } from "@/features/shared/lib/logger";
import { useLogStream } from "@/features/logs/hooks/use-log-stream";
import { useMemo } from "react";

export default function RealtimeLogsPage() {
	const query = useMemo(() => ({ group: LOG_GROUPS.TEST }), []);

	const { logs } = useLogStream<{
		id: number;
		content: unknown;
	}>(query);

	return (
		<section>
			<h1 className="font-bold text-4xl">Logs</h1>
			<Button
				onClick={() =>
					Logger.error("You did an oopsie!", {
						group: LOG_GROUPS.TEST,
						hello: "world",
					})
				}
			>
				Do an oopsie
			</Button>
			{JSON.stringify(logs)}
		</section>
	);
}
