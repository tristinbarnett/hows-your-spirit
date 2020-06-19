// Global
import React from "react";
import '../../components/App/app.css';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

// Export function
function EmotionEntry() {
    return (
       <div>
<div class="container" style={{ clear: "both" }}>
					<h2 style={{ color: '#FFC300', textAlign: 'center' }}><em>Today, I felt:</em></h2>
				<br/>	
				</div>
				<div class="flexbox-container">
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm">Angry</Button>{' '}
						<Button variant="outline-warning" size="sm">Tense</Button>{' '}
						<Button variant="outline-primary" size="sm">Surprised</Button>{' '}
						<Button variant="outline-success" size="sm">Excited</Button>
					</div>
					
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm">Anxious</Button>{' '}
						<Button variant="outline-warning" size="sm">Annoyed</Button>{' '}
						<Button variant="outline-primary" size="sm">Happy</Button>{' '}
						<Button variant="outline-success" size="sm">Hopeful</Button>
					</div>
					
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm">Disappointed</Button>{' '}
						<Button variant="outline-warning" size="sm">Sad</Button>{' '}
						<Button variant="outline-primary" size="sm">Calm</Button>{' '}
						<Button variant="outline-success" size="sm">Fulfilled</Button>
					</div>
					
					<div class="container" style={{textAlign: "center", alignContent: "center", marginBottom: "5px" }}>
						<Button variant="outline-danger" size="sm">Hopeless</Button>{' '}
						<Button variant="outline-warning" size="sm">Drained</Button>{' '}
						<Button variant="outline-primary" size="sm">Relaxed</Button>{' '}
						<Button variant="outline-success" size="sm" href="/add">Peaceful</Button>
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
					
					<Button variant="primary" size="lg" href="/add">Add Emotion</Button>{' '}
					<Button variant="success" size="lg" href="/add">Finalize Entry</Button>
					
				</div>
				<br/><br/>
			
			
			
			
                </div>
    )
}

export default EmotionEntry;
