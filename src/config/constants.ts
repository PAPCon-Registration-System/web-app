export const TOAST_DURATION = 3000;

export const LOG_GROUPS = {
	// Infrastructure
	SERVER: "server",
	DATABASE: "database",
	WEBSOCKET: "ws",

	// Features
	AUTH: "auth",
	PAYMENTS: "payments",
	NOTIFICATIONS: "notifications",

	// Application-specific
	REGISTRATION: "registration",
	QR_SCANNING: "qr-scanning",
	BADGE_ACTIVITY: "badge-activity",
	ADMIN_ACTIVITY: "admin-activity",

	// Development
	TEST: "test",
	DEBUG: "debug",
} as const;

export type LogGroup = (typeof LOG_GROUPS)[keyof typeof LOG_GROUPS];
