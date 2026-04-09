import { z } from "zod";

const emailValidation = z.email("Invalid email");
const passwordValidation = z
	.string()
	.trim()
	.min(8, "Pasword must be more than 8 characters")
	.max(64, "Password must be less than 64 characters")
	.regex(/^[a-zA-Z0-9]+$/, "Password must be alphanumeric");

export const registerUser = z
	.object({
		name: z
			.string()
			.trim()
			.min(2, "Name must be more than 2 characters")
			.max(100, "Name must be less than 100 characters"),
		email: emailValidation,
		password: passwordValidation,
		confirm_password: z.string().trim(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ["confirm_password"],
	});

export const loginUser = z.object({
	email: emailValidation,
	password: passwordValidation,
});
