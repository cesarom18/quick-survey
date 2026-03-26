import { Card, Tabs } from "@heroui/react";
import { FileText } from "lucide-react";
import { LoginForm } from "../features/auth/components/LoginForm";
import { RegisterForm } from "../features/auth/components/RegisterForm";

export const Auth = () => {
    return (
        <main className="flex flex-col justify-center items-center h-full ">
            <div className="bg-foreground rounded-2xl p-3 mb-8">
                <FileText className="text-white" />
            </div>
            <div className="text-center mb-8">
                <h1 className="text-2xl font-extrabold">QUICK SURVEY</h1>
                <div className="text-sm text-muted">FAST AND SIMPLE</div>
            </div>
            <Card className="gap-8 w-md p-10">
                <Card.Header className="text-center">
                    <Card.Title className="text-xl font-extrabold mb-2">Welcome to Quick Survey</Card.Title>
                    <Card.Description className="text-sm">Enter your credentials to access your profile</Card.Description>
                </Card.Header>
                <Card.Content>
                    <Tabs className="w-full" defaultSelectedKey="login">
                        <Tabs.ListContainer>
                            <Tabs.List aria-label="Options" className="rounded-xl">
                                <Tabs.Tab id="login">
                                    Login
                                    <Tabs.Indicator className="rounded-lg" />
                                </Tabs.Tab>
                                <Tabs.Tab id="register">
                                    Register
                                    <Tabs.Indicator className="rounded-lg" />
                                </Tabs.Tab>
                            </Tabs.List>
                        </Tabs.ListContainer>
                        <Tabs.Panel className="pt-4" id="login">
                            <LoginForm />
                        </Tabs.Panel>
                        <Tabs.Panel className="pt-4" id="register">
                            <RegisterForm />
                        </Tabs.Panel>
                    </Tabs>
                </Card.Content>
            </Card>
        </main>
    );
};