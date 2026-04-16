import {
	Button,
	FieldError,
	Link as HeroLink,
	Input,
	Label,
	Spinner,
	TextField,
} from "@heroui/react";
import { useNavigation } from "react-router";
import { Link, useActionData, Form } from "react-router";
import type { loginAction } from "../features/auth/actions";

export const Login = () => {
	const actionData = useActionData<typeof loginAction >();
	const navigation = useNavigation();
	const loading = navigation.state === "submitting";

	return (
		<Form className="flex flex-col gap-4" method="POST" noValidate>
			<TextField type="email" name="email" isInvalid={!!actionData?.zod_errors?.email} isDisabled={loading}>
				<Label>Email</Label>
				<Input variant="secondary" placeholder="john@example.com" />
                {actionData?.zod_errors?.email && <FieldError>{actionData.zod_errors.email[0]}</FieldError>}
			</TextField>
			<TextField type="password" name="password" isInvalid={!!actionData?.zod_errors?.password} isDisabled={loading}>
				<div className="flex justify-between">
					<Label>Password</Label>
					<HeroLink className="no-underline hover:underline">
						<Link to="">Forgot?</Link>
					</HeroLink>
				</div>
				<Input variant="secondary" placeholder="Enter your password" />
                {actionData?.zod_errors?.password && <FieldError>{actionData.zod_errors.password[0]}</FieldError>}
			</TextField>
			<Button
				className="text-white rounded-xl"
				type="submit"
				size="lg"
				isPending={loading}
				fullWidth
			>
				{loading && <Spinner color="current" />} Sign In
			</Button>
			<div className="text-center">
				<HeroLink className="no-underline hover:underline">
					<Link to="/auth/register">Don't have an account?</Link>
				</HeroLink>
			</div>
		</Form>
	);
};
