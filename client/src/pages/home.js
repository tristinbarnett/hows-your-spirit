// Global
import React, { useState } from "react";
import './pageStyle.css';
import { Button } from 'reactstrap';
import BtmLogo from "../assets/HYS-logo-lg.png";

// Page Content
function Home() {
	return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
				<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: '#FFC300', textAlign: 'center' }}><em>Hi! How's Your Spirit today?</em></h2>
					<br />
					<span><h3 style={{ color: '#007bff' }}>This Week:</h3></span>
				</div>
				<div class="container">

					<h1 style={{ color: '#FFC300', textAlign: 'center' }}>
						60% Positive
			</h1>
					<h1 style={{ color: '#FFC300', textAlign: 'center' }}>
						40% Energy
			</h1>
					<br />
				</div>
				<div class="container">
					<Button color="primary" size="lg" block href="/add">New entry</Button>
					<Button outline color="primary" size="lg" block href="/review">Review past entries</Button>
					<Button color="primary" size="lg" block href="/learn">Learn More</Button>
				</div>
				<div class="container" style={{ textAlign: "center", alignContent: "center" }}>
					<br />
					<img
						alt="logo"
						src={BtmLogo}
						width="200"
						className="d-inline-block mr-2"
					/>
				</div>
				<br />
			</div>
		</body>
	)
}

export default Home;
