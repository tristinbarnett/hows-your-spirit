// Global
import React from "react";
import { Button } from "react-bootstrap";
//import BtmLogo from "../assets/HYS-logo-lg.png";
// Page Content
function Learn() {
	return (
		<main style={{ backgroundColor: "#BFE2FF" }}>
			<div className="flexbox-container" style={{ backgroundColor: "white" }}>
				<div className="container" style={{ clear: "both" }}>
					<h2 style={{ color: "#FFC300", textAlign: "center" }}>Help Your Spirit!</h2>
					<h2 style={{ color: "#BFE2FF", textAlign: "center" }}>
						<em>Learn more about how the below factors can impact your mood.</em>
					</h2>
					<br />
				</div>
				<br />
				<div className="container">
					<Button color="primary" size="lg" block href="https://www.mdlinx.com/article/how-does-alcohol-affect-your-mood/lfc-3475" target="blank">
						Alcohol and Drugs
					</Button>
					<br />
					<Button
						outline
						color="primary"
						size="lg"
						block
						href="https://food.ndtv.com/health/world-health-day-7-foods-to-beat-depression-mood-swings-1678529"
						target="blank">
						Diet and Nutrition
					</Button>
					<br />
					<Button color="primary" size="lg" block href="https://adaa.org/living-with-anxiety/managing-anxiety/exercise-stress-and-anxiety" target="blank">
						Exercise
					</Button>
					<br />
					<Button outline color="primary" size="lg" block href="https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health" target="blank">
						Sleep
					</Button>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</main>
	);
}

export default Learn;
