import { Card, CardContent } from "@/features/shared/components/base/card";
import { User } from "lucide-react";

const statsData = [
	{
		label: "Total Logs",
		value: "2,847",
		textColor: "text-lg sm:text-2xl lg:text-3xl",
		bgColor: "bg-analytics-primary",
	},
	{
		label: "Checked In",
		value: "1,923",
		textColor: "text-success-light text-lg sm:text-2xl lg:text-3xl",
		bgColor: "bg-success",
	},
	{
		label: "Registered",
		value: "847",
		textColor: "text-lg text-analytics-warning sm:text-2xl lg:text-3xl",
		bgColor: "bg-analytics-warning-dark",
	},
	{
		label: "No Show",
		value: "77",
		textColor: "text-lg text-analytics-danger sm:text-2xl lg:text-3xl",
		bgColor: "bg-analytics-danger",
	},
];

export default function StatsCards() {
	return (
		<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
			{statsData.map((stat) => (
				<Card key={stat.label} className="bg-accent">
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
								<User className="h-3 w-3 sm:h-4 sm:w-4" />
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
