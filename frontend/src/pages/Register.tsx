import { Button, Card, Form, Input, Label, Link, TextField } from "@heroui/react";

export const Register = () => {
    return (
        <Card className="rounded-3xl gap-4 w-md p-10">
            <Card.Header className="text-center">
                <Card.Title className="text-xl font-extrabold mb-2">Welcome to Quick Survey</Card.Title>
                <Card.Description className="text-sm">Enter then following fields and create surveys!</Card.Description>
            </Card.Header>
            <Card.Content>
                <Form className="flex flex-col gap-4">
                    <TextField type="text" name="name">
                        <Label>Name</Label>
                        <Input
                            variant="secondary"
                            placeholder="John" />
                    </TextField>
                    <TextField type="email" name="email">
                        <Label>Email</Label>
                        <Input
                            variant="secondary"
                            placeholder="john@example.com" />
                    </TextField>
                    <TextField type="password" name="password">
                        <Label>Password</Label>
                        <Input
                            variant="secondary"
                            placeholder="Enter your password" />
                    </TextField>
                    <TextField type="password" name="confirm-password">
                        <Label>Confirm Password</Label>
                        <Input
                            variant="secondary"
                            placeholder="Enter your password" />
                    </TextField>
                    <Button className="text-white rounded-xl" size="lg" fullWidth>Sign Up</Button>
                </Form>
            </Card.Content>
            <Card.Footer className="justify-center">
                <Link className="no-underline hover:underline">
                    Have an account?
                </Link>
            </Card.Footer>
        </Card>
    )
}

