// Global
import React from "react";
import "../App/app.css";
import { Card } from "react-bootstrap";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewJournal({ entries }) {
	// get emotion from an entry
	const getDuration = (emotion) => {
		const duration = EmotionMap.duration(emotion.weight);
		return duration;
	};

	// get string of activities
	const getActivities = (factors) => {
		const activitiesTrue = factors.reduce((acc, factor) => {
			if (factor.state) acc.push(factor.activity);
			return acc;
		}, []);
		return activitiesTrue.join(", ");
	};

	return (
		<div className="flexbox-container" style={{ textAlign: "center", alignContent: "center" }}>
			{entries && entries.length ? (
				<div>
					{entries.map((entry) => (
						<Card border="primary" className="mb-2" key={entry.date}>
							<Card.Header>{entry.date}</Card.Header>
							<Card.Body>
								{entry.emotions.map((emotion) => (
									<Card.Title key={emotion.emotion} style={{ color: "#FFC300" }}>
										{emotion.emotion} {getDuration(emotion)}
									</Card.Title>
								))}
								<Card.Text>{getActivities(entry.factors)}</Card.Text>
							</Card.Body>
						</Card>
					))}
				</div>
			) : (
				<h3>No Entries to Display</h3>
			)}
		</div>
	);
}

export default ViewJournal;
