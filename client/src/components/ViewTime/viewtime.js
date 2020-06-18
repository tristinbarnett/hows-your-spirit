// Global
import React from "react";
import Graph from "../../assets/graph.png";
// Export function
function ViewTime() {
    return (
		<body style={{ backgroundColor: '#BFE2FF' }}>
			<div class="flexbox-container" style={{ backgroundColor: 'white' }}>
				
				<div class="image-container" style={{ textAlign: "center", alignContent: "center" }}>

					<img
						alt="logo"
						src={Graph}
						width="350"
						className="d-inline-block mr-2"
					/>
				</div>
				<br />
				<div class="container" style={{ paddingBottom: "15px" }}>
					<span><h3 style={{ color: '#007bff' }}>Mood:</h3></span>
					<h2 style={{ color: '#FFC300' }}>Is trending: UP!</h2>
					<br />

					<span><h3 style={{ color: '#007bff' }}>Energy:</h3></span>
					<h2 style={{ color: '#BFE2FF' }}>Is trending: DOWN.</h2>


				</div>


				
			</div>
		</body>
	)

}

export default ViewTime;
