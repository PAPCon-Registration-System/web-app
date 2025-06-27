import { Input } from "@/features/shared/components/base/input";
import { Card, CardContent } from "@/features/shared/components/base/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/features/shared/components/base/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/features/shared/components/base/select";
import { Search, Download, Clock, User } from "lucide-react";
import { Badge } from "@/features/shared/components/base/badge";
import { Button } from "@/features/shared/components/base/button";

// Mock data for logs
const logs = [
	{
		id: 1,
		status: "checked-in",
		name: "Sarah Johnson",
		email: "sarah.j@email.com",
		time: "2 minutes ago",
		updated: "2 minutes ago",
	},
	{
		id: 2,
		status: "checked-in",
		name: "Michael Chen",
		email: "michael.c@email.com",
		time: "5 minutes ago",
		updated: "5 minutes ago",
	},
	{
		id: 3,
		status: "registered",
		name: "Emily Davis",
		email: "emily.d@email.com",
		time: "8 minutes ago",
		updated: "8 minutes ago",
	},
	{
		id: 4,
		status: "checked-in",
		name: "David Wilson",
		email: "david.w@email.com",
		time: "12 minutes ago",
		updated: "12 minutes ago",
	},
	{
		id: 5,
		status: "no-show",
		name: "Lisa Anderson",
		email: "lisa.a@email.com",
		time: "15 minutes ago",
		updated: "15 minutes ago",
	},
	{
		id: 6,
		status: "checked-in",
		name: "Robert Kim",
		email: "robert.k@email.com",
		time: "18 minutes ago",
		updated: "18 minutes ago",
	},
	{
		id: 7,
		status: "registered",
		name: "Amanda White",
		email: "amanda.w@email.com",
		time: "22 minutes ago",
		updated: "22 minutes ago",
	},
	{
		id: 8,
		status: "checked-in",
		name: "James Brown",
		email: "james.b@email.com",
		time: "25 minutes ago",
		updated: "25 minutes ago",
	},
];

function getStatusBadge(status: string) {
	switch (status) {
		case "checked-in":
			return (
				<Badge className="bg-green-600 text-white hover:bg-green-700">
					checked-in
				</Badge>
			);
		case "registered":
			return (
				<Badge className="bg-yellow-600 text-white hover:bg-yellow-700">
					registered
				</Badge>
			);
		case "no-show":
			return (
				<Badge className="bg-red-600 text-white hover:bg-red-700">
					no-show
				</Badge>
			);
		default:
			return <Badge variant="secondary">{status}</Badge>;
	}
}

