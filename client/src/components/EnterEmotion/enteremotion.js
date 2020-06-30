// Global
import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";

// Local
import "../../components/App/app.css";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function EmotionEntry({ submitEmotion }) {
	// entry form
	const [entryForm, setEntryForm] = useState({ feelings: EmotionMap.feelings, weights: EmotionMap.weights, submit: false, error: false });
	useEffect(() => {
		if (entryForm.submit) {
			setEmotion({});
			setEntryForm({ ...entryForm, submit: false, error: false });
		}
	}, [entryForm]);

	// entry to be submitted
	const [emotion, setEmotion] = useState({});
	// change emotion on button click
	const handleButtons = (event) => {
		setEmotion({ ...emotion, feeling: event.target.value });
	};

	// change weight on radio select
	const handleRadio = (event) => {
		setEmotion({ ...emotion, weight: parseInt(event.target.value) });
	};

	// handle submit buttons
	const handleSubmit = (event) => {
		if (emotion.feeling && emotion.weight) {
			submitEmotion(emotion, event.target.value);
			setEntryForm({ ...entryForm, submit: true, error: false });
		} else {
			setEntryForm({ ...entryForm, error: true });
		}
	};

	return (
		<div>
			<div className="container" style={{ clear: "both" }}>
				<h2 style={{ color: "#FFC300", textAlign: "center" }}>
					<em>Today, I felt:</em>
				</h2>
				<br />
			</div>
			<div className="flexbox-container">
				<div
					className="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					{entryForm.feelings.map((feeling) => {
						let colorBtn = feeling.x === -2 ? "outline-danger" : feeling.x === -1 ? "outline-warning" : feeling.x === 1 ? "outline-primary" : "outline-success";
						return (
							<Button key={feeling.emotion} size="sm" className="col-3" variant={colorBtn} value={feeling.emotion} onClick={handleButtons}>
								{feeling.emotion}
							</Button>
						);
					})}
				</div>
			</div>

			<div className="container">
				<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>
					<em>{emotion.feeling}</em>
				</h1>
			</div>
			<div>
				<Form style={{ marginLeft: "20px" }}>
					<div className="mb-3">
						{entryForm.weights.map((weight) => {
							return (
								<Form.Check
									key={weight.w}
									type="radio"
									name="weight"
									value={weight.w}
									checked={weight.w === emotion.weight}
									onChange={handleRadio}
									label={<p>{weight.descriptor}</p>}
								/>
							);
						})}
					</div>
					{entryForm.error ? (
						<div className="container" style={{ marginRight: "20px" }}>
							<Alert variant="danger">You must choose a feeling and duration before submitting.</Alert>
						</div>
					) : (
						<></>
					)}
				</Form>
				<div
					className="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					<Button variant="primary" size="lg" block value="addEmotion" onClick={handleSubmit}>
						Add emotion, then add another
					</Button>
					<br />
					<Button variant="success" size="lg" block value="completeEmotion" onClick={handleSubmit}>
						Add emotion, and finish entry
					</Button>
					<br/><br/>
				</div>
			</div>
		</div>
	);
}

export default EmotionEntry;
