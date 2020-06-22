// Global
import React, { useState, useEffect } from "react";
import Graph from "../../assets/graph.png";
import EmotionMap from "../../utils/EmotionMap";
import Chart from "react-google-charts";

// Export function
function ViewTime({ entries }) {
	// state for chart data
	const [chartData, setChartData] = useState({});
	// state for trend statement
	const [growthTrend, setGrowthTrend] = useState({});

	// on page load: set chart and statement
	useEffect(() => {
		console.log("entries: ", entries);
		const entryData = entries;
		// chart data
		const data = [["Day", "Mood", "Energy"]];
		entries.forEach((entry) => {
			const entryAverage = EmotionMap.average([entry]);
			console.log("type: ", typeof entryAverage.x);
			data.push([entry.date, entryAverage.x, entryAverage.y]);
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

		// statement of growth trend
		const trend = EmotionMap.growth(entries);
		console.log("trend: ", trend);
		setGrowthTrend(trend);
	}, []);

	return (
		<div>
			<div style={{ display: "flex", maxWidth: 500 }}>
				{" "}
				{/*Adding in area chart*/}
				<Chart
					width={"350px"}
					height={"210px"}
					chartType="AreaChart"
					loader={<div>Loading Chart</div>}
					data={chartData.data}
					// data={[
					// 	["Day", "Mood", "Energy"],
					// 	["6-1-20", -2, -1],
					// 	["6-2-20", -1, 1],
					// 	["6-3-20", 0, 1],
					// 	["6-4-20", 1, 2],
					// 	["6-5-20", 2, 1],
					// ]}
					options={{
						title: "Mood & Energy Over Time",
						hAxis: { title: "Days", titleTextStyle: { color: "#333" } },
						vAxis: {
							title: "Level",
							ticks: chartData.vAxisTicks,
						}, // vAxis: { minValue: 0 },
						// For the legend to fit, we make the chart area smaller
						chartArea: { width: "60%", height: "70%" },
						// lineWidth: 25
						colors: ["#FFC300", "#BFE2FF"],
					}}
					legendToggle
					// For tests
					rootProps={{ "data-testid": "1" }}
				/>
			</div>
			<br />

			{entries.length > 3 ? (
				<div class="container" style={{ paddingBottom: "15px" }}>
					<span>
						<h3 style={{ color: "#007bff" }}>Mood is trending:</h3>
					</span>
					<h2 style={{ color: "#FFC300" }}>{growthTrend.positivity}</h2>
					<br />
					<span>
						<h3 style={{ color: "#007bff" }}>Energy is trending:</h3>
					</span>
					<h2 style={{ color: "#BFE2FF" }}>{growthTrend.energy}</h2>
				</div>
			) : (
				<h3>Log a few more entries to see trends!</h3>
			)}
		</div>
	);
}

export default ViewTime;
