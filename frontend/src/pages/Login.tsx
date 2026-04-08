import {
	Button,
	FieldError,
	Form,
	Link as HeroLink,
	Input,
	Label,
	TextField,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import type { z } from "zod";
import { loginUser } from "../features/auth/schemas";

type FormValues = z.infer<typeof loginUser>;

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver: zodResolver(loginUser) });

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
			<TextField type="email" name="email" isInvalid={!!errors.email}>
				<Label>Email</Label>
				<Input
					variant="secondary"
					placeholder="john@example.com"
					{...register("email")}
				/>
				{errors?.email && <FieldError>{errors.email.message}</FieldError>}
			</TextField>
			<TextField type="password" name="password" isInvalid={!!errors.password}>
				<div className="flex justify-between">
					<Label>Password</Label>
					<HeroLink className="no-underline hover:underline">
						<Link to="">Forgot?</Link>
					</HeroLink>
				</div>
				<Input
					variant="secondary"
					placeholder="Enter your password"
					{...register("password")}
				/>
				{errors?.password && <FieldError>{errors.password.message}</FieldError>}
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
