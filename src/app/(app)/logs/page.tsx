import LogsCards from "@/features/logs/components/logs-cards";
import LogsFilters from "@/features/logs/components/logs-filters";
import LogsHeader from "@/features/logs/components/logs-header";
import LogsTable from "@/features/logs/components/logs-table";
import Pagination from "@/features/logs/components/pagination";
import StatsCards from "@/features/logs/components/stats-cards";
import { logs } from "@/features/logs/data/logs";

export default function LogsPage() {
	return (
		<div className="min-h-screen p-3 text-white sm:p-6">
			<div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
				<LogsHeader />
				<LogsFilters />
				<StatsCards />
				<LogsTable logs={logs} />
				<LogsCards logs={logs} />
				<Pagination currentPage={1} totalResults={2847} resultsPerPage={8} />
			</div>
		</div>
	);
}
