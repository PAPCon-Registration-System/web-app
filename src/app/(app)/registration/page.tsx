import RegistrationForm from "@/features/auth/components/registration-form";
import { requireAdmin } from "@/features/auth/utils/require-admin";

export const dynamic = "force-dynamic";

export default async function RegistrationPage() {
	// Route protection logic
	await requireAdmin();

	return (
		<div className="col-span-full flex flex-col ">
			<RegistrationForm />
		</div>
	);
}
