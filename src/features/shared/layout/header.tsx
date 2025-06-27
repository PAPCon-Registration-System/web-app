import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/features/shared/components/base/button";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/features/shared/components/base/avatar";

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4">
				<div className="flex items-center space-x-4">
					<div className="font-bold text-xl">EventMonitor</div>
					<nav className="hidden items-center space-x-6 font-medium text-sm md:flex">
						<p className="text-foreground/60 transition-colors hover:text-foreground">
							Dashboard
						</p>
						<p className="text-foreground/60 transition-colors hover:text-foreground">
							Events
						</p>
						<p className="text-foreground/60 transition-colors hover:text-foreground">
							Analytics
						</p>
						<p className="text-foreground/60 transition-colors hover:text-foreground">
							Reports
						</p>
					</nav>
				</div>

				<div className="flex items-center space-x-4">
					<Button variant="ghost" size="icon">
						<Bell className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<Settings className="h-4 w-4" />
					</Button>
					<Avatar className="h-8 w-8">
						<AvatarImage src="/avatar.jpg" alt="User" />
						<AvatarFallback>
							<User className="h-4 w-4" />
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	);
}
