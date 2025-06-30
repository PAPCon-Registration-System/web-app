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
		<button
			type="button"
			className="w-full cursor-pointer rounded-lg border-2 border-zinc-600 border-dashed p-8 text-center transition-colors hover:border-zinc-500"
			onClick={handleUploadClick}
		>
			<Upload className="mx-auto mb-4 h-12 w-12 text-zinc-400" />
			<p className="mb-2 text-zinc-300">Click to upload or drag and drop</p>
			<p className="mb-4 text-sm text-zinc-500">CSV or Excel files only</p>
			<Button
				type="button"
				className="bg-blue-600 text-white hover:bg-blue-700"
				onClick={handleUploadClick}
			>
				Choose File
			</Button>
			<input
				ref={fileInputRef}
				type="file"
				accept=".csv,.xlsx,.xls"
				onChange={handleFileSelect}
				className="hidden"
			/>
		</button>
	);
};

export default FileUpload;
