import { Badge } from "@/features/shared/components/base/badge";
import { LOG_LEVEL_NAMES } from "../types";

interface LogLevelBadgeProps {
	level: number;
}

export default function LogLevelBadge({ level }: LogLevelBadgeProps) {
	const levelName =
		LOG_LEVEL_NAMES[level as keyof typeof LOG_LEVEL_NAMES] || "unknown";

	switch (level) {
		case 60: // fatal
		case 50: // error
			return (
				<Badge className="bg-analytics-danger text-white hover:bg-analytics-danger-dark">
					{levelName.toUpperCase()}
				</Badge>
			);
		case 40: // warn
			return (
				<Badge className="bg-analytics-warning text-black hover:bg-analytics-warning-dark">
					{levelName.toUpperCase()}
				</Badge>
			);
		case 30: // info
			return (
				<Badge className="bg-analytics-primary text-white hover:bg-analytics-primary-dark">
					{levelName.toUpperCase()}
				</Badge>
			);
		default:
			return <Badge variant="secondary">{levelName.toUpperCase()}</Badge>;
	}
}
