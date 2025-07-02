import { Badge } from "@/features/shared/components/base/badge";
import { Clock } from "lucide-react";

interface LogItemProps {
	log: {
		id: number;
		name: string;
		email: string;
		time: string;
		status: string;
	};
}

export function LogItem({ log }: LogItemProps) {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "checked-in":
				return "border-success text-success";
			case "registered":
				return "border-analytics-warning text-analytics-warning";
			case "no-show":
				return "border-analytics-danger text-analytics-danger";
			default:
				return "border-muted-foreground text-muted-foreground";
		}
	};

	return (
		<div className="grid grid-cols-12 gap-4 border-border border-l-2 px-4 py-3 text-sm transition-colors hover:bg-muted/50">
			<div className="col-span-2">
				<Badge
					variant="outline"
					className={`text-xs ${getStatusColor(log.status)}`}
				>
					{log.status}
				</Badge>
			</div>
			<div className="col-span-4">
				<div className="font-medium">{log.name}</div>
				<div className="text-muted-foreground text-xs">{log.email}</div>
			</div>
			<div className="col-span-4 flex items-center gap-1">
				<Clock className="h-3 w-3 text-muted-foreground" />
				{log.time}
			</div>
			<div className="col-span-2 text-muted-foreground">{log.time}</div>
		</div>
	);
}
