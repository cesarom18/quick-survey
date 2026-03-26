import { Button, Card, Form, Link, Input, Label, TextField } from "@heroui/react";

export const Login = () => {
    return (
        <Card className="gap-8 w-md p-10">
            <Card.Header className="text-center">
                <Card.Title className="text-xl font-extrabold mb-2">Welcome to Quick Survey</Card.Title>
                <Card.Description className="text-sm">Enter your credentials to access your profile</Card.Description>
            </Card.Header>
            <Card.Content>
                <Form className="flex flex-col gap-4">
                    <TextField type="email" name="email">
                        <Label>Email</Label>
                        <Input
                            variant="secondary"
                            placeholder="john@example.com" />
                    </TextField>
                    <TextField type="password" name="password">
                        <div className="flex justify-between">
                            <Label>Password</Label>
                            <Link className="no-underline hover:underline">
                                Forgot?
                            </Link>
                        </div>
                        <Input
                            variant="secondary"
                            placeholder="Enter your password" />
                    </TextField>
                    <Button className="text-white rounded-xl" size="lg" fullWidth>Sign In</Button>
                </Form>
            </Card.Content>
            <Card.Footer className="justify-center">
                <Link className="no-underline hover:underline">
                    Don't have an account?
                </Link>
            </Card.Footer>
        </Card>
    )
}