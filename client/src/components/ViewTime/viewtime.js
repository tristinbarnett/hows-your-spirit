// Global
import React from "react";
import Graph from "../../assets/graph.png";
import EmotionMap from "../../utils/EmotionMap";
import Chart from "react-google-charts";
// Export function
function ViewTime({ entries }) {
	// get growth trend of data
	const getTrend = (entries) => {
		const trend = EmotionMap.growth(entries);
		return trend;
	};

	return (
		
			<div>
				<div style={{ display: 'flex', maxWidth: 500 }}> {/*Adding in area chart*/}
				<Chart
				width={'350px'}
				height={'210px'}
				chartType="AreaChart"
				loader={<div>Loading Chart</div>}
				data={[
					['Day', 'Mood', 'Energy'],
					['6-1-20', -2, -1],
					['6-2-20', -1, 1],
					['6-3-20', 0, 1],
					['6-4-20', 1, 2],
					['6-5-20', 2, 1],
				]}
				options={{
					title: 'Mood & Energy Over Time',
					hAxis: { title: 'Days', titleTextStyle: { color: '#333' } },
					vAxis: { minValue: 0 },
					// For the legend to fit, we make the chart area smaller
					chartArea: { width: '60%', height: '70%' },
					// lineWidth: 25
					colors: ["#FFC300", "#BFE2FF"],
				}}
				legendToggle
				// For tests
				rootProps={{ 'data-testid': '1' }}
				/>
				</div>
				<br />

				{entries.length > 3 ? (
					<div class="container" style={{ paddingBottom: "15px" }}>
						<span>
							<h3 style={{ color: "#007bff" }}>Mood is trending:</h3>
						</span>
						<h2 style={{ color: "#FFC300" }}>{getTrend(entries).positivity}</h2>
						<br />
						<span>
							<h3 style={{ color: "#007bff" }}>Energy is trending:</h3>
						</span>
						<h2 style={{ color: "#BFE2FF" }}>{getTrend(entries).energy}</h2>
					</div>
				) : (
					<h3>Log a few more entries to see trends!</h3>
				)}
			</div>
		
	);
}

export default ViewTime;
