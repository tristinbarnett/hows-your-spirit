// Global
import React, { useState } from "react";
import '../components/App/app.css';
import { Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import BtmLogo from "../assets/HYS-logo-lg.png";
import BarGraph from "../assets/stacked-bar.png";
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
						<Button variant="primary" size="lg" href="/review">Journal</Button>
						<Button variant="outline-primary" size="lg" href="/review">Time</Button>
						<Button variant="primary" size="lg" href="/review">Activity</Button>
					</ButtonGroup>
					<br />
				</div>
				<div class="container" id="componentDiv"></div>
				
				
				
			</div>
		</body>
	)
}

export default Review;
