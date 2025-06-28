import { Card, CardContent } from "@/features/shared/components/base/card";
import { ArrowUpRight } from "lucide-react";

export function EventAnalytics() {
	return (
		<Card className="h-full border-border bg-accent">
			<CardContent className="p-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="font-semibold text-3xl">Event Analytics</h3>
						<ArrowUpRight className="h-10 w-10 text-green-500" />
					</div>
					<div className="space-y-3">
						<div>
							<p className="text-lg text-muted-foreground">
								Peak Check-in Time
							</p>
							<p className="font-bold text-2xl">9:30 AM</p>
						</div>
						<div>
							<p className="text-lg text-muted-foreground">Average Stay</p>
							<p className="font-semibold text-2xl">4.2 hours</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
