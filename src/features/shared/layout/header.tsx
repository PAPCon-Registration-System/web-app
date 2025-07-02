import { Bell, User } from "lucide-react";
import { Button } from "../components/base/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/base/avatar";
import { ModeToggle } from "../components/base/theme-toggle";
import { SidebarTrigger } from "../components/base/sidebar";
import { Separator } from "../components/base/separator";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "../components/base/breadcrumb";

export function Header() {
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
						<Avatar>
							<AvatarImage src="/placeholder.svg?height=32&width=32" />
							<AvatarFallback>
								<User className="h-4 w-4" />
							</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</header>
	);
}
