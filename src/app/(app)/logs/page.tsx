"use client";

import { useState } from "react";
import { LOG_GROUPS } from "@/config/constants";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/features/shared/components/base/tabs";
import { Zap } from "lucide-react";
import { LOG_TABS } from "@/features/logs/types";
import LogTab from "@/features/logs/components/log-tab";

export default function LogsPage() {
	const [activeTab, setActiveTab] = useState<string>(LOG_GROUPS.REGISTRATION);

	return (
		<div className="min-h-screen bg-background p-6">
			<div className="mx-auto max-w-7xl space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="font-bold text-3xl text-foreground">
							Logs Monitoring Dashboard
						</h1>
					</div>

					<div className="flex items-center gap-2">
						<Zap className="h-5 w-5 text-success" />
						<span className="font-medium text-sm text-success">Live</span>
					</div>
				</div>

				{/* Overview Cards */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
					{LOG_TABS.map((tab) => {
						return (
							<Card
								key={tab.id}
								className={`cursor-pointer border-border transition-shadow hover:shadow-md ${
									activeTab === tab.id ? "ring-2 ring-primary" : ""
								}`}
								onClick={() => setActiveTab(tab.id)}
							>
								<CardHeader className="pb-2">
									<div className="flex items-center justify-between">
										<tab.icon className="h-5 w-5 text-muted-foreground" />
										<div className={`h-3 w-3 rounded-full ${tab.color}`} />
									</div>
								</CardHeader>
								<CardContent>
									<CardTitle className="font-medium text-foreground text-sm">
										{tab.label}
									</CardTitle>
									<CardDescription className="mt-1 text-xs">
										{tab.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="space-y-4"
				>
					<TabsList className="grid w-full grid-cols-4">
						{LOG_TABS.map((tab) => {
							const Icon = tab.icon;
							return (
								<TabsTrigger
									key={tab.id}
									value={tab.id}
									className="flex items-center gap-2"
								>
									<Icon className="h-4 w-4" />
									<span className="hidden sm:inline">{tab.label}</span>
								</TabsTrigger>
							);
						})}
					</TabsList>

					{LOG_TABS.map((tab) => (
						<TabsContent key={tab.id} value={tab.id}>
							<LogTab group={tab.id} />
						</TabsContent>
					))}
				</Tabs>
			</div>
		</div>
	);
}
