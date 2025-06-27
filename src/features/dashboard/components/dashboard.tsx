import { AuthLogs } from "./auth-logs";
import { TurnoutChart } from "./turnout-chart";
import { StatCard } from "./stat-card";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";
import {
	Users,
	UserCheck,
	Clock,
	TrendingUp,
	Calendar,
	MapPin,
} from "lucide-react";

export function Dashboard() {
	const stats = {
		totalRegistered: 1250,
		currentAttendees: 875,
		checkInsLastHour: 45,
		avgCheckInTime: "2.3 min",
		peakHour: "9:00 AM",
		venues: 3,
	};

	return (
		<div className="container mx-auto space-y-6 p-6">
			<div className="flex flex-col space-y-2">
				<h1 className="font-bold text-3xl">Event Dashboard</h1>
				<p className="text-muted-foreground">
					Real-time monitoring for your event registration system
				</p>
			</div>

			{/* Bento Grid Layout */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
				{/* Stats Cards */}
				<StatCard
					title="Total Registered"
					value={stats.totalRegistered.toLocaleString()}
					change="+12% from last event"
					changeType="positive"
					icon={Users}
					className="lg:col-span-1"
				/>

				<StatCard
					title="Current Attendees"
					value={stats.currentAttendees.toLocaleString()}
					change="+23 in last hour"
					changeType="positive"
					icon={UserCheck}
					className="lg:col-span-1"
				/>

				<StatCard
					title="Check-ins (Last Hour)"
					value={stats.checkInsLastHour}
					change="Peak activity"
					changeType="neutral"
					icon={TrendingUp}
					className="lg:col-span-1"
				/>

				<StatCard
					title="Avg Check-in Time"
					value={stats.avgCheckInTime}
					change="-0.5 min from target"
					changeType="positive"
					icon={Clock}
					className="lg:col-span-1"
				/>

				<StatCard
					title="Peak Hour"
					value={stats.peakHour}
					change="Most active period"
					changeType="neutral"
					icon={Calendar}
					className="lg:col-span-1"
				/>

				<StatCard
					title="Active Venues"
					value={stats.venues}
					change="All operational"
					changeType="positive"
					icon={MapPin}
					className="lg:col-span-1"
				/>

				{/* Turnout Chart */}
				<TurnoutChart
					attendees={stats.currentAttendees}
					registered={stats.totalRegistered}
					className="md:col-span-2 lg:col-span-2"
				/>

				{/* Real-time Activity */}
				<Card className="md:col-span-2 lg:col-span-2">
					<CardHeader>
						<CardTitle>Real-time Activity</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span className="text-sm">Registration Rate</span>
								<span className="font-medium text-sm">15/min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-muted">
								<div className="h-2 w-3/4 rounded-full bg-green-600"></div>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-sm">Check-in Rate</span>
								<span className="font-medium text-sm">8/min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-muted">
								<div className="h-2 w-1/2 rounded-full bg-blue-600"></div>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-sm">System Load</span>
								<span className="font-medium text-sm">Low</span>
							</div>
							<div className="h-2 w-full rounded-full bg-muted">
								<div className="h-2 w-1/4 rounded-full bg-yellow-600"></div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Auth Logs */}
				<AuthLogs className="md:col-span-2 lg:col-span-4 xl:col-span-6" />

				{/* Quick Actions */}
				<Card className="md:col-span-2 lg:col-span-2">
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						<button
							type="button"
							className="w-full rounded-md p-2 text-left transition-colors hover:bg-muted"
						>
							Export Attendee List
						</button>
						<button
							type="button"
							className="w-full rounded-md p-2 text-left transition-colors hover:bg-muted"
						>
							Send Event Updates
						</button>
						<button
							type="button"
							className="w-full rounded-md p-2 text-left transition-colors hover:bg-muted"
						>
							Generate Report
						</button>
						<button
							type="button"
							className="w-full rounded-md p-2 text-left transition-colors hover:bg-muted"
						>
							View Detailed Analytics
						</button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
