import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, Login } from "./pages";

const App = () => {
	return (
		<>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
