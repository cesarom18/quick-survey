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
import { loginUser } from "../features/auth/schemas";
import { ENDPOINTS } from "../shared/constanst";
import { useFetch } from "../shared/hooks/useFetch";

type FormValues = z.infer<typeof loginUser>;

export const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver: zodResolver(loginUser) });
	const { loading, execute } = useFetch();

	const onSubmit = async (data: FormValues) => {
		try {
			await execute(ENDPOINTS.AUTH.LOGIN, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
				body: JSON.stringify(data),
			});
			toast.success("Successfully login user");
			navigate("/auth/login");
		} catch (err) {
			toast.danger("An error occurred while login user");
		}
	};

	return (
		<Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
				{errors?.email && <FieldError>{errors.email.message}</FieldError>}
			</TextField>
			<TextField
				type="password"
				name="password"
				isInvalid={!!errors.password}
				isDisabled={loading}
			>
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
				isPending={loading}
				fullWidth
			>
				{loading ? (
					<>
						Loading <Spinner color="current" />
					</>
				) : (
					<>Sign In</>
				)}
			</Button>
			<div className="text-center">
				<HeroLink className="no-underline hover:underline">
					<Link to="/auth/register">Don't have an account?</Link>
				</HeroLink>
			</div>
		</Form>
	);
};
