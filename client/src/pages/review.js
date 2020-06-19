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
	date: "June 1, 2020",
	emotions: [{ x: -1, y: -1, weight: 4 }],
	factors: {
		exercise: true,
		"get 8 hours of sleep": false,
		"drink alcohol": false,
	},
};
const dayTwo = {
	date: "June 2, 2020",
	emotions: [
		{ x: 2, y: 2, weight: 3 },
		{ x: -1, y: 2, weight: 1 },
	],
	factors: {
		exercise: true,
		"get 8 hours of sleep": true,
		"drink alcohol": false,
	},
};
const dayThree = {
	date: "June 3, 2020",
	emotions: [
		{ x: 1, y: 2, weight: 1 },
		{ x: -2, y: 2, weight: 1 },
		{ x: 2, y: 2, weight: 1 },
	],
	factors: {
		exercise: false,
		"get 8 hours of sleep": false,
		"drink alcohol": true,
	},
};
const dayFour = {
	date: "June 4, 2020",
	emotions: [
		{ x: 1, y: 2, weight: 3 },
		{ x: -2, y: 1, weight: 1 },
	],
	factors: {
		exercise: false,
		"get 8 hours of sleep": false,
		"drink alcohol": false,
	},
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
						<Button
							variant="primary"
							size="lg"
							value="journal"
							onClick={handleButtons}>
							Journal
						</Button>
						<Button
							variant="outline-primary"
							size="lg"
							value="time"
							onClick={handleButtons}>
							Time
						</Button>
						<Button
							variant="primary"
							size="lg"
							value="activity"
							onClick={handleButtons}>
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
