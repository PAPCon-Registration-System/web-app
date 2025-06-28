"use client";

import type React from "react";

import { useState } from "react";

import { Input } from "@/features/shared/components/base/input";
import { Label } from "@/features/shared/components/base/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/features/shared/components/base/card";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/features/shared/components/base/button";
import EmailSentCard from "@/features/auth/components/email-sent-card";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		setIsLoading(true);

		// mock API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsLoading(false);
		setIsEmailSent(true);
	};

	if (isEmailSent) {
		return <EmailSentCard />;
	}

	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<Card className="w-full max-w-md ">
				<CardHeader className="text-center">
					<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
						<Mail className="h-6 w-6 text-white" />
					</div>
					<CardTitle className="text-white">Welcome back</CardTitle>
					<CardDescription className="text-gray-400">
						Enter your email to receive a magic link
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email" className="text-gray-300">
								Email address
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<Button
							type="submit"
							className="w-full bg-blue-600 text-white hover:bg-blue-700"
							disabled={isLoading || !email}
						>
							{isLoading ? (
								<div className="flex items-center space-x-2">
									<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
									<span>Sending link...</span>
								</div>
							) : (
								<div className="flex items-center space-x-2">
									<span>Send Link</span>
									<ArrowRight className="h-4 w-4" />
								</div>
							)}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
