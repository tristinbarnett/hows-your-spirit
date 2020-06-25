// Global
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import BtmLogo from "../assets/HYS-logo-lg.png";
import moment from "moment";

// Local
import "../components/App/app.css";
import EmotionMap from "../utils/EmotionMap";
import EnterEmotion from "../components/EnterEmotion";
import EnterActivity from "../components/EnterActivity";

// Page Content
function Add({ submitEntry }) {
	// entry submission status
	const [entryStatus, setEntryStatus] = useState("addEmotion");
	// entry data
	const [entryData, setEntryData] = useState({ date: moment().format("MMMM Do YYYY"), emotions: [], factors: [] });
	useEffect(() => {
		if (entryStatus === "complete") {
			submitEntry(entryData);
		}
	}, [entryData]);

	// handle submit buttons
	const handleSubmit = (data, submitType) => {
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
		<main style={{ backgroundColor: "#BFE2FF" }}>
			<div className="flexbox-container" style={{ backgroundColor: "white" }}>
				<div className="container" id="entryDiv"></div>
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
							return (
								<div className="container">
									<h3 style={{ color: "#FFC300", textAlign: "center" }}>Thank you! You have successfully added a new mood entry.</h3>
									<br />
									<h3 style={{ color: "#BFE2FF", textAlign: "center" }}>Let's go look at your trends.</h3>
									<br />
									<Button outline color="primary" size="lg" block as={Link} to="/review">
										Review your entries
									</Button>
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
								</div>
							);
						default:
							return <div>oops!</div>;
					}
				})()}
			</div>
		</main>
	);
}

export default Add;
