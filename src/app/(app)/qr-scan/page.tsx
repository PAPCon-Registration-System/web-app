"use client";

import { useState, useEffect } from "react";
import { decryptUserData } from "@/features/qr-code/lib/encryption";
import { QRScannerHeader } from "@/features/qr-code/components/scanner/qr-scanner-header";
import { CameraStatusCard } from "@/features/qr-code/components/scanner/camera-status-card";
import { ErrorCard } from "@/features/qr-code/components/scanner/error-card";
import { ScannerCard } from "@/features/qr-code/components/scanner/scanner-card";
import { TroubleshootingCard } from "@/features/qr-code/components/scanner/troubleshooting-card";
import { ConfirmationSheet } from "@/features/qr-code/components/scanner/confirmation-sheet";
import { LOG_GROUPS, Logger } from "@/features/shared/lib/logger";
import { QRScanActionEnum } from "@/types/enums/QRScanActionEnum";

interface ScanResult {
	rawData: string;
	decryptedData: string;
	timestamp: Date;
}

interface ConfirmationData {
	actionType: QRScanActionEnum;
	event: string;
	terminalId: string;
	kitClaiming?: boolean;
}

export default function QRScannerPage() {
	// TODO: If this gets any larger, let's move this to a zustand store
	const [scanResult, setScanResult] = useState<ScanResult | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [cameraReady, setCameraReady] = useState(false);
	const [permissionStatus, setPermissionStatus] = useState<string>("checking");
	const [showConfirmation, setShowConfirmation] = useState(false);

	const [confirmationData, setConfirmationData] = useState<ConfirmationData>({
		actionType: QRScanActionEnum.CHECK_IN,
		event: "",
		terminalId: "",
		kitClaiming: false,
	});

	const [isProcessing, setIsProcessing] = useState(false);

	useEffect(() => {
		// Check camera permissions on component mount
		const checkCameraPermission = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				stream.getTracks().forEach((track) => track.stop());

				setPermissionStatus("granted");
				setCameraReady(true);
			} catch (err: any) {
				Logger.error("Camera permission error:", { err });
				setPermissionStatus("denied");
				setError(`Camera access denied: ${err.message}`);
			}
		};

		checkCameraPermission();
	}, []);

	const handleScanResult = (detectedCodes: any[]) => {
		if (detectedCodes && detectedCodes.length > 0) {
			const firstCode = detectedCodes[0];

			const decryptedData = decryptUserData(firstCode.rawValue);

			const result: ScanResult = {
				rawData: firstCode.rawValue,
				decryptedData: decryptedData,
				timestamp: new Date(),
			};

			setScanResult(result);
			setShowConfirmation(true);
			setError(null);
		}
	};

	const handleScanError = (error: unknown) => {
		Logger.error("QR Scanner error:", { error });

		const errorMessage =
			error && typeof error === "object" && "message" in error
				? (error as { message: string }).message
				: "Unknown scanner error";

		setError(`Scanner error: ${errorMessage}`);
	};

	const handleConfirmAction = async () => {
		if (!scanResult) return;

		setIsProcessing(true);

		try {
			// TODO: Implement API call (i am not sure what is meant by this so i will just leave this todo here)
			// Just logging for now
			Logger.info(`QR Scanned at ${confirmationData.terminalId}`, {
				group: LOG_GROUPS.QR,
				data: scanResult.decryptedData,
			});
			// Reset form and close modal
			setShowConfirmation(false);
			setScanResult(null);
			setConfirmationData({
				actionType: QRScanActionEnum.CHECK_IN,
				event: "",
				terminalId: "",
				kitClaiming: false,
			});
		} catch (error) {
			Logger.error("Error processing action:", { error });

			setError("Failed to process the action. Please try again.");
		} finally {
			setIsProcessing(false);
		}
	};

	const handleCancelScan = () => {
		setShowConfirmation(false);
		setScanResult(null);
		setConfirmationData({
			actionType: QRScanActionEnum.CHECK_IN,
			event: "",
			terminalId: "",
			kitClaiming: false,
		});
	};

	const handleUpdateConfirmationData = (data: Partial<ConfirmationData>) => {
		setConfirmationData((prev) => ({ ...prev, ...data }));
	};

	return (
		<div className="col-span-full flex flex-col">
			<div className="flex flex-col space-y-4 p-4 sm:space-y-6 sm:p-6">
				<QRScannerHeader />

				<CameraStatusCard
					permissionStatus={permissionStatus}
					terminalId={confirmationData.terminalId}
				/>

				{error && <ErrorCard error={error} />}

				<ScannerCard
					cameraReady={cameraReady}
					permissionStatus={permissionStatus}
					onScan={handleScanResult}
					onError={handleScanError}
				/>

				<TroubleshootingCard />

				<ConfirmationSheet
					open={showConfirmation}
					onOpenChange={setShowConfirmation}
					scanResult={scanResult}
					confirmationData={confirmationData}
					onUpdateData={handleUpdateConfirmationData}
					onConfirm={handleConfirmAction}
					onCancel={handleCancelScan}
					isProcessing={isProcessing}
				/>
			</div>
		</div>
	);
}
