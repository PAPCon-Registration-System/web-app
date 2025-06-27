"use client";

import { useEffect, useState } from "react";
import { Logger } from "@/features/shared/lib/logger";
import { rpc } from "@/infrastructure/server/rpc";

export default function Home() {
	const [count, setCount] = useState(0);
	const [hello, setHello] = useState<string | null>(null);

	useEffect(() => {
		const fetchHello = async () => {
			const res = await rpc.api.hello.$get();
			const data = await res.json();

			setHello(data.message);
		};

		fetchHello();
	}, []);

	const increment = () => {
		const logger = new Logger({ group: "client", context: "hi" });
		logger.debug("debug in a Client Component!");
		logger.info("info in a Client Component!");
		logger.warn("warn in a Client Component!");
		logger.error("error in a Client Component!");
		setCount((c) => c + 1);
	};

	return (
		<div>
			<h1>Count is {count}</h1>
			<button type="button" onClick={increment}>
				Increment
			</button>

			<p>{hello ?? "Loading from RPC API..."}</p>
		</div>
	);
}
