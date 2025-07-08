import { Logger } from "@/features/shared/lib/logger";
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.QR_ENCRYPTION_SECRET || "ilovegaymmans";

export const encryptUserData = (data: string): string => {
	try {
		return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
	} catch (error) {
		Logger.error("Encryption failed", { error });

		return "Invalid User data";
	}
};

export const decryptUserData = (encryptedData: string): string => {
	try {
		const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
		const decrypted = bytes.toString(CryptoJS.enc.Utf8);

		if (!decrypted) {
			throw new Error("Decryption resulted in empty string");
		}

		return decrypted;
	} catch (error) {
		Logger.error("Decryption failed", { error, data: encryptedData });

		return "Invalid QR Code";
	}
};
