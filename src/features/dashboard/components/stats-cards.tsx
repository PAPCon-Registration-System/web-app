import { Card, CardContent } from "@/features/shared/components/base/card";
import { Users, UserCheck, TrendingUp } from "lucide-react";

export function StatsCards() {
	const stats = [
		{
			title: "Total Registered",
			value: "2,847",
			icon: Users,
			change: "+12%",
			changeType: "positive" as const,
		},
		{
			title: "Present Today",
			value: "1,923",
			icon: UserCheck,
			change: "+8%",
			changeType: "positive" as const,
		},
		{
			title: "Turnout Rate",
			value: "67.5%",
			icon: TrendingUp,
			change: "+3.2%",
			changeType: "positive" as const,
		},
	];

	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
			{stats.map((stat) => (
				<Card key={stat.title} className="border-border bg-card">
					<CardContent className="px-6 py-2">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium text-lg text-muted-foreground">
									{stat.title}
								</p>
								<p className="font-bold text-5xl text-foreground">
									{stat.value}
								</p>
								<p
									className={`mt-2 text-base ${
										stat.changeType === "positive"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									{stat.change} from last week
								</p>
							</div>
							<div className="rounded-full bg-primary/10 p-3">
								<stat.icon className="h-8 w-8 text-primary" />
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
