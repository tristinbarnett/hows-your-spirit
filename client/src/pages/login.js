// Global
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";

// Local
import API from "../utils/API";
import User from "../components/User";

// Page Content
function Login({ authUser }) {
	// start page with login form
	const [formName, setFormName] = useState("login");
	// start page with no login error
	const [loginError, setLoginError] = useState(false);

	// change from login form to signup form
	const handleFormChange = (eventKey) => {
		console.log("eventKey: ", eventKey);
		setFormName(eventKey);
	};

	// form submission
	const handleSubmitUser = (values) => {
		console.log("user submitted: ", values);
		console.log("form name: ", formName);
		formName === "login" ? handleLogin(values) : handleSignup(values);
	};

	// user login
	const handleLogin = (userData) => {
		console.log("user data: ", userData);
		API.login(userData)
			.then((res) => {
				console.log("logged in: ", res);
				authUser(res);
			})
			.catch((err) => {
				console.log("error: ", err);
				setLoginError(true);
			});
	};

	// user signup
	const handleSignup = (userData) => {
		console.log("user data: ", userData);
		API.signup(userData)
			.then((res) => {
				console.log("signed up: ", res);
				authUser(res);
			})
			.catch((err) => console.log("error: ", err));
	};

	return (
		<div>
			{formName === "login" ? (
				<div>
					<h2>Login to your account: </h2>
					<p>
						If you do not yet have an account:
						<Nav.Link eventKey="signup" onSelect={handleFormChange}>
							signup
						</Nav.Link>
					</p>
					{loginError ? (
						<Alert>
							Your information could not be verified. Please try again.
						</Alert>
					) : (
						<></>
					)}
				</div>
			) : (
				<div>
					<h2>Sign up for an account: </h2>
					<p>
						If you already have an account:
						<Nav.Link eventKey="login" onSelect={handleFormChange}>
							login
						</Nav.Link>
					</p>
				</div>
			)}
			<User name={formName} submitUser={handleSubmitUser} />
		</div>
	);
}
export default Login;
