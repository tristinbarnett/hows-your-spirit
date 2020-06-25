// Global
import React, { useState } from "react";
import "../components/App/app.css";
import { Button, ButtonGroup } from "react-bootstrap";
//import BtmLogo from "../assets/HYS-logo-lg.png";
//import BarGraph from "../assets/stacked-bar.png";
// Local
//import EmotionMap from "../utils/EmotionMap";
import ViewJournal from "../components/ViewJournal";
import ViewTime from "../components/ViewTime";
import ViewActivity from "../components/ViewActivity";

// Page Content
function Review({ entries }) {
	// type of view on page
	const [view, setView] = useState("journal");

	// change view on button click
	const handleButtons = (event) => {
		setView(event.target.value);
	};

	return (
		<main style={{ backgroundColor: "#BFE2FF" }}>
			<div className="flexbox-container" style={{ backgroundColor: "white" }}>
				<div className="flexbox-container">
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
				<div className="container" id="componentDiv">
					{(() => {
						switch (view) {
							case "journal":
								return (
									<div>
										<ViewJournal entries={entries} />
									</div>
								);
							case "time":
								return (
									<div>
										<ViewTime entries={entries} />
									</div>
								);
							case "activity":
								return (
									<div>
										<ViewActivity entries={entries} />
									</div>
								);
							default:
								return <div>Oops!</div>;
						}
					})()}
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</main>
	);
}

export default Review;
