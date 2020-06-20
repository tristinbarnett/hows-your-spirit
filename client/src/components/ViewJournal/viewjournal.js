// Global
import React from "react";
import '../App/app.css';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewJournal({ entries }) {
	// get emotion from an entry
	const getEmotion = (emotion) => {
		const name = EmotionMap.emotion(emotion.x, emotion.y);
		const weight = EmotionMap.duration(emotion.weight);
		console.log("get emotion: ", name, weight);
		return `${name} ${weight}`;
	};

	// get string of activities
	const getActivities = (entry) => {
		const allActivities = Object.keys(entry);
		console.log("allActivities: ", allActivities);
		const activities = allActivities.filter((factor) => {
			return entry[factor];
		});
		console.log("activities: ", activities);
		return activities.join(", ");
	};

	return (
		<div class="flexbox-container" style={{ textAlign: "center", alignContent: "center" }}>
			{entries.length ? (
				<div>
					{entries.map(entry => (
						// can't have line break between cards because of rule to only have one parent element in jsx expression
						// i added bootstrap class "mb-2" for bottom margin (adjust by changing number between 1 and 5)
						<Card className="mb-2">
							<Card.Header>{entry.date}</Card.Header>
							<Card.Body>
								{entry.emotions.map((emotion) => (
									<Card.Title style={{ color: '#FFC300' }}>
										{getEmotion(emotion)}
									</Card.Title>
								))}
								{/* not sure how we can implement having each one style a different color... */}
								{/* <Card.Title style={{ color: '#BFE2FF' }}>30% Frustrated</Card.Title> */}
								<Card.Text>
									{getActivities(entry.factors)}
								</Card.Text>
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
