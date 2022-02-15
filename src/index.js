import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/contextProduct";
import { FilterContexProvider } from "./context/filterProduct";

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<FilterContexProvider>
				<Router>
					<App />
				</Router>
			</FilterContexProvider>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
