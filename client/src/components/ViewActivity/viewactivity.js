// Global
import React from "react";
import Chart from "react-google-charts";

// Local
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewActivity({ entries }) {
	// factors being tracked
	const activities = EmotionMap.factorsTracked;

	// chart data
	// will need to refactor for larger data sets to group entries into weeks/months
	const calculateChartData = () => {
		if (entries && entries.length > 3) {
			// data
			const data = [["Activity", "Mood", "Energy"]];
			const overallAverage = EmotionMap.average(entries);
			data.push(["overall", overallAverage.x, overallAverage.y]);
			activities.forEach((factor) => {
				const factorAverage = EmotionMap.filteredAverage(entries, factor.activity);
				data.push([factor.label, factorAverage.x, factorAverage.y]);
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

	// random factor statement
	const calculateRandomEffect = () => {
		if (entries && entries.length > 3) {
			let effect = null;
			let randomFactor = "";
			do {
				randomFactor = activities[Math.floor(Math.random() * activities.length)].activity;
				effect = EmotionMap.differential(entries, randomFactor);
			} while (!effect);
			return { ...effect, factor: randomFactor };
		} else {
			return null;
		}
	};
	const randomEffect = calculateRandomEffect();

	return (
		<div>
			{chartData && randomEffect ? (
				<>
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

					<div className="container">
						<h3 style={{ color: "#BFE2FF", textAlign: "center" }}>
							<em>
								Overall you feel <strong>{randomEffect.positivity}</strong> and have <strong>{randomEffect.energy}</strong> energy on days you{" "}
								{randomEffect.factor}!
							</em>
						</h3>

						<br />
						<br />
						<br />
					</div>
				</>
			) : (
				<div className="container">
					<h3 style={{ color: "#FFC300", textAlign: "center" }}>You need to log a few more entries to see trends!</h3>
					<h5 style={{ color: "#BFE2FF", textAlign: "center" }}>Charts are enabled after four entries.</h5>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			)}
		</div>
	);
}

export default ViewActivity;
