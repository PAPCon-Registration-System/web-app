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
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<File | null>(null);
	const mutation = useRegisterUserWithExcel();

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
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
				onSuccess: (data) => {
					toast.success(data.message, {
						duration: TOAST_DURATION,
					});
					// Reset the file input
					if (fileInputRef.current) {
						fileInputRef.current.value = "";
					}
					setFile(null);
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
		<div className="flex flex-col gap-2">
			<Label htmlFor="file">Upload CSV or Excel file only</Label>
			<Input
				id="file"
				type="file"
				accept=".csv,.xlsx,.xls"
				onChange={handleFileSelect}
				ref={fileInputRef}
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
