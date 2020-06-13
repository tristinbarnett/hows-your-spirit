// Global
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Local
import Logo from "../../assets/Books-icon.png";

// Export function
function NavMenu() {
	return (
		<Navbar bg="dark" variant="dark" className="mt-2 mb-5 pt-4">
			<div className="container">
				<Navbar.Brand href="/home" className="mr-sm-4">
					<img
						alt="logo"
						src={Logo}
						width="30"
						className="d-inline-block mr-2"
					/>
					HYS?
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/add">Add Entry</Nav.Link>
					<Nav.Link href="/review">Review</Nav.Link>
					<Nav.Link href="/learn">Learn</Nav.Link>
					{/* Do we need logout? What is our route? */}
					<Nav.Link href="/">Logout</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}

export default NavMenu;
