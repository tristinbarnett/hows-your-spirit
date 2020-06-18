// Global
import React from "react";
import '../App/app.css';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
// Export function
function ViewJournal() {
    return (
        <div class="flexbox-container" style={{ textAlign: "center", alignContent: "center" }}>
				<Card>
				<Card.Header>June 18, 2020</Card.Header>
				<Card.Body>
					<Card.Title style={{ color: '#FFC300' }}>70% Excited</Card.Title>
					<Card.Title style={{ color: '#BFE2FF' }}>30% Frustrated</Card.Title>
					<Card.Text>
					Exercised, drank alcohol
					</Card.Text>
				</Card.Body>
				</Card>
				<br/>
				<Card>
				<Card.Header>June 17, 2020</Card.Header>
				<Card.Body>
					<Card.Title style={{ color: '#FFC300' }}>100% Content</Card.Title>
					<Card.Text>
					8 hours of sleep, exercised, ate healthy meals
					</Card.Text>
				</Card.Body>
				</Card>
				<br/>
				<Card>
				<Card.Header>June 16, 2020</Card.Header>
				<Card.Body>
					<Card.Title style={{ color: '#FFC300' }}>20% Sad</Card.Title>
					<Card.Title style={{ color: '#FFC300' }}>80% Stressed</Card.Title>
					<Card.Text>
					Bad sleep, no exercise, ate unhealthy meals
					</Card.Text>
				</Card.Body>
				</Card>
				</div>
    )
}

export default ViewJournal;
