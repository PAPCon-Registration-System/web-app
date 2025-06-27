import type { LucideIcon } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";

interface StatCardProps {
	title: string;
	value: string | number;
	change?: string;
	changeType?: "positive" | "negative" | "neutral";
	icon: LucideIcon;
	className?: string;
}

export function StatCard({
	title,
	value,
	change,
	changeType = "neutral",
	icon: Icon,
	className,
}: StatCardProps) {
	const changeColor = {
		positive: "text-green-600",
		negative: "text-red-600",
		neutral: "text-muted-foreground",
	}[changeType];

	return (
		<Card className={className}>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="font-medium text-sm">{title}</CardTitle>
				<Icon className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="font-bold text-2xl">{value}</div>
				{change && <p className={`text-xs ${changeColor}`}>{change}</p>}
			</CardContent>
		</Card>
	);
}
