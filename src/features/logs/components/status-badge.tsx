import { Badge } from "@/features/shared/components/base/badge";

// TODO: Change this to an enum for type safety and better maintainability
interface StatusBadgeProps {
	status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
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
