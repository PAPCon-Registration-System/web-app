"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/features/shared/components/base/button";
import { Input } from "@/features/shared/components/base/input";
import { Label } from "@/features/shared/components/base/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import type { UserCreateEntity } from "@/types/entities/user.entity";
import { useRegisterUserManually } from "../data/useRegisterUserManually.mutation";

type FormData = UserCreateEntity & {
	confirmPassword: string;
};

const initialFormData: FormData = {
	email: "",
	firstName: "",
	middleName: "",
	lastName: "",
	password: "",
	confirmPassword: "",
};

const UserInputForm = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
		useState(false);
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const mutation = useRegisterUserManually();

	const handleInputChange = (newData: FormData) => {
		setFormData(newData);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			// TODO: Integrate into toast
			alert("Passwords do not match");
			return;
		}

		mutation.mutate(formData, {
			onSuccess: () => {
				setFormData(initialFormData);
				alert("User registered successfully");
			},
			onError: (error) => {
				alert(error.message);
			},
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email" className="font-medium text-zinc-300">
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
					className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20"
					required
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="firstName" className="font-medium text-zinc-300">
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
						className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20"
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="middleName" className="font-medium text-zinc-300">
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
						className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20"
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="lastName" className="font-medium text-zinc-300">
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
					className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20"
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="password" className="font-medium text-zinc-300">
					Password
				</Label>
				<div className="flex items-center space-x-2">
					<Input
						id="password"
						type={isPasswordVisible ? "text" : "password"}
						placeholder="Create a password"
						value={formData.password}
						onChange={(e) =>
							handleInputChange({ ...formData, password: e.target.value })
						}
						className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20"
						required
					/>
					<Button
						variant="outline"
						size="icon"
						type="button"
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
					>
						{isPasswordVisible ? (
							<EyeIcon className="h-4 w-4" />
						) : (
							<EyeOffIcon className="h-4 w-4" />
						)}
					</Button>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="confirmPassword" className="font-medium text-zinc-300">
					Confirm Password
				</Label>
				<div className="flex items-center space-x-2">
					<Input
						id="confirmPassword"
						type={isConfirmPasswordVisible ? "text" : "password"}
						placeholder="Confirm password"
						value={formData.confirmPassword}
						onChange={(e) =>
							handleInputChange({
								...formData,
								confirmPassword: e.target.value,
							})
						}
						className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500/20"
						required
					/>
					<Button
						variant="outline"
						size="icon"
						type="button"
						onClick={() =>
							setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
						}
					>
						{isConfirmPasswordVisible ? (
							<EyeIcon className="h-4 w-4" />
						) : (
							<EyeOffIcon className="h-4 w-4" />
						)}
					</Button>
				</div>
			</div>

			<Button
				type="submit"
				className="mt-6 w-full bg-blue-600 py-2.5 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
			>
				Register User
			</Button>
		</form>
	);
};

export default UserInputForm;
