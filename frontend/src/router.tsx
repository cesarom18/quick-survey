import { createBrowserRouter, redirect } from "react-router";

import { AuthLayout } from "./features/auth/components/AuthLayout.tsx";
import { Login, Register } from "./pages";

export const router = createBrowserRouter([
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
