// Global
import React, { useState } from "react";
import './pageStyle.css';
import { Button, ButtonGroup } from 'reactstrap';
import BtmLogo from "../assets/HYS-logo-lg.png";
import Graph from "../assets/graph.png";
// Local
import ViewJournal from "../components/ViewJournal";
import ViewTime from "../components/ViewTime";
import ViewActivity from "../components/ViewActivity";

// Page Content
function Review() {
	return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
				<div class="flexbox-container">
					<ButtonGroup>
						<Button color="primary" size="lg" href="/review">Time</Button>
						<Button outline color="primary" size="lg" href="/review">Factors</Button>
					</ButtonGroup>
					<br />
				</div>
				<div class="image-container" style={{ textAlign: "center", alignContent: "center" }}>

					<img
						alt="logo"
						src={Graph}
						width="350"
						className="d-inline-block mr-2"
					/>
				</div>
				<br />
				<div class="container" style={{ paddingBottom: "15px" }}>
					<span><h3 style={{ color: '#007bff' }}>Mood:</h3></span>
					<h2 style={{ color: '#FFC300' }}>Is trending: UP!</h2>
					<br />

					<span><h3 style={{ color: '#007bff' }}>Energy:</h3></span>
					<h2 style={{ color: '#BFE2FF' }}>Is trending: DOWN.</h2>


				</div>


				<div class="container" style={{ textAlign: "center", alignContent: "center" }}>
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

export default Review;
