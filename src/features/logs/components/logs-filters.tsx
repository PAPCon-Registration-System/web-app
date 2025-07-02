import { Input } from "@/features/shared/components/base/input";
import { Card, CardContent } from "@/features/shared/components/base/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/features/shared/components/base/select";
import { Search } from "lucide-react";

export default function LogsFilters() {
	return (
		<Card className="bg-accent">
			<CardContent className="p-3 sm:p-4">
				<div className="space-y-3 sm:space-y-4">
					<div className="relative">
						<Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-muted-foreground" />
						<Input
							placeholder="Search by name or email..."
							className="bg-white pl-10 text-white placeholder-gray-400 dark:bg-card"
						/>
					</div>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:gap-3">
						<Select>
							<SelectTrigger className="bg-white text-white lg:w-48 dark:bg-card">
								<SelectValue placeholder="Filter by status" />
							</SelectTrigger>
							<SelectContent className="bg-white dark:bg-card">
								<SelectItem value="all">All Status</SelectItem>
								<SelectItem value="checked-in">Checked In</SelectItem>
								<SelectItem value="registered">Registered</SelectItem>
								<SelectItem value="no-show">No Show</SelectItem>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="bg-white text-white lg:w-48 dark:bg-card">
								<SelectValue placeholder="Time range" />
							</SelectTrigger>
							<SelectContent className="bg-white dark:bg-card">
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
	);
}
