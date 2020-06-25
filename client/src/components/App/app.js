// Global
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Local
import API from "../../utils/API";
import Navbar from "../Navbar";
import Login from "../../pages/login";
import Home from "../../pages/home";
import Add from "../../pages/add";
import Review from "../../pages/review";
import Learn from "../../pages/learn";
import Oops from "../../pages/oops";

// Export
function App() {
	// current user
	const [user, setUser] = useState(null);
	useEffect(() => {
		let localUser = sessionStorage.getItem("user");
		console.log("user from storage: ", localUser);
		if (localUser) {
			setUser(JSON.parse(localUser));
		}
	}, []);

	// handle user login
	const handleUser = (userData) => {
		let currentUser = userData.data;
		console.log("user from login: ", userData.data);
		setUser(currentUser);
		sessionStorage.setItem("user", JSON.stringify(currentUser));
	};

	// handle user logout
	const handleLogout = () => {
		setUser(null);
		sessionStorage.clear();
	};

	// current user entry data
	const [userEntries, setUserEntries] = useState(null);
	useEffect(() => {
		if (user) {
			console.log("if user: ", user);
			getEntries();
		}
	}, [user]);

	// get entries from database
	const getEntries = () => {
		API.getEntries(user)
			.then((res) => {
				console.log("res from getEntries: ", res.data);
				setUserEntries(res.data);
			})
			.catch((err) => {
				console.log("error: ", err);
			});
	};

	// submit entry to database
	const submitEntry = (entryData) => {
		API.createEntry(user, entryData)
			.then((res) => {
				console.log("res from submitEntry: ", res);
				getEntries();
			})
			.catch((err) => {
				console.log("error: ", err);
			});
	};

	return (
		<Router>
			{!user ? (
				// <>
				// 	<Redirect to="/login" />
				// 	<Route path="/login" render={(props) => <Login {...props} authUser={handleUser} />} />
				// </>
				<Route path="/">
					<Login authUser={handleUser} />
				</Route>
			) : (
				<>
					<Navbar logoutUser={handleLogout} />
					<Switch>
						<Route exact path={["/", "/hows-your-spirit", "/home"]} render={() => <Home entries={userEntries} />} />
						{/* <Route exact path={["/", "/hows-your-spirit", "/home"]}>
							<Home entries={userEntries} />
						</Route> */}
						<Route path="/add" render={() => <Add submitEntry={submitEntry} />} />
						{/* <Route path="/add">
							<Add submitEntry={submitEntry} />
						</Route> */}
						<Route path="/review" render={() => <Review entries={userEntries} />} />
						{/* <Route path="/review">
							<Review entries={userEntries} />
						</Route> */}
						<Route path="/learn" render={() => <Learn />} />
						{/* <Route path="/learn">
							<Learn />
						</Route> */}
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
