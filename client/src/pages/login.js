// Global
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import {  Button, ButtonGroup } from "react-bootstrap";

// Local
import API from "../utils/API";
import User from "../components/User";
import Logo from "../assets/HYS-logo-lg.png";
// Page Content
function Login({ authUser }) {
	// start page with login form
	const [formName, setFormName] = useState("");
	// start page with no login error
	const [loginError, setLoginError] = useState("");

	// change view on button click
	const handleButtons = (event) => {
		setFormName(event.target.value);
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
				setLoginError("login");
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
			.catch((err) => {
				console.log("error: ", err);
				setLoginError("signup");
			});
	};

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<br />
				<div class="flexbox-container">
					<ButtonGroup>
						<Button variant="outline-primary" size="lg" value="login" onClick={handleButtons}>
							Login
						</Button>
						<Button variant="outline-primary" size="lg" value="signup" onClick={handleButtons}>
							Signup
						</Button>
					</ButtonGroup>
					<br />
				</div>
				{(() => {
					switch (formName) {
						case "login":
							return (
								<div class="container" style={{ margin: "5px" }}>
									<div class="container" style={{ alignContent: "center", textAlign: "center" }}>
										<br />
										<br />
										<br />
										<br />
										<img src={Logo} alt="How's Your Spirit?" />
									</div>
									<br />
									<h2 style={{ color: "#BFE2FF" }}>Login to your account:</h2>
									<br />
									{loginError === "login" ? <Alert variant="danger">Your information could not be verified. Please try again.</Alert> : <></>}
									<User name={formName} submitUser={handleSubmitUser} />
									<br />
									<br />
									<br />
								</div>
							);
						case "signup":
							return (
								<div class="container" style={{ margin: "5px" }}>
									<div class="container" style={{ alignContent: "center", textAlign: "center" }}>
										<br />
										<br />
										<br />
										<br />
										<img src={Logo} alt="How's Your Spirit?"/>
									</div>
									<br />
									<h2 style={{ color: "#FFC300" }}>Sign up for an account:</h2>
									<br />
									{loginError === "signup" ? <Alert variant="danger">Error. User with this email already exists. Please try logging in.</Alert> : <></>}
									<User name={formName} submitUser={handleSubmitUser} />
									<br />
									<br />
									<br />
								</div>
							);
						default:
							return (
								<div class="container" style={{ margin: "5px" }}>
									<div class="container" style={{ alignContent: "center", textAlign: "center" }}>
										<br />
										<br />
										<br />
										<br />
										<img src={Logo} alt="How's Your Spirit?"/>
									</div>
									<br />
									<div style={{ textAlign: "center", margin: "5px" }}>
										<h2 style={{ color: "#BFE2FF" }}>
											<em>"Hour by hour resolve firmly to do what comes to hand with dignity, and with humanity, independence, and justice."</em>
										</h2>
										<br />
										<h3 style={{ color: "#FFC300" }}>Marcus Aurelius</h3>
									</div>
									<br />
									<br />
									<br />
								</div>
							);
					}
				})()}
			</div>
		</body>
	);
}
export default Login;
