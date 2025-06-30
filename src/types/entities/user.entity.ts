import { z } from "zod/v4";

export const UserEntitySchema = z.object({
	id: z.uuid(),
	email: z.email(),
	password: z.string(),
	firstName: z.string(),
	middleName: z.string().optional(),
	lastName: z.string(),
	// TODO: Clarify if this is a URL
	photoUrl: z.string().optional(),
	// TODO: Add other fields relevant to business logic
});
export type UserEntity = z.infer<typeof UserEntitySchema>;

export const UserCreateEntitySchema = UserEntitySchema.pick({
	email: true,
	firstName: true,
	middleName: true,
	lastName: true,
	photoUrl: true,
});
export type UserCreateEntity = z.infer<typeof UserCreateEntitySchema>;
