import RegistrationForm from "@/features/auth/components/registration-form";

export const dynamic = "force-dynamic";

export default function RegistrationPage() {
	return (
		<div className="col-span-full flex flex-col lg:px-24">
			<RegistrationForm />
		</div>
	);
}
