"use client";

import { Button } from "@/features/shared/components/base/button";
import { Logger } from "@/features/shared/lib/logger";
import { useLogStream } from "@/features/logs/hooks/use-log-stream";
import { useMemo } from "react";

export default function RealtimeLogsPage() {
	const query = useMemo(() => ({ group: "test" }), []);

	const { logs } = useLogStream<{
		id: number;
		content: unknown;
	}>(query);

	return (
		<section>
			<h1 className="font-bold text-4xl">Logs</h1>
			<Button
				onClick={() =>
					Logger.error("You did an oopsie!", { group: "test", hello: "world" })
				}
			>
				Do an oopsie
			</Button>
			{JSON.stringify(logs)}
		</section>
	);
}
