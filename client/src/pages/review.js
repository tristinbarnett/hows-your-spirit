// Global
import React, { useState, useEffect } from "react";
import "../components/App/app.css";
import { Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import BtmLogo from "../assets/HYS-logo-lg.png";
import BarGraph from "../assets/stacked-bar.png";
// Local
import EmotionMap from "../utils/EmotionMap";
import ViewJournal from "../components/ViewJournal";
import ViewTime from "../components/ViewTime";
import ViewActivity from "../components/ViewActivity";

//TEMPORARY DATA (AWAITING BACKEND)
const dayOne = {
	date: "June 10, 2020",
	emotions: [{ x: -1, y: 1, emotion: "annoyed", weight: 4 }],
	factors: [
		{ activity: "eat healthy meals", state: true },
		{ activity: "exercise at least 30 minutes", state: false },
		{ activity: "get at least 8 hours of sleep", state: false },
		{ activity: "drink alcohol", state: false },
	],
};

const dayTwo = {
	date: "June 11, 2020",
	emotions: [{ x: -1, y: -1, emotion: "sad", weight: 4 }],
	factors: [
		{ activity: "eat healthy meals", state: false },
		{ activity: "exercise at least 30 minutes", state: true },
		{ activity: "get at least 8 hours of sleep", state: false },
		{ activity: "drink alcohol", state: false },
	],
};

const dayThree = {
	date: "June 12, 2020",
	emotions: [{ x: 1, y: 1, emotion: "happy", weight: 4 }],

	factors: [
		{ activity: "eat healthy meals", state: false },
		{ activity: "exercise at least 30 minutes", state: false },
		{ activity: "get at least 8 hours of sleep", state: true },
		{ activity: "drink alcohol", state: false },
	],
};

const dayFour = {
	date: "June 13, 2020",
	emotions: [{ x: 2, y: 2, emotion: "excited", weight: 4 }],
	factors: [
		{ activity: "eat healthy meals", state: false },
		{ activity: "exercise at least 30 minutes", state: false },
		{ activity: "get at least 8 hours of sleep", state: false },
		{ activity: "drink alcohol", state: true },
	],
};

// Page Content
function Review() {
	// data to be reviewed
	const [data, setData] = useState([]);
	// type of view on page
	const [view, setView] = useState("time");

	// get data
	useEffect(() => {
		// API.getEntries("thisweek").then((res) => {
		// const entries = res;
		// PLACEHOLDER FOR GET ENTRIES FROM DB
		const entries = [dayOne, dayTwo, dayThree, dayFour];
		setData(entries);
		// }).catch((err) => {
		// 	console.log("error: ", err);
		// });
	}, []);

	// change view on button click
	const handleButtons = (event) => {
		setView(event.target.value);
	};

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<div class="flexbox-container">
					<ButtonGroup>
						<Button variant="primary" size="lg" value="journal" onClick={handleButtons}>
							Journal
						</Button>
						<Button variant="outline-primary" size="lg" value="time" onClick={handleButtons}>
							Time
						</Button>
						<Button variant="primary" size="lg" value="activity" onClick={handleButtons}>
							Activity
						</Button>
					</ButtonGroup>
					<br />
				</div>
				<div class="container" id="componentDiv">
					{(() => {
						switch (view) {
							case "journal":
								return (
									<div>
										<ViewJournal entries={data} />
									</div>
								);
							case "time":
								return (
									<div>
										<ViewTime entries={data} />
									</div>
								);
							case "activity":
								return (
									<div>
										<ViewActivity entries={data} />
									</div>
								);
							default:
								return <div>oops!</div>;
						}
					})()}
				</div>
			</div>
		</body>
	);
}

export default Review;
