// Global
import React from "react";
import Graph from "../../assets/graph.png";
import EmotionMap from "../../utils/EmotionMap";

// Export function
function ViewTime({ entries }) {
	// get growth trend of data
	const getTrend = (entries) => {
		const trend = EmotionMap.growth(entries);
		return trend;
	};

	return (
		<body style={{ backgroundColor: "#BFE2FF" }}>
			<div class="flexbox-container" style={{ backgroundColor: "white" }}>
				<div
					class="image-container"
					style={{ textAlign: "center", alignContent: "center" }}>
					<img
						alt="logo"
						src={Graph}
						width="350"
						className="d-inline-block mr-2"
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
		</body>
	);
}

export default ViewTime;
