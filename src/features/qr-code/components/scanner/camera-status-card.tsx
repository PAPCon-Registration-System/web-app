import { Card, CardContent } from "@/features/shared/components/base/card";
import { Badge } from "@/features/shared/components/base/badge";

interface CameraStatusCardProps {
	permissionStatus: string;
	terminalId: string;
}

export function CameraStatusCard({
	permissionStatus,
	terminalId,
}: CameraStatusCardProps) {
	return (
		<Card>
			<CardContent>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-base text-muted-foreground sm:text-lg">
							Camera Status
						</p>
						<div className="mt-2 flex items-center gap-2">
							<Badge
								variant={
									permissionStatus === "granted"
										? "default"
										: permissionStatus === "denied"
											? "destructive"
											: "secondary"
								}
							>
								{permissionStatus === "granted"
									? "Ready"
									: permissionStatus === "denied"
										? "Access Denied"
										: "⏳ Initializing..."}
							</Badge>
						</div>
					</div>
					<div className="text-left sm:text-right">
						<p className="text-base text-muted-foreground sm:text-lg">
							Terminal ID
						</p>
						<p className="font-mono text-base">{terminalId || "Not Set"}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
