import { Badge } from "@/features/shared/components/base/badge";

// TODO: Change this to an enum for type safety and better maintainability
interface StatusBadgeProps {
	status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
	switch (status) {
		case "checked-in":
			return (
				<Badge className="bg-success text-success-foreground hover:bg-success/90">
					checked-in
				</Badge>
			);
		case "registered":
			return (
				<Badge className="bg-analytics-warning text-white hover:bg-analytics-warning-dark">
					registered
				</Badge>
			);
		case "no-show":
			return (
				<Badge className="bg-analytics-danger text-white hover:bg-analytics-danger-dark">
					no-show
				</Badge>
			);
		default:
			return <Badge variant="secondary">{status}</Badge>;
	}
}
