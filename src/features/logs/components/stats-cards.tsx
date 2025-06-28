import { Card, CardContent } from "@/features/shared/components/base/card";
import { User } from "lucide-react";

const statsData = [
	{
		label: "Total Logs",
		value: "2,847",
		textColor: "text-lg sm:text-2xl lg:text-3xl",
		bgColor: "bg-blue-600",
	},
	{
		label: "Checked In",
		value: "1,923",
		textColor: "text-green-400 text-lg sm:text-2xl lg:text-3xl",
		bgColor: "bg-green-600",
	},
	{
		label: "Registered",
		value: "847",
		textColor: "text-lg text-yellow-400 sm:text-2xl lg:text-3xl",
		bgColor: "bg-yellow-600",
	},
	{
		label: "No Show",
		value: "77",
		textColor: "text-lg text-red-400 sm:text-2xl lg:text-3xl",
		bgColor: "bg-red-600",
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
								<p className="text-black text-xs sm:text-sm dark:text-gray-400">
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
