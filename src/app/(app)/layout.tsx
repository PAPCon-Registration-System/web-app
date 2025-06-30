import { Header } from "@/features/shared/layout/header";
import { Footer } from "@/features/shared/layout/footer";
import { SidebarProvider } from "@/features/shared/components/base/sidebar";
import { AppSidebar } from "@/features/shared/layout/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider defaultOpen={true}>
			<div className="flex min-h-screen w-full ">
				<AppSidebar />
				<div className="flex min-h-screen flex-1 flex-col transition-all duration-300">
					<Header />
					<main className="w-full flex-1 overflow-auto px-4 py-8 md:px-10">
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</SidebarProvider>
	);
}
