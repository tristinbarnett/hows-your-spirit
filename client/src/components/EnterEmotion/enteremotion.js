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
			<div class="container" style={{ clear: "both" }}>
				<h2 style={{ color: "#FFC300", textAlign: "center" }}>
					<em>Today, I felt:</em>
				</h2>
				<br />
			</div>
			<div class="flexbox-container">
				<div
					class="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					{entryForm.feelings.map((feeling) => {
						let colorBtn = feeling.x === -2 ? "outline-danger" : feeling.x === -1 ? "outline-warning" : feeling.x === 1 ? "outline-primary" : "outline-success";
						return (
							<Button
								key={feeling.emotion}
								size="sm"
								// className fits the button to 1/4 of the grid so buttons wrap 4 per row
								// trade off is "disappointed" doesnt fit - do we change word?
								// or write map function in four seperate parts to create 4 individual rows?
								className="col-3"
								variant={colorBtn}
								value={feeling.emotion}
								onClick={handleButtons}>
								{feeling.emotion}
							</Button>
						);
					})}
				</div>
				{/* <div
					class="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					<Button variant="outline-danger" size="sm" value="angry" onClick={handleButtons}>
						Angry
					</Button>
					<Button variant="outline-warning" size="sm" value="tense" onClick={handleButtons}>
						Tense
					</Button>
					<Button variant="outline-primary" size="sm" value="surprised" onClick={handleButtons}>
						Surprised
					</Button>
					<Button variant="outline-success" size="sm" value="excited" onClick={handleButtons}>
						Excited
					</Button>
				</div>

				<div
					class="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					<Button variant="outline-danger" size="sm" value="anxious" onClick={handleButtons}>
						Anxious
					</Button>
					<Button variant="outline-warning" size="sm" value="annoyed" onClick={handleButtons}>
						Annoyed
					</Button>
					<Button variant="outline-primary" size="sm" value="happy" onClick={handleButtons}>
						Happy
					</Button>
					<Button variant="outline-success" size="sm" value="hopeful" onClick={handleButtons}>
						Hopeful
					</Button>
				</div>

				<div
					class="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					<Button variant="outline-danger" size="sm" value="disappointed" onClick={handleButtons}>
						Disappointed
					</Button>
					<Button variant="outline-warning" size="sm" value="sad" onClick={handleButtons}>
						Sad
					</Button>
					<Button variant="outline-primary" size="sm" value="calm" onClick={handleButtons}>
						Calm
					</Button>
					<Button variant="outline-success" size="sm" value="fulfilled" onClick={handleButtons}>
						Fulfilled
					</Button>
				</div>

				<div
					class="container"
					style={{
						textAlign: "center",
						alignContent: "center",
						marginBottom: "5px",
					}}>
					<Button variant="outline-danger" size="sm" value="hopeless" onClick={handleButtons}>
						Hopeless
					</Button>
					<Button variant="outline-warning" size="sm" value="drained" onClick={handleButtons}>
						Drained
					</Button>
					<Button variant="outline-primary" size="sm" value="relaxed" onClick={handleButtons}>
						Relaxed
					</Button>
					<Button variant="outline-success" size="sm" value="peaceful" onClick={handleButtons}>
						Peaceful
					</Button>
				</div> */}
			</div>
			<br />
			<div class="container">
				<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>
					<em>{emotion.feeling}</em>
				</h1>

				<br />
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
					{entryForm.error ? <Alert variant="danger">You must choose a feeling and duration before submitting.</Alert> : <></>}

					<div
						class="container"
						style={{
							textAlign: "center",
							alignContent: "center",
							marginBottom: "5px",
						}}>
						<Button variant="primary" size="lg" value="addEmotion" onClick={handleSubmit}>
							Add Emotion
						</Button>
						<Button variant="success" size="lg" value="completeEmotion" onClick={handleSubmit}>
							Finalize Entry
						</Button>
					</div>
				</Form>
			</div>
			<br />
			<br />
		</div>
	);
}

export default EmotionEntry;
