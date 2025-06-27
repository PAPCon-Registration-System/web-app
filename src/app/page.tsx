import { rpc } from "@/infrastructure/server/rpc";

export default async function Home() {
	const [helloRes, worldRes] = await Promise.all([
		rpc.api.hello.$get(),
		rpc.api.world.$get(),
	]);
	const [helloData, worldData] = await Promise.all([
		helloRes.json(),
		worldRes.json(),
	]);

	return (
		<div>
			<h1>
				RPC payload from API: {helloData.message} {worldData.message}
			</h1>
		</div>
	);
}
