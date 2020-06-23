// Global
import React, { useState, useEffect } from "react";
import "../components/App/app.css";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import BtmLogo from "../assets/HYS-logo-lg.png";
import moment from "moment";

// Local
import EmotionMap from "../utils/EmotionMap";
import EnterEmotion from "../components/EnterEmotion";
import EnterActivity from "../components/EnterActivity";

// Page Content
function Add({ submitEntry }) {
	// current entry state
	const [entryStatus, setEntryStatus] = useState("addEmotion");
	// entry data
	const [entryData, setEntryData] = useState({ date: moment().format("MMMM Do YYYY"), emotions: [], factors: [] });

	// submit entry when complete
	useEffect(() => {
		console.log("entryData: ", entryData);
		if (entryStatus === "complete") {
			submitEntry(entryData);
		}
	}, [entryData]);

	// handle submit buttons
	const handleSubmit = (data, submitType) => {
		console.log("data: ", data);
		switch (submitType) {
			case "addEmotion":
			case "completeEmotion":
				if (data.feeling && data.weight) {
					let feelingEntry = EmotionMap.feeling(data.feeling);
					feelingEntry.weight = data.weight;
					setEntryData({ ...entryData, emotions: [...entryData.emotions, feelingEntry] });
				}
				break;
			case "complete":
				setEntryData({ ...entryData, factors: data });
				break;
			default:
				console.log("oops: ", submitType);
		}
		setEntryStatus(submitType);
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
									<EnterEmotion submitEmotion={handleSubmit} />
								</div>
							);
						case "completeEmotion":
							return (
								<div>
									<EnterActivity submitActivity={handleSubmit} />
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
