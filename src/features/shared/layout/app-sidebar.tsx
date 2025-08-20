import {
	Building,
	Calendar,
	Home,
	Inbox,
	QrCode,
	Search,
	Settings,
	UserPlus,
	MonitorStop,
	User,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/features/shared/components/base/sidebar";
import Link from "next/link";
import { authClient } from "@/infrastructure/auth/auth-client";
import { headers } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "../components/base/avatar";

// Menu items.
const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Logs",
		url: "/logs",
		icon: Inbox,
	},
	{
		title: "Registration",
		url: "/registration",
		icon: UserPlus,
	},
	{
		title: "Terminal",
		url: "/terminal",
		icon: MonitorStop,
	},
	{
		title: "QR Code",
		url: "/qr-code",
		icon: QrCode,
	},
	{
		title: "QR Scanner",
		url: "/qr-scan",
		icon: QrCode,
	},
	{
		title: "Event Schedule",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export async function AppSidebar() {
	const session = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	});

	const userName = session.data?.user.name;

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="border-border border-r py-4">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<div className="font-semibold">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Building className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">PAP Summit</span>
									<span className="truncate text-sidebar-foreground/70 text-xs">
										Dashboard
									</span>
								</div>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="border-border border-r">
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild tooltip={item.title}>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="border-border border-r">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton tooltip="User Account">
							<div className="flex aspect-square size-4 items-center justify-center rounded-full bg-sidebar-accent">
								<Avatar>
									<AvatarImage src="/placeholder.svg?height=32&width=32" />
									<AvatarFallback>
										<User className="h-4 w-4" />
									</AvatarFallback>
								</Avatar>
							</div>
							<span>{userName}</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
