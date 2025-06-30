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
		<Card className="w-full overflow-y-auto border-zinc-700 bg-zinc-800 shadow-2xl">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="font-bold text-white text-xl">
					Registration
				</CardTitle>
				<CardDescription className="text-zinc-400">
					Upload a file or enter information manually
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Tabs defaultValue="upload" className="w-full">
					<TabsList className="grid w-full grid-cols-2 border-zinc-600 bg-zinc-700">
						<TabsTrigger
							value="upload"
							className="text-zinc-300 data-[state=active]:bg-zinc-600 data-[state=active]:text-white"
						>
							File Upload
						</TabsTrigger>
						<TabsTrigger
							value="manual"
							className="text-zinc-300 data-[state=active]:bg-zinc-600 data-[state=active]:text-white"
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
