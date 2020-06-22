// Global
import React, { useState, useEffect } from "react";
import "../components/App/app.css";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import BtmLogo from "../assets/HYS-logo-lg.png";
import moment from "moment";

// Local
import API from "../utils/API";
import EmotionMap, { feeling } from "../utils/EmotionMap";
import EnterEmotion from "../components/EnterEmotion";
import EnterActivity from "../components/EnterActivity";

// Page Content
function Add() {
	// set current entry state
	const [entryStatus, setEntryStatus] = useState("addEmotion");
	// set entry data
	const [entryData, setEntryData] = useState({ date: moment().format("MMMM Do YYYY"), emotions: [], factors: [] });
	// get emotionMap for entries
	const entriesMap = EmotionMap.map();

	// submit entry when complete
	useEffect(() => {
		if (entryStatus === "complete") {
			submitEntry();
		}
	}, [entryData]);

	// handle submit buttons
	const handleSubmit = (data, submitType) => {
		setEntryStatus(submitType);
		switch (submitType) {
			case "addEmotion":
			case "completeEmotion":
				if (data.feeling && data.weight) {
					let feelingEntry = EmotionMap.feeling(data.feeling);
					feelingEntry.weight = data.weight;
					setEntryData({ ...entryData, emotions: [...entryData.emotions, feelingEntry] });
					// reset emotion form if adding another emotion
				}
				break;
			case "complete":
				setEntryData({ ...entryData, factors: data });
				// setEntryData({ ...entryData, factors: data }, submitEntry());
				break;
			default:
				console.log("oops: ", submitType);
		}
	};

	// submit to database
	const submitEntry = () => {
		let localUser = localStorage.getItem("user");
		API.createEntry(localUser, entryData)
			.then((res) => {
				console.log("results: ", res);
			})
			.catch((err) => {
				console.log("error: ", err);
			});
	};

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<div class="container" id="entryDiv"></div>
				{(() => {
					switch (entryStatus) {
						case "addEmotion":
							return (
								<div>
									<EnterEmotion entriesMap={(entriesMap.feelings, entriesMap.durations)} submitEmotion={handleSubmit} />
								</div>
							);
						case "completeEmotion":
							return (
								<div>
									<EnterActivity entriesMap={entriesMap.activities} submitActivity={handleSubmit} />
								</div>
							);
						case "complete":
							return <div>success!!</div>;
						default:
							return <div>oops!</div>;
					}
				})()}
			</div>
		</body>
	);
}

export default Add;
