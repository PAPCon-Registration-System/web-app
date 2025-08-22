import type { ConfirmationData } from "@/features/qr-code/components/scanner/types/confirmation-data";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/features/shared/components/base/select";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	terminalIds: ConfirmationData["terminalId"][];
	terminal: ConfirmationData["terminalId"];
	setTerminal: Dispatch<SetStateAction<ConfirmationData["terminalId"]>>;
}

export function TerminalSelect({ terminalIds, terminal, setTerminal }: Props) {
	return (
		<Select value={terminal} onValueChange={setTerminal}>
			<SelectTrigger className="ml-2 w-fit border border-input bg-background pl-2 text-2xl shadow-none">
				<SelectValue placeholder="??" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Select a Terminal</SelectLabel>
					{terminalIds.map((tid) => (
						<SelectItem key={`terminal-select__${tid}`} value={tid}>
							{tid}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
