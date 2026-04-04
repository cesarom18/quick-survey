import { createBrowserRouter } from "react-router";

import { HomeLayout } from "./shared/ui/HomeLayout";
import { Home, Auth, MyProfile, MySurveys, SurveyAnswer, SurveyAnalytics, SurveyEdit } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            {
                path: "my-profile", children: [
                    { index: true, Component: MyProfile },
                    {
                        path: "surveys", children: [
                            { index: true, Component: MySurveys },
                            { path: ":surveyId/analytics", Component: SurveyAnalytics },
                            { path: ":surveyId/edit", Component: SurveyEdit },
                        ]
                    },
                ]
            },
            { path: "survey-answer", Component: SurveyAnswer },
        ]
    },
    {
        path: "/auth",
        Component: Auth,
    },
]);