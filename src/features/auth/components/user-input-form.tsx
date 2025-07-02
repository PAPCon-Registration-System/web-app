"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Input } from "@/features/shared/components/base/input";
import { Label } from "@/features/shared/components/base/label";
import type { UserCreateEntity } from "@/types/entities/user.entity";
import { useRegisterUserManually } from "../data/use-register-user-manually";
import { toast } from "sonner";
import { TOAST_DURATION } from "@/config/constants";

type FormData = Omit<UserCreateEntity, "password">;

const initialFormData: FormData = {
	email: "",
	firstName: "",
	middleName: "",
	lastName: "",
};

const UserInputForm = () => {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const mutation = useRegisterUserManually();

	const handleInputChange = (newData: FormData) => {
		setFormData(newData);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		mutation.mutate(formData, {
			onSuccess: (data) => {
				toast.success(data.message, {
					duration: TOAST_DURATION,
				});
				setFormData(initialFormData);
			},
			onError: (error) => {
				toast.error(error.message, {
					duration: TOAST_DURATION,
				});
			},
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label
					htmlFor="email"
					className="font-medium text-zinc-700 dark:text-zinc-300"
				>
					Email
				</Label>
				<Input
					id="email"
					type="email"
					placeholder="Email address"
					value={formData.email}
					onChange={(e) =>
						handleInputChange({ ...formData, email: e.target.value })
					}
					className="border-zinc-300 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100"
					required
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label
						htmlFor="firstName"
						className="font-medium text-zinc-700 dark:text-zinc-300"
					>
						First Name
					</Label>
					<Input
						id="firstName"
						type="text"
						placeholder="First name"
						value={formData.firstName}
						onChange={(e) =>
							handleInputChange({ ...formData, firstName: e.target.value })
						}
						className="border-zinc-300 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100"
						required
					/>
				</div>

				<div className="space-y-2">
					<Label
						htmlFor="middleName"
						className="font-medium text-zinc-700 dark:text-zinc-300"
					>
						Middle Name
					</Label>
					<Input
						id="middleName"
						type="text"
						placeholder="Middle name"
						value={formData.middleName}
						onChange={(e) =>
							handleInputChange({ ...formData, middleName: e.target.value })
						}
						className="border-zinc-300 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100"
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label
					htmlFor="lastName"
					className="font-medium text-zinc-700 dark:text-zinc-300"
				>
					Last Name
				</Label>
				<Input
					id="lastName"
					type="text"
					placeholder="Enter last name"
					value={formData.lastName}
					onChange={(e) =>
						handleInputChange({ ...formData, lastName: e.target.value })
					}
					className="border-zinc-300 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100"
					required
				/>
			</div>

			<Button
				type="submit"
				className="mt-6 w-full bg-blue-600 py-2.5 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
				disabled={mutation.isPending}
			>
				Register User
			</Button>
		</form>
	);
};

export default UserInputForm;
