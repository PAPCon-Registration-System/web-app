import { User, Download } from "lucide-react";
import { Button } from "@/features/shared/components/base/button";

export default function LogsHeader() {
	return (
		<div className="flex flex-col space-y-3 text-foreground sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
			<div className="flex items-center space-x-3">
				<User className="h-5 w-5 sm:h-6 sm:w-6" />
				<h1 className="font-bold text-xl sm:text-2xl">Registration Logs</h1>
			</div>
			<div className="flex items-center space-x-3">
				<Button
					variant="outline"
					size="sm"
					className="bg-transparent text-foreground hover:bg-accent"
				>
					<Download className="mr-2 h-4 w-4" />
					<span>Export</span>
				</Button>
			</div>
		</div>
	);
}
