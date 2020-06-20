// Global
import React, { useState } from "react";
import "../../components/App/app.css";
import { Button, Form } from "react-bootstrap";

// Export function
function ActivityEntry({ entriesMap, submitActivity }) {
	// set up emotion states
	const [activities, setActivities] = useState(entriesMap);

	// add activity on checkbox select
	const handleCheckbox = (event) => {
		const checked = entriesMap.findIndex((entry) => entry.activity === event.target.value);
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
			<div class="container">
				<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>
					<em>Today, did you...</em>
				</h1>
				<br />
				<br />
			</div>

			<div>
				<Form style={{ marginLeft: "20px" }}>
					{/* suggest checkboxes so user knows that more than one can be selected - can change back to radio by changing type="radio"*/}
					{entriesMap.map((entry) => (
						<div key={entry.activity} className="mb-3">
							<Form.Check
								type="checkbox"
								value={entry.activity}
								onChange={handleCheckbox}
								label={<h3 style={{ color: "#FFC300" }}>{`${entry.activity}?`}</h3>}
							/>
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

			<div class="container">
				<Button variant="primary" size="lg" block type="submit" value="complete" onClick={handleSubmit}>
					Submit
				</Button>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default ActivityEntry;
