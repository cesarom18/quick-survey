import { Button, Form, Input, Label, Link, TextField } from "@heroui/react";

export const Login = () => {
	return (
		<Form className="flex flex-col gap-4">
			<TextField type="email" name="email">
				<Label>Email</Label>
				<Input variant="secondary" placeholder="john@example.com" />
			</TextField>
			<TextField type="password" name="password">
				<div className="flex justify-between">
					<Label>Password</Label>
					<Link className="no-underline hover:underline">Forgot?</Link>
				</div>
				<Input variant="secondary" placeholder="Enter your password" />
			</TextField>
			<Button className="text-white rounded-xl" size="lg" fullWidth>
				Sign In
			</Button>
		</Form>
	);
};
