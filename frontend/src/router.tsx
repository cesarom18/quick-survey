import { createBrowserRouter, redirect } from "react-router";

import { AuthLayout } from "./features/auth/components/AuthLayout.tsx";
import { HomeLayout } from "./features/home/components/HomeLayout.tsx";
import { Home, Login, Register } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { index: true, loader: () => redirect("/auth/login") },
            { path: "login", Component: Login },
            { path: "register", Component: Register },
        ],
    },
]);