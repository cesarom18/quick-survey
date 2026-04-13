import { Toast } from "@heroui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./assets/css/styles.css";
import { AppRouter } from "./router/AppRouter";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Toast.Provider placement="top end" />
			<AppRouter />
		</BrowserRouter>
	</StrictMode>,
);
