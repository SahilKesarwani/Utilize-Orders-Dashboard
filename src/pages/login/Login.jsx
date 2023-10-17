import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";

import { onLogin } from "../../features/user/userSlice";

import "./login.scss";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);

	const onGoogleLogin = credential => {
		dispatch(onLogin(credential));
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/");
		}
	}, [isLoggedIn, navigate]);

	return (
		<div className="login">
			<h1>Login</h1>
			<GoogleLogin
				onSuccess={credentialResponse => {
					onGoogleLogin(credentialResponse.credential);
				}}
				onError={() => {
					alert("Login Failed");
				}}
			/>
		</div>
	);
};

export default Login;
