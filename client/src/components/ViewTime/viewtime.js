// Global
import React from "react";
import Chart from "react-google-charts";

// Local
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewTime({ entries }) {
	// chart data
	const calculateChartData = () => {
		if (entries && entries.length > 3) {
			// data
			const data = [["Day", "Mood", "Energy"]];
			entries.forEach((entry) => {
				const entryAverage = EmotionMap.average([entry]);
				data.push([entry.date, entryAverage.x, entryAverage.y]);
			});
			// vAxis
			const ticks = [
				{ v: -2, f: "very negative/low" },
				{ v: -1, f: "negative/low" },
				{ v: 1, f: "positive/high" },
				{ v: 2, f: "very positive/high" },
			];
			return { data: data, vAxisTicks: ticks };
		} else {
			return null;
		}
	};
	const chartData = calculateChartData();

	// trend statement
	const calculateGrowthTrend = () => {
		if (entries && entries.length > 3) {
			return EmotionMap.growth(entries);
		} else {
			return null;
		}
	};
	const growthTrend = calculateGrowthTrend();

	return (
		<div>
			{chartData && growthTrend ? (
				<>
					<div style={{ display: "flex", maxWidth: 500 }}>
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
						/>{" "}
					</div>

					<br />
					<div className="container" style={{ paddingBottom: "15px" }}>
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
				</>
			) : (
				<h3>Log a few more entries to see trends!</h3>
			)}
		</div>
	);
}

export default ViewTime;
