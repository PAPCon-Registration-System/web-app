"use client";

import { useState } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Card, CardContent } from "@/features/shared/components/base/card";
import { QrCode } from "lucide-react";
import { QRCodeDisplay } from "./qr-code-display";

// TODO: use actual user data in backend
const MOCK_USER_DATA = {
	userId: "user_123456789",
	name: "John Doe",
	email: "john.doe@example.com",
};

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
					<QRCodeDisplay isGenerated={qrGenerated} userData={MOCK_USER_DATA} />

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
