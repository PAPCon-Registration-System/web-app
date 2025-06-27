import { Card, CardContent } from "@/features/shared/components/base/card";

export function RegistrationChart() {
	return (
		<Card className="h-full border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
			<CardContent className="p-6">
				<div className="space-y-4">
					<div>
						<p className="text-sm opacity-80">New Registrations</p>
						<p className="font-bold text-4xl">42%</p>
						<p className="text-sm opacity-80">847 this week</p>
					</div>
					<div className="h-2 overflow-hidden rounded-full bg-white/20">
						<div className="h-full w-[42%] rounded-full bg-white" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
