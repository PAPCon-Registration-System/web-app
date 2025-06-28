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
		<Card className="hidden bg-accent sm:block">
			<CardContent className="p-0">
				<div className="overflow-x-auto">
					<Table className="min-w-[800px]">
						<TableHeader>
							<TableRow>
								<TableHead className="p-4 font-medium text-black dark:text-gray-400">
									Status
								</TableHead>
								<TableHead className="p-4 font-medium text-black dark:text-gray-400">
									Attendee
								</TableHead>
								<TableHead className="p-4 font-medium text-black dark:text-gray-400">
									Time
								</TableHead>
								<TableHead className="p-4 font-medium text-black dark:text-gray-400">
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
											<div className="font-medium text-black dark:text-white">
												{log.name}
											</div>
											<div className="text-black text-sm dark:text-gray-400">
												{log.email}
											</div>
										</div>
									</TableCell>
									<TableCell className="p-4 text-black dark:text-gray-400">
										<div className="flex items-center space-x-2">
											<Clock className="h-4 w-4 text-black dark:text-gray-400" />
											<span>{log.time}</span>
										</div>
									</TableCell>
									<TableCell className="p-4 text-black dark:text-gray-400">
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
