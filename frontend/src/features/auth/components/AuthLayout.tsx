import { Outlet } from "react-router";
import { FileText } from "lucide-react";

export const AuthLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-background h-full ">
            <div className="bg-foreground rounded-3xl p-2.5 mb-4">
                <FileText color="#fff" />
            </div>
            <div className="text-center mb-6">
                <h1 className="text-primary text-2xl font-extrabold">QUICK SURVEY</h1>
                <div className="text-sm text-gray-500">FAST AND SIMPLE</div>
            </div>
            <Outlet />
        </div>
    )
};
