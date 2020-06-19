// Global
import React, { useState, useEffect } from "react";
import '../components/App/app.css';
import { Button } from 'react-bootstrap';

// Local
import EmotionMap from "../utils/EmotionMap";
import BtmLogo from "../assets/HYS-logo-lg.png";

//TEMPORARY DATA (AWAITING BACKEND)
const dayOne = {
	date: "date",
	emotions: [ { x: -1, y: -1, weight: 4 } ],
	factors: { factor1: true, factor2: false },
};
const dayTwo = {
	date: "date",
	emotions: [
		{ x: 2, y: 2, weight: 3 },
		{ x: -1, y: 2, weight: 1 },
	],
	factors: { factor1: false, factor2: true },
};
const dayThree = {
	date: "date",
	emotions: [
		{ x: 1, y: 2, weight: 1 },
		{ x: -2, y: 2, weight: 1 },
		{ x: 2, y: 2, weight: 1 },
	],
	factors: { factor1: false, factor2: true },
};
const dayFour = {
	date: "date",
	emotions: [
		{ x: 1, y: 2, weight: 3 },
		{ x: -2, y: 1, weight: 1 },
	],
	factors: { factor1: false, factor2: true },
};

// Page Content
function Home() {
	// state of wellbeing for the week
	const [ thisWeek, setThisWeek ] = useState({});

	// set state of wellbeing
	useEffect(() => {
		// API.getEntries("thisweek").then((res) => {
		// const entries = res;
		// PLACEHOLDER FOR GET ENTRIES FROM DB
		const entries = [ dayOne, dayTwo, dayThree, dayFour ];
		// get numerical averages
		const averageEmotions = EmotionMap.average(entries);
		console.log("average: ", averageEmotions);
		// translate numbers to descriptors
		const description = EmotionMap.descriptors(averageEmotions);
		console.log("description: ", description);
		// translate numbers to percentages
		const percentages = EmotionMap.percentages(averageEmotions);
		console.log("percentages: ", percentages);
		// set wellbeing state
		setThisWeek({ positivity: description.positivity, energy: description.energy, positivityPercent: percentages.positivity, energyPercent: percentages.energy });
		// }).catch((err) => {
		// 	console.log("error: ", err);
		// });
	}, []);

	return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
				<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: '#FFC300', textAlign: 'center' }}><em>Hi! How's Your Spirit today?</em></h2>
					<br />
					<span><h3 style={{ color: '#007bff' }}>This Week:</h3></span>
				</div>
				<br/>
				<div class="container">
					{/* headings populated with descriptors from useState */}
					<h1 style={{ color: '#FFC300', textAlign: 'center' }}>Mood is {thisWeek.positivity}</h1>
					<br/>
					<h1 style={{ color: '#BFE2FF', textAlign: 'center' }}>Energy is {thisWeek.energy}</h1>
					<br />
					{/* OR headings populated with percentages from useState */}
					{/*<h1 style={{ color: '#FFC300', textAlign: 'center' }}>{thisWeek.positivityPercent}</h1>
					<h1 style={{ color: '#FFC300', textAlign: 'center' }}>{thisWeek.energyPercent}</h1>
					<br />*/}
				</div>
				<br/>
				<div class="container">
					<Button color="primary" size="lg" block href="/add">New entry</Button>
					<Button outline color="primary" size="lg" block href="/review">Review past entries</Button>
					<Button color="primary" size="lg" block href="/learn">Learn More</Button>
				</div>
				
				<br />
			</div>
		</body>
	)
}

export default Home;
