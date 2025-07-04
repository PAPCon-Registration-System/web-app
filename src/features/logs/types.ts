import { LOG_GROUPS } from "@/config/constants";
import type { Log } from "@/types/entities/logs.entity";
import { Users, QrCode, Activity, Shield } from "lucide-react";
export interface TransformedLog {
	id: number;
	status: string;
	name: string;
	email: string;
	time: string;
	updated: string;
}

export const LOG_TABS = [
	{
		id: LOG_GROUPS.REGISTRATION,
		label: "Registration Logs",
		icon: Users,
		description: "User registration and onboarding activities",
		color: "bg-analytics-primary",
	},
	{
		id: LOG_GROUPS.QR_SCANNING,
		label: "QR Scanning Logs",
		icon: QrCode,
		description: "QR code scanning and verification events",
		color: "bg-success",
	},
	{
		id: LOG_GROUPS.BADGE_ACTIVITY,
		label: "Badge Activity Logs",
		icon: Activity,
		description: "Badge creation, updates, and interactions",
		color: "bg-analytics-warning",
	},
	{
		id: LOG_GROUPS.ADMIN_ACTIVITY,
		label: "Admin Activity Logs",
		icon: Shield,
		description: "Administrative actions and system changes",
		color: "bg-analytics-danger",
	},
];

export const LOG_LEVEL_NAMES = {
	60: "fatal",
	50: "error",
	40: "warning",
	30: "info",
	20: "debug",
	10: "trace",
};

export function transformLogsForComponents(logs: Log[]): TransformedLog[] {
	return logs.map((log) => ({
		id: log.id,
		status: LOG_LEVEL_NAMES[log.content.level as keyof typeof LOG_LEVEL_NAMES],
		name: log.content.msg || "No message",
		email: log.content.group || "unknown",
		time: new Date(log.content.time).toLocaleTimeString(),
		updated: new Date(log.content.time).toLocaleDateString(),
	}));
}
