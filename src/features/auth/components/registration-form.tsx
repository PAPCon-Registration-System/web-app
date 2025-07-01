"use client";

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
import FileUpload from "./file-upload";
import UserInputForm from "./user-input-form";

const RegistrationForm = () => {
	return (
		<Card className="w-full overflow-y-auto border-zinc-300 bg-zinc-100 shadow-2xl dark:border-zinc-700 dark:bg-zinc-800">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="font-bold text-xl text-zinc-900 dark:text-zinc-100">
					Registration
				</CardTitle>
				<CardDescription className="text-zinc-500 dark:text-zinc-400">
					Upload a file or enter information manually
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Tabs defaultValue="upload" className="w-full">
					<TabsList className="grid w-full grid-cols-2 border-zinc-400 bg-zinc-300 dark:border-zinc-600 dark:bg-zinc-700">
						<TabsTrigger
							value="upload"
							className="text-zinc-700 dark:text-zinc-300 dark:data-[state=active]:bg-zinc-600 dark:data-[state=active]:text-white"
						>
							File Upload
						</TabsTrigger>
						<TabsTrigger
							value="manual"
							className="text-zinc-700 dark:text-zinc-300 dark:data-[state=active]:bg-zinc-600 dark:data-[state=active]:text-white"
						>
							Manual Entry
						</TabsTrigger>
					</TabsList>

					<TabsContent value="upload" className="mt-6">
						<FileUpload />
					</TabsContent>

					<TabsContent value="manual" className="mt-6">
						<UserInputForm />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
};

export default RegistrationForm;
