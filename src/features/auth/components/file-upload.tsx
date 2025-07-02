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

	const handleUploadClick = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

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
		<form className="flex flex-col gap-2" onSubmit={handleUploadClick}>
			<Label htmlFor="file">Upload CSV or Excel file only</Label>
			<Input
				id="file"
				type="file"
				accept=".csv,.xlsx,.xls"
				className="cursor-pointer bg-zinc-50"
				onChange={handleFileSelect}
				ref={fileInputRef}
				required
			/>
			<Button
				disabled={mutation.isPending}
				type="submit"
				className="bg-blue-600 text-white hover:bg-blue-700"
			>
				Upload
			</Button>
		</form>
	);
};

export default FileUpload;
