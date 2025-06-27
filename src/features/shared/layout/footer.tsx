export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:h-16 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<p className="text-center text-muted-foreground text-sm leading-loose md:text-left">
						Psychological Association of the Philippines © 2025 All rights
						reserved.
					</p>
				</div>
				<div className="flex items-center space-x-4 text-muted-foreground text-sm">
					<p className="transition-colors hover:text-foreground">Privacy</p>
					<p className="transition-colors hover:text-foreground">Terms</p>
					<p className="transition-colors hover:text-foreground">Support</p>
				</div>
			</div>
		</footer>
	);
}
