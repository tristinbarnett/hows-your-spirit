// Global
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// Local
import "../../components/App/app.css";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ActivityEntry({ submitActivity }) {
	// tracked activities
	const [activities, setActivities] = useState(EmotionMap.factorsTracked);

	// add activity on checkbox select
	const handleCheckbox = (event) => {
		const checked = activities.findIndex((entry) => entry.label === event.target.value);
		const updateActivities = activities;
		updateActivities[checked].state ? (updateActivities[checked].state = false) : (updateActivities[checked].state = true);
		setActivities(updateActivities);
	};

	// handle submit buttons
	const handleSubmit = (event) => {
		let submitType = event.target.value;
		submitActivity(activities, submitType);
	};

	return (
		<div>
			<div className="container">
				<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>
					<em>Today, did you...</em>
				</h1>
				<br />
				<br />
			</div>

			<div>
				<Form style={{ marginLeft: "20px" }}>
					{/* suggest checkboxes so user knows that more than one can be selected - can change back to radio by changing type="radio"*/}
					{activities.map((entry) => (
						<div key={entry.label} className="mb-3">
							<Form.Check type="checkbox" value={entry.label} onChange={handleCheckbox} label={<h3 style={{ color: "#FFC300" }}>{`${entry.activity}?`}</h3>} />
							<br />
						</div>
					))}
					{/* {["radio"].map((type) => (
						<div key={`default-${type}`} className="mb-3">
							<Form.Check type={type} id={`diet`} label={<h3 style={{ color: "#FFC300" }}>Eat healthy meals?</h3>} />
							<br />
							<Form.Check type={type} id={`exercise`} label={<h3 style={{ color: "#FFC300" }}>Exercise at least 30 minutes?</h3>} />
							<br />
							<Form.Check type={type} id={`sleep`} label={<h3 style={{ color: "#FFC300" }}>Get at least 8 hours of sleep?</h3>} />
							<br />
							<Form.Check type={type} id={`alcohol`} label={<h3 style={{ color: "#FFC300" }}>Drink alcohol?</h3>} />
							<br />
							<br />
						</div>
					))} */}
				</Form>
			</div>

			<div className="container">
				<Button variant="primary" size="lg" block value="complete" onClick={handleSubmit}>
					Submit
				</Button>
				<br/><br/><br/><br/>
			</div>
		</div>
	);
}

export default ActivityEntry;
