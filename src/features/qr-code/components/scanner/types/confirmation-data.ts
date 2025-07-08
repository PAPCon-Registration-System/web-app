import type { QRScanActionEnum } from "@/types/enums/QRScanActionEnum";

export interface ConfirmationData {
	actionType: QRScanActionEnum;
	event: string;
	terminalId: string;
	kitClaiming?: boolean;
}
