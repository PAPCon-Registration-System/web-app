import { useState, useEffect } from "react";
import { io, type Socket } from "socket.io-client";
import { rpc } from "@/infrastructure/server/rpc";
import type { GetLogsQueryParams } from "@/types/entities/logs.entity";
import { Logger } from "@/features/shared/lib/logger";
import type { Log } from "@/types/entities/logs.entity";

export function useLogStream<T = Log>(
	query: GetLogsQueryParams & { group: string },
) {
	const [logs, setLogs] = useState<T[]>([]);
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const fetchInitial = async () => {
			const res = await rpc.logs.$get({
				query: {
					...query,
					limit: query.limit ? String(query.limit) : undefined,
				},
			});

			if (!res.ok) {
				Logger.debug("Failed to fetch initial logs.");
				setLogs([]);
			} else {
				const fetchedLogs = await res.json();
				setLogs(fetchedLogs);
			}
		};

		fetchInitial();

		const socket = io("http://localhost:6969", {
			transports: ["websocket"],
		});

		// Listen for new logs from the group
		socket.on(query.group, (newLog: T) => {
			setLogs((prev) => [...prev, newLog]);
		});

		setSocket(socket);

		return () => {
			socket.disconnect();
		};
	}, [query.group, query]);

	return { logs, socket };
}
