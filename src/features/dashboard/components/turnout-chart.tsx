import { Card, CardContent } from "@/features/shared/components/base/card";

interface TurnoutChartProps {
	attendees: number;
	registered: number;
	className?: string;
}

export function TurnoutChart({
	attendees,
	registered,
	className,
}: TurnoutChartProps) {
	const percentage = Math.round((attendees / registered) * 100);
	const circumference = 2 * Math.PI * 45;
	const strokeDasharray = circumference;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<Card
			className={`border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white ${className}`}
		>
			<CardContent className="p-6">
				<div className="flex h-full items-center justify-between">
					<div className="space-y-2">
						<p className="font-semibold text-lg opacity-80">
							Turnout Analytics
						</p>
						<p className="font-bold text-6xl">{percentage}%</p>
						<div className="space-y-1">
							<div className="flex items-center gap-2 text-base">
								<div className="h-2 w-2 rounded-full bg-white" />
								<span>Present: {attendees.toLocaleString()}</span>
							</div>
							<div className="flex items-center gap-2 text-base">
								<div className="h-2 w-2 rounded-full bg-white/40" />
								<span>Registered: {registered.toLocaleString()}</span>
							</div>
						</div>
					</div>
					<div className="relative">
						<svg className="-rotate-90 h-32 w-32 transform">
							<title>Turnout Pie Chart</title>
							<circle
								cx="64"
								cy="64"
								r="45"
								stroke="rgba(255,255,255,0.2)"
								strokeWidth="8"
								fill="transparent"
							/>
							<circle
								cx="64"
								cy="64"
								r="45"
								stroke="white"
								strokeWidth="8"
								fill="transparent"
								strokeDasharray={strokeDasharray}
								strokeDashoffset={strokeDashoffset}
								className="transition-all duration-1000 ease-out"
								strokeLinecap="round"
							/>
						</svg>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-center">
								<div className="font-bold text-white text-xl">
									{percentage}%
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
