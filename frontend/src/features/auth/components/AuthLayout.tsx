import { Outlet } from "react-router";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

export const AuthLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-neutral min-h-screen ">
            <div className="bg-primary rounded-xl p-2.5 mb-6">
                <DocumentTextIcon className="text-white size-8" />
            </div>
            <div className="text-center mb-6">
                <h1 className="text-primary text-2xl font-bold">QUICK SURVEY</h1>
                <div className="text-sm text-gray-500 font-bold">FAST AND SIMPLE</div>
            </div>
            <Outlet/>
        </div>
    )
};
