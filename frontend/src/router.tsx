import { createBrowserRouter } from "react-router";

import { HomeLayout } from "./shared/ui/HomeLayout";
import { Home, Auth, MyProfile, MySurveys, AnswerSurvey } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            {
                path: "my-profile", children: [
                    { index: true, Component: MyProfile },
                    { path: "surveys", Component: MySurveys },
                ]
            },
            { path: "answer-survey", Component: AnswerSurvey },
        ]
    },
    {
        path: "/auth",
        Component: Auth,
    },
]);