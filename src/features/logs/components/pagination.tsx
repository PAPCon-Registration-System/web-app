"use client";

import { Button } from "@/features/shared/components/base/button";

interface PaginationProps {
	currentPage?: number;
	totalResults?: number;
	resultsPerPage?: number;
	onPrevious?: () => void;
	onNext?: () => void;
}

export default function Pagination({
	currentPage = 1,
	totalResults = 2847,
	resultsPerPage = 8,
}: PaginationProps) {
	const startResult = (currentPage - 1) * resultsPerPage + 1;
	const endResult = Math.min(currentPage * resultsPerPage, totalResults);

	return (
		<div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
			<p className="text-center text-foreground text-sm sm:text-left">
				Showing {startResult} to {endResult} of {totalResults.toLocaleString()}{" "}
				results
			</p>
			<div className="flex items-center justify-center space-x-2">
				<Button
					variant="outline"
					size="sm"
					className="flex-1 bg-transparent text-foreground hover:bg-accent sm:flex-none"
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					className="flex-1 bg-transparent text-foreground hover:bg-accent sm:flex-none"
				>
					Next
				</Button>
			</div>
		</div>
	);
}
