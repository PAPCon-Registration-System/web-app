import { Footer } from "./footer";
import { Header } from "./header";

interface BaseLayoutProps {
	children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<div className="flex min-h-screen flex-col ">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
