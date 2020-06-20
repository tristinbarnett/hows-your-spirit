// Global
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import BarGraph from "../../assets/stacked-bar.png";
import EmotionMap from "../../utils/EmotionMap";
import Chart from "react-google-charts";

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
		<div style={{ display: 'flex', maxWidth: 500 }}> {/*Adding in area chart*/}
		<Chart
			width={360}
			height={270}
			chartType="ColumnChart"
			loader={<div>Loading Chart</div>}
			data={[
			['Activity', 'Mood', 'Energy'],
			['Overall', 1, -2],
			['Alcohol', 1, -2],
			['Diet', 2, 1],
			['Exercise', 2, 1],
			['Sleep', 2, 2],
			]}
			options={{
			title: 'Mood & Energy by Activity',
			chartArea: { width: '50%' },
			colors: ["#FFC300", "#BFE2FF"],
			hAxis: {
				title: 'Activities',
				minValue: 0,
			},
			vAxis: {
				title: 'Level',
			},
			}}
			legendToggle
			/>
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
