// Global
import React, { useState } from "react";
import { Button } from 'reactstrap';
import BtmLogo from "../assets/HYS-logo-lg.png";
// Page Content
function Learn() {
	return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
				<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: '#FFC300', textAlign: 'center' }}>Help Your Spirit!</h2>
					<h2 style={{ color: '#BFE2FF', textAlign: 'center' }}><em>Learn more about how the below factors effect your mood.</em></h2>
					<br />
				</div>

				<div class="container">
					<Button color="primary" size="lg" block href="/learn">Alcohol and Drugs</Button>
					<Button outline color="primary" size="lg" block href="/learn">Diet and Nutrition</Button>
					<Button color="primary" size="lg" block href="/learn">Exercise</Button>
					<Button outline color="primary" size="lg" block href="/learn">Sleep</Button>
				</div>
				<div class="container" style={{ textAlign: "center", alignContent: "center" }}>
					<br /><br />
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

export default Learn;
