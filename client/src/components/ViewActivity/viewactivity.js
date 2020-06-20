// Global
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import BarGraph from "../../assets/stacked-bar.png";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewActivity({ entries }) {
	// state for factor comparison
	const [randomFactor, setRandomFactor] = useState("");

	// randomly set factor on page load
	useEffect(() => {
		const factors = EmotionMap.factorArray();
		setRandomFactor(factors[Math.floor(Math.random() * factors.length)]);
	}, []);

	// get effect of factor
	const factorEffect = (entries) => {
		// calculate effect of factor
		const effect = EmotionMap.differential(entries, randomFactor);
		console.log("effect: ", effect);
		return effect;
	};

	return (
		<div>
			<div class="container">
				<Row>
					<Col>
						<h3 style={{ color: "#FFC300", float: "left", marginLeft: "20px" }}>
							MOOD
						</h3>
					</Col>
					<Col>
						<h3
							style={{
								color: "#007bff",
								float: "right",
								position: "relative",
								marginRight: "20px",
							}}>
							ENERGY
						</h3>
					</Col>
				</Row>
				<br />
			</div>
			<div
				class="image-container"
				style={{ textAlign: "center", alignContent: "center" }}>
				<img
					alt="logo"
					src={BarGraph}
					width="350"
					className="d-inline-block mr-2"
					style={{ marginLeft: "20px" }}
				/>
			</div>
			<br />
			<div class="container" style={{ paddingBottom: "15px" }}>
				<Row>
					<Col>
						<p style={{ color: "#FFC300", float: "left", marginLeft: "25px" }}>
							Alcohol
						</p>
					</Col>
					<Col>
						<p
							style={{
								color: "#007bff",
								float: "left",
								position: "relative",
								marginLeft: "25px",
							}}>
							Diet
						</p>
					</Col>
					<Col>
						<p style={{ color: "#FFC300", float: "left", marginRight: "25px" }}>
							Exercise
						</p>
					</Col>
					<Col>
						<p
							style={{
								color: "#007bff",
								float: "right",
								position: "relative",
								marginRight: "25px",
							}}>
							Sleep
						</p>
					</Col>
				</Row>
			</div>
			<div class="container">
				<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>
					<em>
						Overall you feel <strong>{factorEffect(entries).positivity}</strong>{" "}
						and have <strong>{factorEffect(entries).energy}</strong> energy on
						days you {randomFactor}!
					</em>
				</h1>

				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default ViewActivity;
