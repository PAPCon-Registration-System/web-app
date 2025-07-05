import { SHA256 } from "crypto-js";

export const hashUserData = (data: string): string => {
	return SHA256(data).toString();
};
