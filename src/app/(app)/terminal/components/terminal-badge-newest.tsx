import type { FullQrLog } from "../page";
import Image from "next/image";

export function TerminalBadgeNewest({ log }: { log: FullQrLog }) {
	console.log(log);

	const user = log.content.context.user;

	return (
		<div className="flex">
			<Image width={500} height={500} src={user.photoUrl} alt={user.name} />
		</div>
	);
}
