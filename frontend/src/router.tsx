import { createBrowserRouter } from "react-router";

import { HomeLayout } from "./features/home/components/HomeLayout.tsx";
import { Home, Auth, MyProfile, MySurveys } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            {
                path: "my-profile", children: [
                    { index: true, Component: MyProfile },
                    { path: "surveys", Component: MySurveys }
                ]
            },
        ]
    },
    {
        path: "/auth",
        Component: Auth,
    },
]);