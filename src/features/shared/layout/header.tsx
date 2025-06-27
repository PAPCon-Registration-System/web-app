import { Bell, User } from "lucide-react";
import { Button } from "../components/base/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/base/avatar";
import { ModeToggle } from "../components/base/theme-toggle";
import Link from "next/link";

export function Header() {
	const navItems = ["Dashboard", "Schedules", "Attendees"];

	return (
		<header className="border-border border-b bg-card">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-8">
						<div className="font-bold text-2xl text-primary">PAP Dashboard</div>
						<nav className="hidden gap-6 md:flex">
							{navItems.map((item) => (
								<Link
									className="text-muted-foreground"
									href={`/${item.toLowerCase()}`}
									key={item}
								>
									{item}
								</Link>
							))}
						</nav>
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
