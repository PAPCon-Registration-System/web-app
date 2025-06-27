import { Bell, User } from "lucide-react";
import { Button } from "../components/base/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/base/avatar";
import { ModeToggle } from "../components/base/theme-toggle";

export function Header() {
	const navItems = [
		{ name: "Dashboard", active: true },
		{ name: "Registrations", active: false },
		{ name: "Analytics", active: false },
		{ name: "Events", active: false },
		{ name: "Reports", active: false },
		{ name: "Settings", active: false },
	];

	return (
		<header className="border-border border-b bg-card">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-8">
						<div className="font-bold text-2xl text-primary">EventHub</div>
						<nav className="hidden space-x-1 md:flex">
							{navItems.map((item) => (
								<Button
									key={item.name}
									variant={item.active ? "secondary" : "ghost"}
									className={`px-4 py-2 ${
										item.active
											? "bg-secondary text-secondary-foreground"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{item.name}
								</Button>
							))}
						</nav>
					</div>

					<div className="flex items-center space-x-4">
						<Button variant="ghost" size="icon">
							<Bell className="h-5 w-5" />
						</Button>
						<ModeToggle />
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