export default function LogsPage() {
	return (
		<div className="min-h-screen p-3 text-white sm:p-6">
			<div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
				{/* Header */}
				<div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
					<div className="flex items-center space-x-3">
						<User className="h-5 w-5 sm:h-6 sm:w-6" />
						<h1 className="font-bold text-xl sm:text-2xl">Registration Logs</h1>
					</div>
					<div className="flex items-center space-x-3">
						<Button
							variant="outline"
							size="sm"
							className="bg-transparent text-gray-300 hover:bg-gray-800"
						>
							<Download className="mr-2 h-4 w-4" />
							<span>Export</span>
						</Button>
					</div>
				</div>

				{/* Filters */}
				<Card>
					<CardContent className="p-3 sm:p-4">
						<div className="space-y-3 sm:space-y-4">
							<div className="relative">
								<Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-gray-400" />
								<Input
									placeholder="Search by name or email..."
									className="bg-gray-700 pl-10 text-white placeholder-gray-400"
								/>
							</div>
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:gap-3">
								<Select>
									<SelectTrigger className="bg-gray-700 text-white lg:w-48">
										<SelectValue placeholder="Filter by status" />
									</SelectTrigger>
									<SelectContent className="bg-gray-800">
										<SelectItem value="all">All Status</SelectItem>
										<SelectItem value="checked-in">Checked In</SelectItem>
										<SelectItem value="registered">Registered</SelectItem>
										<SelectItem value="no-show">No Show</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger className="bg-gray-700 text-white lg:w-48">
										<SelectValue placeholder="Time range" />
									</SelectTrigger>
									<SelectContent className="bg-gray-800">
										<SelectItem value="today">Today</SelectItem>
										<SelectItem value="yesterday">Yesterday</SelectItem>
										<SelectItem value="week">This Week</SelectItem>
										<SelectItem value="month">This Month</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Stats Cards */}
				<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
					<Card>
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-gray-400 text-xs sm:text-sm">Total Logs</p>
									<p className="font-bold text-lg sm:text-2xl lg:text-3xl">
										2,847
									</p>
								</div>
								<div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 sm:h-8 sm:w-8">
									<User className="h-3 w-3 sm:h-4 sm:w-4" />
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-gray-400 text-xs sm:text-sm">Checked In</p>
									<p className="font-bold text-green-400 text-lg sm:text-2xl lg:text-3xl">
										1,923
									</p>
								</div>
								<div className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-600 sm:h-8 sm:w-8">
									<User className="h-3 w-3 sm:h-4 sm:w-4" />
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-gray-400 text-xs sm:text-sm">Registered</p>
									<p className="font-bold text-lg text-yellow-400 sm:text-2xl lg:text-3xl">
										847
									</p>
								</div>
								<div className="flex h-6 w-6 items-center justify-center rounded-lg bg-yellow-600 sm:h-8 sm:w-8">
									<User className="h-3 w-3 sm:h-4 sm:w-4" />
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-gray-400 text-xs sm:text-sm">No Show</p>
									<p className="font-bold text-lg text-red-400 sm:text-2xl lg:text-3xl">
										77
									</p>
								</div>
								<div className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-600 sm:h-8 sm:w-8">
									<User className="h-3 w-3 sm:h-4 sm:w-4" />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Logs Table - Desktop */}
				<Card className="hidden sm:block">
					<CardContent className="p-0">
						<div className="overflow-x-auto">
							<Table className="min-w-[800px]">
								<TableHeader>
									<TableRow>
										<TableHead className="p-4 font-medium text-gray-300">
											Status
										</TableHead>
										<TableHead className="p-4 font-medium text-gray-300">
											Attendee
										</TableHead>
										<TableHead className="p-4 font-medium text-gray-300">
											Time
										</TableHead>
										<TableHead className="p-4 font-medium text-gray-300">
											Updated
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{logs.map((log) => (
										<TableRow key={log.id}>
											<TableCell className="p-4">
												{getStatusBadge(log.status)}
											</TableCell>
											<TableCell className="p-4">
												<div>
													<div className="font-medium text-white">
														{log.name}
													</div>
													<div className="text-gray-400 text-sm">
														{log.email}
													</div>
												</div>
											</TableCell>
											<TableCell className="p-4 text-gray-300">
												<div className="flex items-center space-x-2">
													<Clock className="h-4 w-4 text-gray-400" />
													<span>{log.time}</span>
												</div>
											</TableCell>
											<TableCell className="p-4 text-gray-400">
												{log.updated}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</CardContent>
				</Card>

				{/* Logs Cards - Mobile */}
				<div className="space-y-3 sm:hidden">
					{logs.map((log) => (
						<Card key={log.id}>
							<CardContent className="p-4">
								<div className="space-y-3">
									<div className="flex items-start justify-between">
										<div className="min-w-0 flex-1">
											<div className="truncate font-medium text-white">
												{log.name}
											</div>
											<div className="truncate text-gray-400 text-sm">
												{log.email}
											</div>
										</div>
										<div className="ml-3 flex-shrink-0">
											{getStatusBadge(log.status)}
										</div>
									</div>
									<div className="flex items-center justify-between text-sm">
										<div className="flex items-center space-x-1 text-gray-300">
											<Clock className="h-3 w-3 text-gray-400" />
											<span>{log.time}</span>
										</div>
										<div className="text-gray-400">Updated {log.updated}</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Pagination */}
				<div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
					<p className="text-center text-gray-400 text-sm sm:text-left">
						Showing 1 to 8 of 2,847 results
					</p>
					<div className="flex items-center justify-center space-x-2">
						<Button
							variant="outline"
							size="sm"
							className="flex-1 bg-transparent text-gray-300 hover:bg-gray-800 sm:flex-none"
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							className="flex-1 bg-transparent text-gray-300 hover:bg-gray-800 sm:flex-none"
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
