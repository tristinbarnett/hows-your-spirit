// Global
import React from "react";
import '../../components/App/app.css';
import { Button, Form } from 'react-bootstrap';
// Export function
function ActivityEntry() {
    return(
     <div>
     <div class="container">

					<h1 style={{ color: '#BFE2FF', textAlign: 'center' }}>
						<em>Today, did you...</em>
					</h1>
					<br />
					<br />
				</div>
			
			<div>
				<Form style={{marginLeft: "20px"}}>
				{['radio'].map((type) => (
					<div key={`default-${type}`} className="mb-3">
					
					
					<Form.Check 
						type={type}
						id={`diet`}
						label={<h3 style={{color: '#FFC300'}}>Eat healthy meals?</h3>}
						
					/>
					<br />
					<Form.Check 
						type={type}
						id={`exercise`}
						label={<h3 style={{color: '#FFC300'}}>Exercise at least 30 minutes?</h3>}
					/>
					<br />
					<Form.Check 
						type={type}
						id={`sleep`}
						label={<h3 style={{color: '#FFC300'}}>Get at least 8 hours of sleep?</h3>}
					/>
					<br />
					<Form.Check 
						type={type}
						id={`alcohol`}
						label={<h3 style={{color: '#FFC300'}}>Drink alcohol?</h3>}
					/>
					<br />
					<br />
					</div>
				))}
				</Form>
			</div>
				
				<div class="container">
					<Button variant="primary" size="lg" block href="/add">Submit</Button>
                    <br /><br /><br />
				</div>	
                </div>			
    )
}

export default ActivityEntry;
