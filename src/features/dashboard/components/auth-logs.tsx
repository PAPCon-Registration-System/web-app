import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";
import { Badge } from "@/features/shared/components/base/badge";
import { Clock, MapPin, User } from "lucide-react";

interface AuthLog {
	id: string;
	name: string;
	email: string;
	checkInTime: string;
	location: string;
	status: "checked-in" | "late" | "early";
}

interface AuthLogsProps {
	className?: string;
}

export function AuthLogs({ className }: AuthLogsProps) {
	const logs: AuthLog[] = [
		{
			id: "1",
			name: "John Doe",
			email: "john@example.com",
			checkInTime: "09:15 AM",
			location: "Main Entrance",
			status: "checked-in",
		},
		{
			id: "2",
			name: "Jane Smith",
			email: "jane@example.com",
			checkInTime: "09:45 AM",
			location: "Side Entrance",
			status: "late",
		},
		{
			id: "3",
			name: "Bob Wilson",
			email: "bob@example.com",
			checkInTime: "08:30 AM",
			location: "VIP Entrance",
			status: "early",
		},
		{
			id: "4",
			name: "Alice Brown",
			email: "alice@example.com",
			checkInTime: "09:20 AM",
			location: "Main Entrance",
			status: "checked-in",
		},
		{
			id: "5",
			name: "Charlie Davis",
			email: "charlie@example.com",
			checkInTime: "10:10 AM",
			location: "Side Entrance",
			status: "late",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "checked-in":
				return "bg-green-100 text-green-800";
			case "late":
				return "bg-red-100 text-red-800";
			case "early":
				return "bg-blue-100 text-blue-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle className="flex items-center space-x-2">
					<User className="h-4 w-4" />
					<span>Recent Check-ins</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="max-h-80 space-y-4 overflow-y-auto">
					{logs.map((log) => (
						<div
							key={log.id}
							className="flex items-center justify-between rounded-lg border p-3"
						>
							<div className="flex-1">
								<div className="font-medium">{log.name}</div>
								<div className="text-muted-foreground text-sm">{log.email}</div>
								<div className="mt-1 flex items-center space-x-4 text-muted-foreground text-xs">
									<div className="flex items-center space-x-1">
										<Clock className="h-3 w-3" />
										<span>{log.checkInTime}</span>
									</div>
									<div className="flex items-center space-x-1">
										<MapPin className="h-3 w-3" />
										<span>{log.location}</span>
									</div>
								</div>
							</div>
							<Badge className={getStatusColor(log.status)}>{log.status}</Badge>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
