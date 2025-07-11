"use client";

import { TerminalSelect } from "./components/terminal-select";

const VALID_TERMINAL_IDS = ["1", "2", "3", "4", "5"];

export default function Page() {
	return (
		<div className="grid grid-cols-2">
			<h1 className="col-span-full flex gap-1 font-bold text-3xl text-foreground">
				<span>Terminal</span>
				<TerminalSelect terminalIds={VALID_TERMINAL_IDS} />
			</h1>
			<section>Hello World</section>
			<section>Past Scans</section>
		</div>
	);
}
