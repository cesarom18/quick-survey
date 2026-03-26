import { Outlet } from "react-router";

import { Header } from "./Header";

export const HomeLayout = () => {
    return (
        <div className="bg-background h-full">
            <Header />
            <Outlet />
        </div>
    )
}