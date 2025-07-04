import { useMemo } from "react";
import { Card, CardContent } from "@/features/shared/components/base/card";
import { Database } from "lucide-react";
import type { Log } from "@/types/entities/logs.entity";

interface StatsCardsEnhancedProps {
	logs: Log[];
}

export default function StatsCards({ logs }: StatsCardsEnhancedProps) {
	const stats = useMemo(() => {
		const errorLogs = logs.filter((log) => log.content.level >= 50).length;
		const warningLogs = logs.filter((log) => log.content.level === 40).length;
		const infoLogs = logs.filter((log) => log.content.level === 30).length;

		return [
			{
				label: "Total Logs",
				value: logs.length.toLocaleString(),
				textColor: "text-lg sm:text-2xl lg:text-3xl text-foreground",
				bgColor: "bg-analytics-primary",
			},
			{
				label: "Info Logs",
				value: infoLogs.toLocaleString(),
				textColor: "text-analytics-primary text-lg sm:text-2xl lg:text-3xl",
				bgColor: "bg-analytics-primary",
			},
			{
				label: "Warnings",
				value: warningLogs.toLocaleString(),
				textColor: "text-lg text-analytics-warning sm:text-2xl lg:text-3xl",
				bgColor: "bg-analytics-warning-dark",
			},
			{
				label: "Errors",
				value: errorLogs.toLocaleString(),
				textColor: "text-lg text-analytics-danger sm:text-2xl lg:text-3xl",
				bgColor: "bg-analytics-danger",
			},
		];
	}, [logs]);

	return (
		<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
			{stats.map((stat) => (
				<Card key={stat.label} className="border-border bg-accent dark:bg-card">
					<CardContent className="p-3 sm:p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-muted-foreground text-xs sm:text-sm">
									{stat.label}
								</p>
								<p className={`font-bold ${stat.textColor}`}>{stat.value}</p>
							</div>
							<div
								className={`flex h-6 w-6 items-center justify-center rounded-lg ${stat.bgColor} sm:h-8 sm:w-8`}
							>
								<Database className="h-3 w-3 text-white sm:h-4 sm:w-4" />
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
