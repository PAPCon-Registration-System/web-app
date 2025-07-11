"use client";

import { TerminalSelect } from "./components/terminal-select";
import { useLogStream } from "@/features/logs/hooks/use-log-stream";
import { LOG_GROUPS } from "@/features/shared/lib/logger";
import { useMemo } from "react";
import type { QrCodeLog } from "@/features/logs/types/qr-code-log";
import { QRScanActionEnum } from "@/types/enums/QRScanActionEnum";
import { LogIn, DoorOpen } from "lucide-react";

const VALID_TERMINAL_IDS = ["1", "2", "3", "4", "5"];

export default function Page() {
	const query = useMemo(() => ({ group: LOG_GROUPS.QR }), []);

	const { logs } = useLogStream<QrCodeLog>(query);
	const _checkinLogs = logs.filter(
		(l) =>
			l.confirmationData?.actionType &&
			l.confirmationData?.actionType === QRScanActionEnum.CHECK_IN,
	);
	const _checkoutLogs = logs.filter(
		(l) =>
			l.confirmationData?.actionType &&
			l.confirmationData?.actionType === QRScanActionEnum.CHECK_IN,
	);

	return (
		<div className="grid">
			<div className="mb-4 rounded-md border bg-card p-6 py-4">
				<h1 className="col-span-full flex gap-1 font-bold text-3xl text-foreground">
					<span>Terminal</span>
					<TerminalSelect terminalIds={VALID_TERMINAL_IDS} />
				</h1>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<section className="rounded-md border bg-card p-6">
					<h2 className="mb-4 flex items-center font-bold text-2xl">
						<div className="mr-3 rounded-sm bg-success/10 p-2">
							<LogIn className="text-success" />
						</div>
						Check-ins
					</h2>
				</section>
				<section className="rounded-md border bg-card p-6">
					<h2 className="mb-4 flex items-center font-bold text-2xl">
						<div className="mr-3 rounded-sm bg-destructive/10 p-2">
							<DoorOpen className="text-destructive" />
						</div>
						Check-outs
					</h2>
					{JSON.stringify(logs)}
				</section>
			</div>
		</div>
	);
}
