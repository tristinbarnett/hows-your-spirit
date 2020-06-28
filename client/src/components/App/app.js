/** @format */

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

	// handle user login
	const handleUser = (userData) => {
		let currentUser = userData.data;
		setUser(currentUser);
	};

	// handle user logout
	const handleLogout = () => {
		setUser(null);
	};

	// current user entry data
	const [userEntries, setUserEntries] = useState(null);
	useEffect(() => {
		if (user) {
			getEntries();
		}
	}, [user]);

	// get entries from database
	const getEntries = () => {
		API.getEntries(user)
			.then((res) => {
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
				getEntries();
			})
			.catch((err) => {
				console.log("error: ", err);
			});
	};

	return (
		<div className="mobile">
			<Router>
				{!user ? (
					<Route path="/">
						<Redirect to="/home" />
						<Login authUser={handleUser} />
					</Route>
				) : (
					<>
						<Navbar logoutUser={handleLogout} />

						<Switch>
							<Route exact path={["/", "/hows-your-spirit", "/home"]}>
								<Home entries={userEntries} />
							</Route>
							<Route path="/add">
								<Add submitEntry={submitEntry} />
							</Route>
							<Route path="/review">
								<Review entries={userEntries} />
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
		</div>
	);
}

export default App;
