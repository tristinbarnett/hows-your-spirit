// Global
import React, { useState } from "react";
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
	// set page with no authentication
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	// set page with no user
	const [user, setUser] = useState({});

	const handleUser = (userData) => {
		console.log("currentuser: ", userData);
		setUser(userData);
		setIsAuthenticated(true);
	};

	return (
		<>
			{!isAuthenticated ? (
				<Router>
					<Route path="/">
						<Login authUser={handleUser} />
					</Route>
				</Router>
			) : (
				<Router>
					<Navbar />
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
				</Router>
			)}
		</>
	);
}

export default App;
