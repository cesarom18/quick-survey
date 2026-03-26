import { Outlet } from "react-router";
import { FileText } from "lucide-react";

export const AuthLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full ">
            <div className="bg-foreground rounded-2xl p-3 mb-8">
                <FileText className="text-white" />
            </div>
            <div className="text-center mb-8">
                <h1 className="text-2xl font-extrabold">QUICK SURVEY</h1>
                <div className="text-sm text-muted">FAST AND SIMPLE</div>
            </div>
            <Outlet />
        </div>
    )
};