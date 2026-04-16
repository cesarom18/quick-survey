import { toast } from "@heroui/react";
import { type ActionFunctionArgs, data, redirect } from "react-router";
import { z } from "zod";
import { ENDPOINTS } from "../../shared/constanst";
import type { ActionResponse } from "../../shared/types";
import { registerUser, loginUser } from "./schemas";

export const registerAction = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const validation = registerUser.safeParse(Object.fromEntries(formData));
	if (!validation.success) {
		return data<ActionResponse>(
			{
				success: false,
				zod_errors: z.flattenError(validation.error).fieldErrors,
				message: "zod validation schema error",
			},
			{ status: 400 },
		);
	}
	try {
		const response = await fetch(ENDPOINTS.AUTH.REGISTER, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(validation.data),
		});
		if (!response.ok) {
			throw new Error("An error occured while registering the user");
		}
		toast.success("Successfully registered user");
		return  redirect("/auth/login");
	} catch (error) {
		toast.danger("an error occurred while registering the user");
		return data<ActionResponse>(
			{
				success: false,
				message: "an error occurred while registering the user",
			},
			{ status: 500 },
		);
	}
};

export const loginAction = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const validation = loginUser.safeParse(Object.fromEntries(formData));
	if (!validation.success) {
		return data<ActionResponse>(
			{
				success: false,
				zod_errors: z.flattenError(validation.error).fieldErrors,
				message: "zod validation schema error",
			},
			{ status: 400 },
		);
	}
	try {
		const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(validation.data),
		});
		if (!response.ok) {
			throw new Error("An error occured while login the user");
		}
		toast.success("Successfully login user");
		return  redirect("/");
	} catch (error) {
		toast.danger("an error occurred while login the user");
		return data<ActionResponse>(
			{
				success: false,
				message: "an error occurred while login the user",
			},
			{ status: 500 },
		);
	}
};
