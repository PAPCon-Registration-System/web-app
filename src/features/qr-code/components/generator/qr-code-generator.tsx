"use client";

import { useState } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Card, CardContent } from "@/features/shared/components/base/card";
import { QrCode } from "lucide-react";
import { QRCodeDisplay } from "./qr-code-display";

// TODO: use actual user data in backend
function generateMockUserData() {
	const randomId = Math.floor(Math.random() * 1000000000);
	const gender = Math.random() < 0.5 ? "men" : "women";
	const photoIndex = Math.floor(Math.random() * 100); // 0–99

	return {
		userId: `user_${randomId}`,
		name: "John Doe",
		email: "john.doe@example.com",
		photoUrl: `https://randomuser.me/api/portraits/${gender}/${photoIndex}.jpg`,
	};
}

export function QRCodeGenerator() {
	const [qrGenerated, setQrGenerated] = useState(false);

	const handleGenerateQR = async () => {
		setQrGenerated(true);
	};

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
						userData={generateMockUserData()}
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
