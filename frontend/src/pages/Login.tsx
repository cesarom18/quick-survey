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
import type { loginUser } from "../features/auth/schemas";
import { ENDPOINTS } from "../shared/constanst";


export const Login = () => {
	return (
		<Form className="flex flex-col gap-4" >
			<TextField type="email" name="email">
				<Label>Email</Label>
				<Input variant="secondary" placeholder="john@example.com" />
			</TextField>
			<TextField type="password" name="password">
				<div className="flex justify-between">
					<Label>Password</Label>
					<HeroLink className="no-underline hover:underline">
						<Link to="">Forgot?</Link>
					</HeroLink>
				</div>
				<Input variant="secondary" placeholder="Enter your password" />
			</TextField>
			<Button
				className="text-white rounded-xl"
				type="submit"
				size="lg"
				fullWidth
			>
				Sign In
			</Button>
			<div className="text-center">
				<HeroLink className="no-underline hover:underline">
					<Link to="/auth/register">Don't have an account?</Link>
				</HeroLink>
			</div>
		</Form>
	);
};
