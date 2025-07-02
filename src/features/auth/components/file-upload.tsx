"use client";

import type React from "react";
import { useRef } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Upload } from "lucide-react";

const FileUpload = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			console.log("Selected file:", file.name, file.type);
			// Handle file upload logic here
		}
	};

	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div
			className="w-full cursor-pointer rounded-lg border-2 border-border border-dashed p-8 text-center transition-colors hover:border-ring"
			onClick={handleUploadClick}
		>
			<Upload className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
			<p className="mb-2 text-foreground">Click to upload or drag and drop</p>
			<p className="mb-4 text-muted-foreground text-sm">
				CSV or Excel files only
			</p>
			<Button
				type="button"
				className="bg-primary text-primary-foreground hover:bg-primary/90"
				onClick={(event) => {
					event.stopPropagation();
					handleUploadClick();
				}}
			>
				Choose File
			</Button>
			<input
				title="Upload file"
				ref={fileInputRef}
				type="file"
				accept=".csv,.xlsx,.xls"
				onChange={handleFileSelect}
				className="hidden"
			/>
		</div>
	);
};

export default FileUpload;
