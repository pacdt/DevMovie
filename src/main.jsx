import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
		<GlobalStyle/>
	</React.StrictMode>
);
