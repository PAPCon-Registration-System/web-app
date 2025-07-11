import type { ConfirmationData } from "@/features/qr-code/components/scanner/types/confirmation-data";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/features/shared/components/base/select";

interface Props {
	terminalIds: ConfirmationData["terminalId"][];
}

export function TerminalSelect({ terminalIds }: Props) {
	return (
		<Select>
			<SelectTrigger className="w-fit border-transparent pl-1 text-3xl shadow-none">
				<SelectValue placeholder="Select a Terminal" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{terminalIds.map((tid) => (
						<SelectItem value={tid}>{tid}</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
