// Global
import React from "react";
import { Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import BarGraph from "../../assets/stacked-bar.png";
// Export function
function ViewActivity() {
    return (
                
             <div>  
                <div class="container">
				<Row>
					<Col><h3 style={{ color: '#FFC300', float: "left", marginLeft: "20px" }}>MOOD</h3></Col>
					<Col><h3 style={{ color: '#007bff', float: "right", position: "relative", marginRight: "20px" }}>ENERGY</h3></Col>
				</Row>
				<br/>
				</div>
				<div class="image-container" style={{ textAlign: "center", alignContent: "center" }}>
					
				
					<img
						alt="logo"
						src={BarGraph}
						width="350"
						className="d-inline-block mr-2"
						style={{marginLeft: "20px"}}
					/>
				</div>
				<br />
				<div class="container" style={{ paddingBottom: "15px" }}>
				<Row>
					<Col><p style={{ color: '#FFC300', float: "left", marginLeft: "25px" }}>Alcohol</p></Col>
					<Col><p style={{ color: '#007bff', float: "left", position: "relative", marginLeft: "25px" }}>Diet</p></Col>
					<Col><p style={{ color: '#FFC300', float: "left", marginRight: "25px" }}>Exercise</p></Col>
					<Col><p style={{ color: '#007bff', float: "right", position: "relative", marginRight: "25px" }}>Sleep</p></Col>
				</Row>
				</div>
				<div class="container">

					<h1 style={{ color: '#BFE2FF', textAlign: 'center' }}>
						<em>Overall you feel <strong>60%</strong> better on days you exercise!</em>
					</h1>

					<br /><br /><br />
				</div>
                </div> 
    )
}

export default ViewActivity;
