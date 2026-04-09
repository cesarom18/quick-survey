import { createBrowserRouter } from "react-router";

import {
	Home,
	Login,
	MyProfile,
	MySurveys,
	NotFound,
	Register,
	SurveyAnalytics,
	SurveyAnswer,
	SurveyCreate,
	SurveyEdit,
} from "./pages";
import { AuthLayout } from "./shared/ui/AuthLayout.tsx";
import { HomeLayout } from "./shared/ui/HomeLayout.tsx";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: HomeLayout,
		children: [
			{ index: true, Component: Home },
			{
				path: "my-profile",
				children: [
					{ index: true, Component: MyProfile },
					{
						path: "surveys",
						children: [
							{ index: true, Component: MySurveys },
							{ path: "create", Component: SurveyCreate },
							{ path: ":surveyId/analytics", Component: SurveyAnalytics },
							{ path: ":surveyId/edit", Component: SurveyEdit },
						],
					},
				],
			},
			{ path: "survey-answer", Component: SurveyAnswer },
		],
	},
	{
		path: "/auth",
		Component: AuthLayout,
		children: [
			{ path: "register", Component: Register },
			{ path: "login", Component: Login },
		],
	},
	{ path: "/*", Component: NotFound },
]);
