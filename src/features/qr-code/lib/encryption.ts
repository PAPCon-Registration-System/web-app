import CryptoJS from "crypto-js";
import { env } from "@/config/env.client";
import { Logger } from "@/features/shared/lib/logger";

const SECRET_KEY = env.NEXT_PUBLIC_QR_ENCRYPTION_SECRET;

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
