import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
	name: "",
	email: "",
	picture: "",
	isLoggedIn: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		onLogin: (state, action) => {
			const user = jwtDecode(action.payload);
			state.name = user.name;
			state.email = user.email;
			state.picture = user.picture;
			state.isLoggedIn = true;
		},
		onLogout: state => {
			state.name = "";
			state.email = "";
			state.picture = "";
			state.isLoggedIn = false;
		},
	},
});

export const { onLogin, onLogout } = userSlice.actions;

export default userSlice.reducer;
