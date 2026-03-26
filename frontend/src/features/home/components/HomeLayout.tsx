import { Outlet } from "react-router";

import { Header } from "./Header";

export const HomeLayout = () => {
    return (
        <div className="h-full">
            <Header />
            <Outlet />
        </div>
    )
}