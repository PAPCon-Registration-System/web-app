"use client";
import { Bell, LogOut } from "lucide-react";
import { Button } from "../components/base/button";
import { ModeToggle } from "../components/base/theme-toggle";
import { SidebarTrigger } from "../components/base/sidebar";
import { Separator } from "../components/base/separator";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "../components/base/breadcrumb";
import { authClient } from "@/infrastructure/auth/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function Header() {
	const router = useRouter();

	const handleSignout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onError: ({ error }) => {
					toast.error("Failed to log out", { description: error.message });
				},
				onSuccess: () => {
					router.push("/auth");
				},
			},
		});
	};

	return (
		<header className="border-border border-b bg-card">
			<div className="w-full px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-8">
						<div className="mr-2">
							<SidebarTrigger />
						</div>
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbPage className="font-semibold">
										Dashboard
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>

					<div className="flex items-center space-x-2">
						<ModeToggle />
						<Button variant="ghost" size="icon">
							<Bell className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon" onClick={handleSignout}>
							<LogOut />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
