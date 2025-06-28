import { Card, CardContent } from "@/features/shared/components/base/card";
import { cn } from "@/features/shared/lib/utils";

interface ActivityMetricsProps {
	newCheckins: number;
	newRegistrations: number;
	className?: string;
}

export function ActivityMetrics({
	newCheckins,
	newRegistrations,
	className,
}: ActivityMetricsProps) {
	const total = newCheckins + newRegistrations;
	const checkinPercentage = total > 0 ? (newCheckins / total) * 100 : 0;
	const registrationPercentage =
		total > 0 ? (newRegistrations / total) * 100 : 0;

	return (
		<Card
			className={cn(
				"border-0 bg-gradient-to-br bg-popover-foreground/90 text-white dark:text-black",
				className,
			)}
		>
			<CardContent className="p-6">
				<div className="space-y-4">
					<div>
						<p className="font-semibold text-lg opacity-80">Recent Activity</p>
						<p className="font-bold text-6xl">{total}</p>
						<p className="text-base opacity-80">Total actions today</p>
					</div>

					<div className="space-y-3">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">Check-ins</span>
								<span className="font-semibold text-sm">{newCheckins}</span>
							</div>
							<div className="h-2 overflow-hidden rounded-full bg-white/20">
								<div
									className="h-full rounded-full bg-white transition-all duration-500 dark:bg-black/90"
									style={{ width: `${checkinPercentage}%` }}
								/>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">New Registrations</span>
								<span className="font-semibold text-sm">
									{newRegistrations}
								</span>
							</div>
							<div className="h-2 overflow-hidden rounded-full bg-white/20">
								<div
									className="h-full rounded-full bg-white transition-all duration-500 dark:bg-black/90"
									style={{ width: `${registrationPercentage}%` }}
								/>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
