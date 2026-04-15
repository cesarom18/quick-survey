import {
	Button,
	FieldError,
	Link as HeroLink,
	Input,
	Label,
	Spinner,
	TextField,
} from "@heroui/react";
import { Form, Link, useActionData, useNavigation } from "react-router";
import { registerAction } from "../features/auth/actions";

export const Register = () => {
	const actionData = useActionData<typeof registerAction>();
	const navigation = useNavigation();
	const loading = navigation.state === "submitting";

	return (
		<Form className="flex flex-col gap-4" method="POST" noValidate>
			<TextField
				type="text"
				name="name"
				isInvalid={!!actionData?.zod_errors?.name}
				isDisabled={loading}
			>
				<Label>Name</Label>
				<Input variant="secondary" placeholder="John" />
				{actionData?.zod_errors?.name && (
					<FieldError>{actionData.zod_errors.name[0]}</FieldError>
				)}
			</TextField>
			<TextField
				type="email"
				name="email"
				isInvalid={!!actionData?.zod_errors?.email}
				isDisabled={loading}
			>
				<Label>Email</Label>
				<Input variant="secondary" placeholder="john@example.com" />
				{actionData?.zod_errors?.email && (
					<FieldError>{actionData.zod_errors.email[0]}</FieldError>
				)}
			</TextField>
			<TextField
				type="password"
				name="password"
				isInvalid={!!actionData?.zod_errors?.password}
				isDisabled={loading}
			>
				<Label>Password</Label>
				<Input variant="secondary" placeholder="Enter your password" />
				{actionData?.zod_errors?.password && (
					<FieldError>{actionData.zod_errors.password[0]}</FieldError>
				)}
			</TextField>
			<TextField
				type="password"
				name="confirm_password"
				isInvalid={!!actionData?.zod_errors?.confirm_password}
				isDisabled={loading}
			>
				<Label>Confirm Password</Label>
				<Input variant="secondary" placeholder="Enter your password" />
				{actionData?.zod_errors?.confirm_password && (
					<FieldError>{actionData.zod_errors.confirm_password[0]}</FieldError>
				)}
			</TextField>
			<Button
				className="text-white rounded-xl"
				type="submit"
				size="lg"
				isPending={loading}
				fullWidth
			>
				{loading && <Spinner color="current" />} Sign Up
			</Button>
			<div className="text-center">
				<HeroLink className="no-underline hover:underline">
					<Link to="/auth/login">Already have an account?</Link>
				</HeroLink>
			</div>
		</Form>
	);
};
