import { Card, CardContent } from "@/features/shared/components/base/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/features/shared/components/base/table";
import { Clock } from "lucide-react";
import StatusBadge from "./status-badge";

interface Log {
	id: number;
	status: string;
	name: string;
	email: string;
	time: string;
	updated: string;
}

interface LogsTableProps {
	logs: Log[];
}

export default function LogsTable({ logs }: LogsTableProps) {
	return (
		<Card className="hidden border-border bg-accent sm:block dark:bg-card">
			<CardContent className="p-0">
				<div className="overflow-x-auto">
					<Table className="min-w-[800px]">
						<TableHeader>
							<TableRow>
								<TableHead className="p-4 font-medium text-foreground">
									Status
								</TableHead>
								<TableHead className="p-4 font-medium text-foreground">
									Attendee
								</TableHead>
								<TableHead className="p-4 font-medium text-foreground">
									Time
								</TableHead>
								<TableHead className="p-4 font-medium text-foreground">
									Updated
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{logs.map((log) => (
								<TableRow key={log.id}>
									<TableCell className="p-4">
										<StatusBadge status={log.status} />
									</TableCell>
									<TableCell className="p-4">
										<div>
											<div className="font-medium text-foreground">
												{log.name}
											</div>
											<div className="text-foreground text-sm">{log.email}</div>
										</div>
									</TableCell>
									<TableCell className="p-4 text-foreground">
										<div className="flex items-center space-x-2">
											<Clock className="h-4 w-4 text-muted-foreground" />
											<span>{log.time}</span>
										</div>
									</TableCell>
									<TableCell className="p-4 text-foreground">
										{log.updated}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}
