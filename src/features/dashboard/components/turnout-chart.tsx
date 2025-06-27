import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";

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
		<Card className={className}>
			<CardHeader>
				<CardTitle>Event Turnout</CardTitle>
			</CardHeader>
			<CardContent className="flex items-center justify-center">
				<div className="relative">
					<svg className="-rotate-90 h-32 w-32 transform">
						<circle
							cx="64"
							cy="64"
							r="45"
							stroke="currentColor"
							strokeWidth="8"
							fill="transparent"
							className="text-muted opacity-20"
						/>
						<circle
							cx="64"
							cy="64"
							r="45"
							stroke="currentColor"
							strokeWidth="8"
							fill="transparent"
							strokeDasharray={strokeDasharray}
							strokeDashoffset={strokeDashoffset}
							className="text-blue-600 transition-all duration-1000 ease-out"
							strokeLinecap="round"
						/>
					</svg>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center">
							<div className="font-bold text-2xl">{percentage}%</div>
							<div className="text-muted-foreground text-xs">Turnout</div>
						</div>
					</div>
				</div>
				<div className="ml-6 space-y-2">
					<div className="flex items-center space-x-2">
						<div className="h-3 w-3 rounded-full bg-blue-600"></div>
						<span className="text-sm">Present: {attendees}</span>
					</div>
					<div className="flex items-center space-x-2">
						<div className="h-3 w-3 rounded-full bg-muted"></div>
						<span className="text-sm">Registered: {registered}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
