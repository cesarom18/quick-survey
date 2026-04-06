import { Card } from "@heroui/react";
import { FileText } from "lucide-react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
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
					<Card.Title className="text-xl font-extrabold mb-2">
						Welcome to Quick Survey
					</Card.Title>
					<Card.Description className="text-sm">
						Enter your credentials to access your profile
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<Outlet />
				</Card.Content>
			</Card>
		</main>
	);
};
