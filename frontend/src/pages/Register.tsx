import { Button, Form, Input, Label, TextField } from "@heroui/react";

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
			<TextField type="password" name="confirm-password">
				<Label>Confirm Password</Label>
				<Input variant="secondary" placeholder="Enter your password" />
			</TextField>
			<Button className="text-white rounded-xl" size="lg" fullWidth>
				Sign Up
			</Button>
		</Form>
	);
};
