import { createBrowserRouter, redirect } from "react-router";

import { HomeLayout } from "./features/home/components/HomeLayout.tsx";
import { Home, Auth } from "./pages";

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
        Component: Auth,
    },
]);