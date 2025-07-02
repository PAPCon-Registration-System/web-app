import { Badge } from "@/features/shared/components/base/badge";

// TODO: Change this to an enum for type safety and better maintainability
interface StatusBadgeProps {
	status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
	switch (status) {
		case "checked-in":
			return (
				<Badge className="bg-success text-black hover:bg-success/90">
					Checked-in
				</Badge>
			);
		case "registered":
			return (
				<Badge className="bg-analytics-warning text-black hover:bg-analytics-warning-dark">
					Registered
				</Badge>
			);
		case "no-show":
			return (
				<Badge className="bg-analytics-danger text-black hover:bg-analytics-danger-dark">
					No-show
				</Badge>
			);
		default:
			return <Badge variant="secondary">{status}</Badge>;
	}
}
