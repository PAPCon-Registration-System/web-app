import { Card, CardContent } from "@/features/shared/components/base/card";

export function AttendanceMetrics() {
	return (
		<Card className="h-full border-0 bg-gradient-to-br from-slate-600 to-slate-700 text-white">
			<CardContent className="p-6">
				<div className="space-y-4">
					<div>
						<p className="text-sm opacity-80">Check-ins</p>
						<p className="font-bold text-4xl">78%</p>
						<p className="text-sm opacity-80">1,923 attendees</p>
					</div>
					<div className="h-2 overflow-hidden rounded-full bg-white/20">
						<div className="h-full w-[78%] rounded-full bg-white" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
