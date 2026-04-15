import {
	Button,
	Form,
	Link as HeroLink,
	Input,
	Label,
	TextField,
} from "@heroui/react";
import { Link } from "react-router";
import type { z } from "zod";
import { registerUser } from "../features/auth/schemas.ts";
import type { User } from "../features/auth/types.ts";
import { ENDPOINTS } from "../shared/constanst.ts";

export const Register = () => {
	return (
		<Form className="flex flex-col gap-4">
			<TextField type="text" name="name">
				<Label>Name</Label>
				<Input variant="secondary" placeholder="John" />
			</TextField>
			<TextField type="email" name="email">
				<Label>Email</Label>
				<Input variant="secondary" placeholder="john@example.com" />
			</TextField>
			<TextField type="password" name="password">
				<Label>Password</Label>
				<Input variant="secondary" placeholder="Enter your password" />
			</TextField>
			<TextField type="password" name="confirm_password">
				<Label>Confirm Password</Label>
				<Input variant="secondary" placeholder="Enter your password" />
			</TextField>
			<Button
				className="text-white rounded-xl"
				type="submit"
				size="lg"
				fullWidth
			>
				Sign Up
			</Button>
			<div className="text-center">
				<HeroLink className="no-underline hover:underline">
					<Link to="/auth/login">Already have an account?</Link>
				</HeroLink>
			</div>
		</Form>
	);
};
