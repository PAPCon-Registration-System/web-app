import RegistrationForm from "@/features/auth/components/registration-form";
import { authClient } from "@/infrastructure/auth/auth-client";
import { UserRoleEnumSchema } from "@/types/enums/UserRoleEnum";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { ExtendedSession } from "@/types/entities/session.entity";

export const dynamic = "force-dynamic";

export default async function RegistrationPage() {
	// Route protection logic
	const { data: session } = (await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	})) as { data: ExtendedSession | null };

	if (session?.user.role !== UserRoleEnumSchema.Enum.ADMIN) {
		// This is the only page for normal users at the moment
		redirect("/qr-code");
	}

	return (
		<div className="col-span-full flex flex-col ">
			<RegistrationForm />
		</div>
	);
}
