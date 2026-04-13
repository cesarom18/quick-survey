import { Route, Routes } from "react-router";
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
} from "../pages";
import { AuthLayout } from "../shared/ui/AuthLayout.tsx";
import { HomeLayout } from "../shared/ui/HomeLayout.tsx";

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<HomeLayout />}>
				<Route index element={<Home />} />
				<Route path="my-profile">
					<Route index element={<MyProfile />} />
					<Route path="surveys">
						<Route index element={<MySurveys />} />
						<Route path="create" element={<SurveyCreate />} />
						<Route path=":surveyId/edit" element={<SurveyEdit />} />
						<Route path=":surveyId/analytics" element={<SurveyAnalytics />} />
					</Route>
				</Route>
				<Route path="survey-answer" element={<SurveyAnswer />} />
			</Route>
			<Route path="auth" element={<AuthLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};
