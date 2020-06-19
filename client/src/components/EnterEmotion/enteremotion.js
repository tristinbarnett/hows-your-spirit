// Global
import React, { useState } from "react";
import '../../components/App/app.css';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

// Export function
function EmotionEntry() {
	// set up emotion states
	const [emotion, setEmotion] = useState("");
	// change view on button click
	const handleButtons = (event) => {
		setEmotion(event.target.value);
	};
    return (
       <div>
<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: '#FFC300', textAlign: 'center' }}><em>Today, I felt:</em></h2>
				<br/>	
				</div>
				<div class="flexbox-container">
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm" value="angry" onClick={handleButtons}>Angry</Button>{' '}
						<Button variant="outline-warning" size="sm" value="tense" onClick={handleButtons}>Tense</Button>{' '}
						<Button variant="outline-primary" size="sm" value="surprised" onClick={handleButtons}>Surprised</Button>{' '}
						<Button variant="outline-success" size="sm" value="excited" onClick={handleButtons}>Excited</Button>
					</div>
					
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm" value="anxious" onClick={handleButtons}>Anxious</Button>{' '}
						<Button variant="outline-warning" size="sm" value="annoyed" onClick={handleButtons}>Annoyed</Button>{' '}
						<Button variant="outline-primary" size="sm" value="happy" onClick={handleButtons}>Happy</Button>{' '}
						<Button variant="outline-success" size="sm" value="hopeful" onClick={handleButtons}>Hopeful</Button>
					</div>
					
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm" value="disappointed" onClick={handleButtons}>Disappointed</Button>{' '}
						<Button variant="outline-warning" size="sm" value="sad" onClick={handleButtons}>Sad</Button>{' '}
						<Button variant="outline-primary" size="sm" value="calm" onClick={handleButtons}>Calm</Button>{' '}
						<Button variant="outline-success" size="sm" value="fulfilled" onClick={handleButtons}>Fulfilled</Button>
					</div>
					
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm" value="hopeless" onClick={handleButtons}>Hopeless</Button>{' '}
						<Button variant="outline-warning" size="sm" value="drained" onClick={handleButtons}>Drained</Button>{' '}
						<Button variant="outline-primary" size="sm" value="relaxed" onClick={handleButtons}>Relaxed</Button>{' '}
						<Button variant="outline-success" size="sm" value="peaceful" onClick={handleButtons}>Peaceful</Button>
					</div>
					
				</div>
				<br />
				<div class="container">

					<h1 style={{ color: '#BFE2FF', textAlign: 'center' }}>
						<em>Relaxed</em>
					</h1>

				<br/>	
				</div>
				<div>
				<Form style={{marginLeft: "20px"}}>
				{['radio'].map((type) => (
					<div key={`default-${type}`} className="mb-3">
					
					
					<Form.Check 
						type={type}
						id={`passing`}
						label={<p>In passing</p>}
						
					/>
					
					<Form.Check 
						type={type}
						id={`some`}
						label={<p>Some of the day</p>}
					/>
					
					<Form.Check 
						type={type}
						id={`lot`}
						label={<p>A lot of the day</p>}
					/>
					
					<Form.Check 
						type={type}
						id={`most`}
						label={<p>Most, or all of the day</p>}
					/>
					
					</div>
				))}
				</Form>
			</div>
				<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
					
					<Button variant="primary" size="lg" value="addEmotion" onClick={handleButtons}>Add Emotion</Button>{' '}
					<Button variant="success" size="lg" value="finalize" onClick={handleButtons}>Finalize Entry</Button>
					
				</div>
				<br/><br/>
			
			
			
			
                </div>
    )
}

export default EmotionEntry;
