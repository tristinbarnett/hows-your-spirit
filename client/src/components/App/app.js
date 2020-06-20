// Global
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Local
import Navbar from "../Navbar";
import Login from "../../pages/login";
import Home from "../../pages/home";
import Add from "../../pages/add";
import Review from "../../pages/review";
import Learn from "../../pages/learn";
import Oops from "../../pages/oops";

// Export
function App() {
	// set page with no user
	const [user, setUser] = useState(null);

	// check local storage for user
	useEffect(() => {
		let localUser = localStorage.getItem("user");
		if (localUser) {
			setUser(JSON.parse(localUser));
		}
	}, []);

	// handle user login
	const handleUser = (userData) => {
		let currentUser = userData.data[0];
		console.log("currentuser: ", currentUser);
		setUser(currentUser);
		localStorage.setItem("user", JSON.stringify(currentUser));
	};

	// handle user logout
	const handleLogout = () => {
		setUser(null);
		localStorage.clear();
	};

	console.log("user", user);

	return (
		<Router>
			{!user ? (
				<Route path="/">
					<Login authUser={handleUser} />
				</Route>
			) : (
				<>
					<Navbar logoutUser={handleLogout} />
					<Switch>
						<Route exact path={["/", "/hows-your-spirit", "/home"]}>
							<Home user={user} />
						</Route>
						<Route path="/add">
							<Add user={user} />
						</Route>
						<Route path="/review">
							<Review user={user} />
						</Route>
						<Route path="/learn">
							<Learn />
						</Route>
						<Route>
							<Oops />
						</Route>
					</Switch>
				</>
			)}
		</Router>
	);
}

export default App;
