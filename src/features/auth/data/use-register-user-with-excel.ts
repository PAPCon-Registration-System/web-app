import { rpc } from "@/infrastructure/server/rpc";
import { useMutation } from "@tanstack/react-query";
import type { InferRequestType } from "hono";

const $registerUserWithExcel = rpc.api.user.seed.excel.$post;
type Input = InferRequestType<typeof $registerUserWithExcel>["form"];

export function useRegisterUserWithExcel() {
	return useMutation({
		mutationFn: async (payload: Input) => {
			const res = await $registerUserWithExcel({ form: payload });

			if (!res.ok) {
				throw new Error("Failed to register user with excel");
			}

			const data = await res.json();
			return data;
		},
	});
}
