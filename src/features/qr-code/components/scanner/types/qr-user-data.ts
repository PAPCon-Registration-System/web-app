import { z } from "zod";

export const QrUserDataSchema = z.object({
	userId: z.string(),
	name: z.string(),
	email: z.string().email(),
});

export type QrUserData = z.infer<typeof QrUserDataSchema>;
