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
		<Card className="w-full overflow-y-auto border-border bg-card shadow-2xl">
			<CardHeader className="space-y-1 ">
				<CardTitle className="font-bold text-foreground text-xl">
					Registration
				</CardTitle>
				<CardDescription className="text-muted-foreground">
					Upload a file or enter information manually
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Tabs defaultValue="upload" className="w-full">
					<TabsList className="grid w-full grid-cols-2 border bg-muted">
						<TabsTrigger value="upload" className="text-foreground">
							File Upload
						</TabsTrigger>
						<TabsTrigger value="manual" className="text-foreground">
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
