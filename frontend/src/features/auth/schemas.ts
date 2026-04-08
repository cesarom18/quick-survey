import { z } from "zod";

export const registerUser = z
	.object({
		name: z
			.string()
			.min(2, "Name must be more than 2 characters")
			.max(100, "Name must be less than 100 characters"),
		email: z.email("Invalid email"),
		password: z
			.string()
			.min(8, "Pasword must be more than 8 characters")
			.max(64, "Password must be less than 64 characters")
			.regex(/^[a-zA-Z0-9]+$/, "Password must be alphanumeric"),
		confirm_password: z.string(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ["confirm_password"],
	});
