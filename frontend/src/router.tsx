import { createBrowserRouter } from "react-router";

import { HomeLayout } from "./features/home/components/HomeLayout.tsx";
import { Home, Auth, MyProfile } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            { path: "my-profile", Component: MyProfile }
        ]
    },
    {
        path: "/auth",
        Component: Auth,
    },
]);