import { Button } from "@/features/shared/components/base/button";
import { Card, CardHeader } from "@/features/shared/components/base/card";

export default function Home() {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<Button value="default">Hiya</Button>
			<Card className="w-full max-w-md bg-accent-foreground">
				<CardHeader className="text-white">Hi</CardHeader>
			</Card>
		</div>
	);
}
