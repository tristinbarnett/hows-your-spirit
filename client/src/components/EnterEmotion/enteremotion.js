// Global
import React, { useState, useEffect } from "react";
import "../../components/App/app.css";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function EmotionEntry({ submitEmotion }) {
	// entry to be submitted
	const [emotion, setEmotion] = useState({});
	// entry states
	const [entryForm, setEntryForm] = useState({ feelings: EmotionMap.feelings, weights: EmotionMap.weights, submit: false, radioCheck: false });

	// reset form when submitted
	useEffect(() => {
		if (entryForm.submit) {
			setEmotion({});
			setEntryForm({ ...entryForm, submit: false, radioCheck: false });
		}
	}, [entryForm]);

	// change emotion on button click
	const handleButtons = (event) => {
		setEmotion({ ...emotion, feeling: event.target.value });
	};

	// change weight on radio select
	const handleRadio = (event) => {
		// setEntryForm({ ...entryForm, radioCheck: true });
		setEmotion({ ...emotion, weight: parseInt(event.target.value) });
	};

	// handle submit buttons
	const handleSubmit = (event) => {
		console.log("submit: ", emotion, event.target.value);
		submitEmotion(emotion, event.target.value);
		setEntryForm({ ...entryForm, submit: true });
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
				</div>
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
									// defaultChecked={false}
									checked={weight.w === emotion.weight}
									onChange={handleRadio}
									label={<p>{weight.descriptor}</p>}
								/>
							);
						})}
					</div>

					{/* {["radio"].map((type) => (
						<div key={`default-${type}`} className="mb-3">
							<Form.Check type={type} id={`passing`} label={<p>In passing</p>} />

							<Form.Check type={type} id={`some`} label={<p>Some of the day</p>} />

							<Form.Check type={type} id={`lot`} label={<p>A lot of the day</p>} />

							<Form.Check type={type} id={`most`} label={<p>Most, or all of the day</p>} />
						</div>
					))} */}

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
