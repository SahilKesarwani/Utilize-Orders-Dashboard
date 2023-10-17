import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<Router>
			<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID}>
				<App />
			</GoogleOAuthProvider>
		</Router>
	</Provider>
);
