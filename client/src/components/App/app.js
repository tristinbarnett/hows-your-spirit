// Global
import React from "react";
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
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={["/", "/hows-your-spirit"]}>
					<Login />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/add">
					<Add />
				</Route>
				<Route path="/review">
					<Review />
				</Route>
				<Route path="/learn">
					<Learn />
				</Route>
				<Route>
					<Oops />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
