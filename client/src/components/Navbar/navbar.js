// Global
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Local
import Logo from "../../assets/HYS-logo-sm.png";

// Export function
function NavMenu() {
	// state for home page
	const [ isHome, setIsHome ] = useState(false);
	// get current page
	let location = useLocation();

	// changes state if current page is home page
	useEffect(() => {
		const path = location.pathname;
		console.log("path: ", location.pathname);
		if (path === "/" || path === "/home" || path === "/hows-your-spirit") {
			setIsHome(true);
		}
	}, []);

	return (
		<Navbar bg="dark" variant="dark" className="mt-2 mb-5 pt-4">
			<div className="container">
				<Navbar.Brand href="/home" className="mr-sm-4">
					<img
						alt="logo"
						src={Logo}
						width="100"
						className="d-inline-block mr-2"
					/>

				</Navbar.Brand>
				{isHome ? (
					<Nav className="ml-auto">
						<Nav.Link href="/">Logout</Nav.Link>
					</Nav>
				) : (
						<Nav className="ml-auto">
							<Nav.Link href="/add">New Entry</Nav.Link>
							<Nav.Link href="/review">Review</Nav.Link>
							<Nav.Link href="/learn">Learn</Nav.Link>
							<Nav.Link href="/">Logout</Nav.Link>
						</Nav>
					)}
			</div>
		</Navbar>
	);
}

export default NavMenu;
