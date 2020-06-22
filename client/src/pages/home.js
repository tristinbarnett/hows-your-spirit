// Global
import React, { useState, useEffect } from "react";
import "../components/App/app.css";
import { Button } from "react-bootstrap";

// Local
import API from "../utils/API";
import EmotionMap from "../utils/EmotionMap";
import BtmLogo from "../assets/HYS-logo-lg.png";

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
function Home() {
	// state of wellbeing for the week
	const [thisWeek, setThisWeek] = useState({});

	// set state of wellbeing
	useEffect(() => {
		let localUser = localStorage.getItem("user");
		console.log("localuser: ", localUser);

		API.getEntries(localUser)
			.then((res) => {
				console.log("res: ", res.data);
				// const entries = res.data;
				// PLACEHOLDER FOR GET ENTRIES FROM DB
				const entries = [dayOne, dayTwo, dayThree, dayFour];
				// narrow down to most recent
				const recent = entries.length > 5 ? entries.slice(Math.max(entries.length - 5, 0)) : entries;
				console.log("recent: ", recent);
				// get numerical averages
				const averageEmotions = EmotionMap.average(entries);
				console.log("average: ", averageEmotions);
				// translate numbers to descriptors
				const description = EmotionMap.descriptors(averageEmotions);
				console.log("description: ", description);
				// set wellbeing state
				setThisWeek({
					mood: description.mood,
					energy: description.energy,
				});
			})
			.catch((err) => {
				console.log("error: ", err);
			});
	}, []);

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: "#FFC300", textAlign: "center" }}>
						<em>Hi! How's Your Spirit today?</em>
					</h2>
					<br />
					<span>
						{/* need to figure out how to get current week data */}
						{/* <h3 style={{ color: "#007bff" }}>This Week:</h3> */}
						<h3 style={{ color: "#007bff" }}>Recently:</h3>
					</span>
				</div>
				<br />
				<div class="container">
					{/* headings populated with descriptors from useState */}
					<h1 style={{ color: "#FFC300", textAlign: "center" }}>Mood is {thisWeek.mood}</h1>
					<br />
					<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>Energy is {thisWeek.energy}</h1>
					<br />
				</div>
				<br />
				<div class="container">
					<Button color="primary" size="lg" block href="/add">
						New entry
					</Button>
					<Button outline color="primary" size="lg" block href="/review">
						Review past entries
					</Button>
					<Button color="primary" size="lg" block href="/learn">
						Learn More
					</Button>
				</div>

				<br />
			</div>
		</body>
	);
}

export default Home;
