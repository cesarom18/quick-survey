import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./assets/css/styles.css";
import { Toast } from "@heroui/react";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Toast.Provider placement="top end"/>
		<RouterProvider router={router} />
	</StrictMode>,
);
