// Global
import React, { useState } from "react";
import '../components/App/app.css';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import BtmLogo from "../assets/HYS-logo-lg.png";

// Local
import EnterEmotion from "../components/EnterEmotion";
import EnterActivity from "../components/EnterActivity";

// Page Content
function Add() {
	// set up emotion states
	const [emotion, setEmotion] = useState("");
	// change view on button click
	const handleButtons = (event) => {
		setEmotion(event.target.value);
	};
	return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
			<div class="container" id="entryDiv"></div>
			
			
			
			
			</div>
		</body>
	)
}

export default Add;
