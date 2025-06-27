import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";
import { Badge } from "@/features/shared/components/base/badge";

import { Clock, User } from "lucide-react";

export function AuthLogs() {
	const logs = [
		{
			id: 1,
			name: "Sarah Johnson",
			email: "sarah.j@email.com",
			time: "2 minutes ago",
			status: "checked-in",
			urgency: "standard",
		},
		{
			id: 2,
			name: "Michael Chen",
			email: "michael.c@email.com",
			time: "5 minutes ago",
			status: "checked-in",
			urgency: "standard",
		},
		{
			id: 3,
			name: "Emily Davis",
			email: "emily.d@email.com",
			time: "8 minutes ago",
			status: "registered",
			urgency: "standard",
		},
		{
			id: 4,
			name: "David Wilson",
			email: "david.w@email.com",
			time: "12 minutes ago",
			status: "checked-in",
			urgency: "standard",
		},
		{
			id: 5,
			name: "Lisa Anderson",
			email: "lisa.a@email.com",
			time: "15 minutes ago",
			status: "no-show",
			urgency: "critical",
		},
		{
			id: 6,
			name: "David Wilson",
			email: "david.w@email.com",
			time: "12 minutes ago",
			status: "checked-in",
			urgency: "standard",
		},
		{
			id: 7,
			name: "Lisa Anderson",
			email: "lisa.a@email.com",
			time: "15 minutes ago",
			status: "no-show",
			urgency: "critical",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "checked-in":
				return "bg-green-500/10 text-green-500 border-green-500/20";
			case "registered":
				return "bg-blue-500/10 text-blue-500 border-blue-500/20";
			case "no-show":
				return "bg-red-500/10 text-red-500 border-red-500/20";
			default:
				return "bg-gray-500/10 text-gray-500 border-gray-500/20";
		}
	};

	const getUrgencyColor = (urgency: string) => {
		switch (urgency) {
			case "critical":
				return "border-l-red-500";
			case "priority":
				return "border-l-yellow-500";
			default:
				return "border-l-green-500";
		}
	};

	return (
		<Card className="border-border bg-card">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<User className="h-5 w-5" />
					Registration Logs
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-1">
					{/* Header */}
					<div className="grid grid-cols-12 gap-4 border-border border-b px-4 py-2 font-medium text-muted-foreground text-sm">
						<div className="col-span-2">Priority</div>
						<div className="col-span-3">Attendee</div>
						<div className="col-span-3">Time</div>
						<div className="col-span-2">Status</div>
						<div className="col-span-2">Updated</div>
					</div>

					{/* Logs */}
					<div className="space-y-1">
						{logs.map((log) => (
							<div
								key={log.id}
								className={`grid grid-cols-12 gap-4 border-l-2 px-4 py-3 text-sm transition-colors hover:bg-muted/50 ${getUrgencyColor(
									log.urgency,
								)}`}
							>
								<div className="col-span-2">
									<Badge
										variant="outline"
										className={`text-xs ${
											log.urgency === "critical"
												? "border-red-500 text-red-500"
												: log.urgency === "priority"
													? "border-yellow-500 text-yellow-500"
													: "border-green-500 text-green-500"
										}`}
									>
										{log.urgency}
									</Badge>
								</div>
								<div className="col-span-3">
									<div className="font-medium">{log.name}</div>
									<div className="text-muted-foreground text-xs">
										{log.email}
									</div>
								</div>

								<div className="col-span-3 flex items-center gap-1">
									<Clock className="h-3 w-3 text-muted-foreground" />
									{log.time}
								</div>
								<div className="col-span-2">
									<Badge className={getStatusColor(log.status)}>
										{log.status}
									</Badge>
								</div>
								<div className="col-span-2 text-muted-foreground">
									{log.time}
								</div>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
