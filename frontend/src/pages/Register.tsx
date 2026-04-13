import {
	Button,
	FieldError,
	Form,
	Link as HeroLink,
	Input,
	Label,
	Spinner,
	TextField,
	toast,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import type { z } from "zod";
import { registerUser } from "../features/auth/schemas.ts";
import type { User } from "../features/auth/types.ts";
import { ENDPOINTS } from "../shared/constanst.ts";
import { useFetch } from "../shared/hooks/useFetch.ts";

type FormValues = z.infer<typeof registerUser>;

export const Register = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(registerUser),
	});
	const { loading, execute } = useFetch<User>();

	const onSubmit = async (data: FormValues) => {
		try {
			await execute(ENDPOINTS.AUTH.REGISTER, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			toast.success("Successfully registered user");
            navigate("/auth/login");
		} catch (err) {
			toast.danger("An error occurred while registering user");
		}
	};

	return (
		<Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
			<TextField
				type="text"
				name="name"
				isInvalid={!!errors.name}
				isDisabled={loading}
			>
				<Label>Name</Label>
				<Input variant="secondary" placeholder="John" {...register("name")} />
				{errors.name && <FieldError>{errors.name.message}</FieldError>}
			</TextField>
			<TextField
				type="email"
				name="email"
				isInvalid={!!errors.email}
				isDisabled={loading}
			>
				<Label>Email</Label>
				<Input
					variant="secondary"
					placeholder="john@example.com"
					{...register("email")}
				/>
				{errors.email && <FieldError>{errors.email.message}</FieldError>}
			</TextField>
			<TextField
				type="password"
				name="password"
				isInvalid={!!errors.password}
				isDisabled={loading}
			>
				<Label>Password</Label>
				<Input
					variant="secondary"
					placeholder="Enter your password"
					{...register("password")}
				/>
				{errors.password && <FieldError>{errors.password.message}</FieldError>}
			</TextField>
			<TextField
				type="password"
				name="confirm_password"
				isInvalid={!!errors.confirm_password}
				isDisabled={loading}
			>
				<Label>Confirm Password</Label>
				<Input
					variant="secondary"
					placeholder="Enter your password"
					{...register("confirm_password")}
				/>
				{errors.confirm_password && (
					<FieldError>{errors.confirm_password.message}</FieldError>
				)}
			</TextField>
			<Button
				className="text-white rounded-xl"
				type="submit"
				size="lg"
				isPending={loading}
				fullWidth
			>
				{loading ? (
					<>
						Loading <Spinner color="current" />
					</>
				) : (
					<>Sign Up</>
				)}
			</Button>
			<div className="text-center">
				<HeroLink className="no-underline hover:underline">
					<Link to="/auth/login">Already have an account?</Link>
				</HeroLink>
			</div>
		</Form>
	);
};
