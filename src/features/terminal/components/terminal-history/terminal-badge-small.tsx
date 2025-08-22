import Image from "next/image";
import type { FullQrLog } from "../terminal-page";

export function TerminalBadgeSmall({ log }: { log: FullQrLog }) {
	const user = log.content.context.user;
	return (
		<div className="flex flex-col items-center gap-2">
			<Image
				className="size-24 rounded-sm border"
				width={500}
				height={500}
				src={user.photoUrl}
				alt={user.name}
			/>
			<p className="text-muted-foreground text-sm">
				{new Date(log.content.time).toLocaleTimeString()}
			</p>
		</div>
	);
}
