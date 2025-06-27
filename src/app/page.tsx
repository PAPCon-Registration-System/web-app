import { rpc } from "@/infrastructure/server/rpc";

export default async function Home() {
	const res = await rpc.api.hello.$get();
	const data = await res.json();

	return (
		<div>
			<h1>RPC payload from API: {data.message}</h1>
		</div>
	);
}
