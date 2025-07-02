"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Label } from "@/features/shared/components/base/label";
import { Input } from "@/features/shared/components/base/input";
import { useRegisterUserWithExcel } from "../data/use-register-user-with-excel";
import { toast } from "sonner";
import { TOAST_DURATION } from "@/config/constants";

const FileUpload = () => {
	const _fileInputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<File | null>(null);
	const [_selectedFileName, setSelectedFileName] = useState<string | null>(
		null,
	);
	const mutation = useRegisterUserWithExcel();

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setSelectedFileName(file.name);
			setFile(file);
		}
	};

	const handleUploadClick = () => {
		if (!file) {
			toast.error("Please select a file", {
				duration: TOAST_DURATION,
			});
			return;
		}

		mutation.mutate(
			{ file },
			{
				onSuccess: () => {
					toast.success("User registered successfully", {
						duration: TOAST_DURATION,
					});
				},
				onError: (error) => {
					toast.error(error.message, {
						duration: TOAST_DURATION,
					});
				},
			},
		);
	};

	return (
		// <div
		// 	className="w-full cursor-pointer rounded-lg border-2 border-zinc-600 border-dashed p-8 text-center transition-colors hover:border-zinc-500"
		// 	onClick={handleUploadClick}
		// >

		// 	{selectedFileName ? (
		// 		<p className="mb-2 text-green-400">Selected file: {selectedFileName}</p>
		// 	) : (
		// 		<>
		// 			<Upload className="mx-auto mb-4 h-12 w-12 text-zinc-400" />
		// 			<p className="mb-2 text-zinc-300">Click to upload or drag and drop</p>
		// 			<p className="mb-4 text-sm text-zinc-500">CSV or Excel file only</p>
		// 		</>

		// 	)}
		// 	<Button
		// 		type="button"
		// 		className="bg-blue-600 text-white hover:bg-blue-700"
		// 		onClick={(event) => {
		// 			event.stopPropagation();
		// 			handleUploadClick();
		// 		}}
		// 	>
		// 		Choose File
		// 	</Button>
		// 	<input
		// 		ref={fileInputRef}
		// 		type="file"
		// 		accept=".csv,.xlsx,.xls"
		// 		onChange={handleFileSelect}
		// 		className="hidden"
		// 	/>
		// </div>
		<div className="flex flex-col gap-2">
			<Label htmlFor="picture">Upload CSV or Excel file only</Label>
			<Input
				id="picture"
				type="file"
				accept=".csv,.xlsx,.xls"
				onChange={handleFileSelect}
			/>
			<Button
				type="button"
				onClick={handleUploadClick}
				className="bg-blue-600 text-white hover:bg-blue-700"
			>
				Upload
			</Button>
		</div>
	);
};

export default FileUpload;
