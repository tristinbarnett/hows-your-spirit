// Global
import React, { useState } from "react";
import '../components/App/app.css';
import { Button } from 'react-bootstrap';
import BtmLogo from "../assets/HYS-logo-lg.png";

// Local
import EnterEmotion from "../components/EnterEmotion";
import EnterActivity from "../components/EnterActivity";

// Page Content
function Add() {
	return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
				<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: '#FFC300', textAlign: 'center' }}>___ % of Today</h2>
					<br />
				</div>
				<div class="container" style={{ paddingBottom: "15px" }}>
					<span><h3 style={{ color: '#007bff' }}>Mood:</h3></span>
					<i class="fas fa-frown fa-3x" style={{ color: '#FFC300' }}></i>
					<strong style={{ color: '#FFC300' }}>   ------------------ || ------------------   </strong>
					<i class="fas fa-grin-alt fa-3x" style={{ color: '#FFC300' }}></i>
					<br /><br />

					<span><h3 style={{ color: '#007bff' }}>Energy:</h3></span>
					<i class="fas fa-bed fa-2x" style={{ color: '#FFC300' }}></i>
					<strong style={{ color: '#FFC300' }}>  ------------------- || -------------------  </strong>
					<i class="fas fa-running fa-3x" style={{ color: '#FFC300' }}></i>
					<br /><br />
				</div>

				<div class="container">

					<h1 style={{ color: '#BFE2FF', textAlign: 'center' }}>
						<em>Content</em>
					</h1>

					<br />
				</div>
				<div class="container">
					<Button color="primary" size="lg" block href="/add">Submit</Button>

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

export default Add;
