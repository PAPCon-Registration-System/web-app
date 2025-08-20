import { requireAdmin } from "@/features/auth/utils/require-admin";
import { QRScannerPage } from "@/features/qr-code/components/scanner/qr-scanner-page";

export const dynamic = "force-dynamic";

export default async function QRScanPage() {
	// Route protection logic
	await requireAdmin();

	return <QRScannerPage />;
}
