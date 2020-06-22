// Global
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import BarGraph from "../../assets/stacked-bar.png";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewActivity({ entries }) {
	// set up tracked activities
	const [activities, setActivities] = useState(EmotionMap.factorsTracked);
	// state for chart data
	const [chartData, setChartData] = useState({});
	// state for random effect statement
	const [randomEffect, setRandomEffect] = useState({});

	// on page load: set chart and statement
	useEffect(() => {
		console.log("entries: ", entries);

		// chart data
		const data = [["Activity", "Mood", "Energy"]];
		const overallAverage = EmotionMap.average(entries);
		data.push(["overall", overallAverage.x, overallAverage.y]);
		activities.forEach((factor) => {
			const factorAverage = EmotionMap.filteredAverage(entries, factor.activity);
			data.push([factor.label, factorAverage.x, factorAverage.y]);
		});
		console.log("data: ", data);

		// chart vAxis ticks
		const ticks = [
			{ v: -2, f: "very negative/low" },
			{ v: -1, f: "negative/low" },
			{ v: 1, f: "positive/high" },
			{ v: 2, f: "very positive/high" },
		];
		setChartData({ data: data, vAxisTicks: ticks });

		// statement of effect of random factor
		const randomFactor = activities[Math.floor(Math.random() * activities.length)].activity;
		const effect = EmotionMap.differential(entries, randomFactor);
		console.log("effect: ", effect);
		setRandomEffect({ ...effect, factor: randomFactor });
	}, []);

	return (
		<div>
			<div style={{ display: "flex", maxWidth: 500 }}>
				{/*Adding in area chart*/}
				<Chart
					width={360}
					height={270}
					chartType="ColumnChart"
					loader={<div>Loading Chart</div>}
					data={chartData.data}
					options={{
						title: "Mood & Energy by Activity",
						chartArea: { width: "50%" },
						colors: ["#FFC300", "#BFE2FF"],
						hAxis: {
							title: "Activities",
							minValue: 0,
						},
						vAxis: {
							title: "Level",
							ticks: chartData.vAxisTicks,
						},
					}}
					legendToggle
				/>
			</div>
			<div class="container">
				<h1 style={{ color: "#BFE2FF", textAlign: "center" }}>
					<em>
						Overall you feel <strong>{randomEffect.positivity}</strong> and have <strong>{randomEffect.energy}</strong> energy on days you {randomEffect.factor}
						!
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
