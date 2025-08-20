"use client";

import { useState } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Card, CardContent } from "@/features/shared/components/base/card";
import { QrCode } from "lucide-react";
import { QRCodeDisplay } from "./qr-code-display";
import { authClient } from "@/infrastructure/auth/auth-client";

// TODO: use actual user photo (IF PROVIDED) or just remove displaying the photo
function generateMockUserPhoto() {
	const gender = Math.random() < 0.5 ? "men" : "women";
	const photoIndex = Math.floor(Math.random() * 50) + 1; // 1–50

	return `https://randomuser.me/api/portraits/${gender}/${photoIndex}.jpg`;
}

export function QRCodeGenerator() {
	const { data: session } = authClient.useSession.get();
	const [qrGenerated, setQrGenerated] = useState(false);

	const handleGenerateQR = async () => {
		setQrGenerated(true);
	};

	if (!session) {
		return (
			<div className="flex h-full items-center justify-center">
				<p className="text-muted-foreground">No session detected yet...</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col space-y-6">
			<div className="space-y-1">
				<div className="flex items-center gap-2">
					<QrCode className="size-8" />
					<h1 className="font-bold text-2xl tracking-tight">
						QR Code Generator
					</h1>
				</div>
				<p className="text-muted-foreground">
					Generate a QR code with your credentials for access to the event.
				</p>
			</div>

			<Card className="mx-auto w-full flex-grow">
				<CardContent className="space-y-6">
					<QRCodeDisplay
						isGenerated={qrGenerated}
						userData={{
							email: session.user.email,
							name: session.user.name,
							photoUrl: generateMockUserPhoto(),
							userId: session.user.id,
						}}
					/>

					<div className="flex justify-center">
						<Button
							onClick={handleGenerateQR}
							disabled={qrGenerated}
							size="lg"
							className="min-w-[200px] hover:cursor-pointer"
						>
							{qrGenerated ? (
								<>
									<QrCode className="size-4" />
									Generated
								</>
							) : (
								<>
									<QrCode className="size-4" />
									Generate QR Code
								</>
							)}
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
