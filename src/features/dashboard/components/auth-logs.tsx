import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";
import { User } from "lucide-react";
import { LogItem } from "./log-item";

export function AuthLogs() {
	const logs = [
		{
			id: 1,
			name: "Sarah Johnson",
			email: "sarah.j@email.com",
			time: "2 minutes ago",
			status: "checked-in",
		},
		{
			id: 2,
			name: "Michael Chen",
			email: "michael.c@email.com",
			time: "5 minutes ago",
			status: "checked-in",
		},
		{
			id: 3,
			name: "Emily Davis",
			email: "emily.d@email.com",
			time: "8 minutes ago",
			status: "registered",
		},
		{
			id: 4,
			name: "David Wilson",
			email: "david.w@email.com",
			time: "12 minutes ago",
			status: "checked-in",
		},
		{
			id: 5,
			name: "Lisa Anderson",
			email: "lisa.a@email.com",
			time: "15 minutes ago",
			status: "no-show",
		},
		{
			id: 6,
			name: "David Wilson",
			email: "david.w@email.com",
			time: "12 minutes ago",
			status: "checked-in",
		},
		{
			id: 7,
			name: "Lisa Anderson",
			email: "lisa.a@email.com",
			time: "15 minutes ago",
			status: "no-show",
		},
	];

	return (
		<Card className="border-border bg-accent">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<User className="h-5 w-5" />
					Registration Logs
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-1">
					{/* Horizontal scroll container */}
					<div className="overflow-x-auto">
						<div className="min-w-[640px]">
							{/* Header */}
							<div className="grid grid-cols-12 gap-4 border-border border-b px-4 py-2 font-medium text-muted-foreground text-sm">
								<div className="col-span-2">Registered</div>
								<div className="col-span-4">Attendee</div>
								<div className="col-span-4">Time</div>
								<div className="col-span-2">Updated</div>
							</div>

							{/* Logs - Scrollable container */}
							<div className="max-h-[340px] space-y-1 overflow-y-auto">
								{logs.map((log) => (
									<LogItem key={log.id} log={log} />
								))}
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
