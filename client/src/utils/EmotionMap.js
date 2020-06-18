// descriptors for levels of positivity
const positivity = [
	{ x: 2, descriptor: "very positive" },
	{ x: 1, descriptor: "moderately positive" },
	{ x: 0, descriptor: "neutral" },
	{ x: -1, descriptor: "moderately negative" },
	{ x: -2, descriptor: "very negative" },
];

// descriptors for change in positivity
const positivityChange = { increase: "more positive", decrease: "more negative" };

// descriptors for levels of energy
const energy = [
	{ y: 2, descriptor: "very high" },
	{ y: 1, descriptor: "moderately high" },
	{ y: 0, descriptor: "neutral" },
	{ y: -1, descriptor: "moderately low" },
	{ y: -2, descriptor: "very low" },
];

// descriptors for change in energy
const energyChange = { increase: "higher", decrease: "lower" };

// emotions mapped to energy and positivity levels
const feelings = [
	{ x: -2, y: 2, emotion: "angry" },
	{ x: -1, y: 2, emotion: "tense" },
	{ x: 1, y: 2, emotion: "surprised" },
	{ x: 2, y: 2, emotion: "excited" },

	{ x: -2, y: 1, emotion: "anxious" },
	{ x: -1, y: 1, emotion: "annoyed" },
	{ x: 1, y: 1, emotion: "happy" },
	{ x: 2, y: 1, emotion: "hopeful" },

	{ x: -2, y: -1, emotion: "disappointed" },
	{ x: -1, y: -1, emotion: "sad" },
	{ x: 1, y: -1, emotion: "calm" },
	{ x: 2, y: -1, emotion: "fulfilled" },

	{ x: -2, y: -2, emotion: "hopeless" },
	{ x: -1, y: -2, emotion: "drained" },
	{ x: 1, y: -2, emotion: "relaxed" },
	{ x: 2, y: -2, emotion: "peaceful" },
];

export default {
	// helper function to calculate averages
	average: (entries) => {
		// initialize total values
		let totalX = 0;
		let totalY = 0;
		let totalWeight = 0;
		// for each entry
		entries.forEach((entry) => {
			// add values from each emotion to total values
			entry.emotions.forEach((emotion) => {
				totalX += emotion.x * emotion.weight;
				totalY += emotion.y * emotion.weight;
				totalWeight += emotion.weight;
			});
		});
		// calculate averages
		const averageX = totalX / totalWeight;
		const averageY = totalY / totalWeight;
		// return average x and y values
		return { x: averageX, y: averageY };
	},

	// helper function to calculate percentage change
	compare: (limitedEntries, allEntries) => {
		const changedAverage = this.average(limitedEntries);
		const overallAverage = this.average(allEntries);
		// calculate using "percentage change"
		const percentChangeX = Math.round(
			((overallAverage.x - changedAverage.x) * 100) / overallAverage.x
		);
		const percentChangeY = Math.round(
			((overallAverage.y - changedAverage.y) * 100) / overallAverage.y
		);
		// return average x and y percentages
		return { x: percentChangeX, y: percentChangeY };
	},

	// helper function to get descriptors
	descriptors: (emotionData) => {
		const emotionPositivity = positivity.find((item) => item.x === Math.round(emotionData.x));
		const emotionEnergy = energy.find((item) => item.y === Math.round(emotionData.y));
		return { positivity: emotionPositivity.descriptor, energy: emotionEnergy.descriptor }
	},

	// helper function to get percentages
	percentages: (emotionData) => {
		const positivity = Math.round(emotionData.x * 50);
		const percentPositive = positivity >= 0 ? `${positivity}% positive` : `${Math.abs(positivity)}% negative`;
		const energy = Math.round(emotionData.y * 50);
		const percentEnergy = positivity >= 0 ? `${energy}% high energy` : `${Math.abs(energy)}% low energy`;
		return { positivity: percentPositive, energy: percentEnergy }
	}

}

// const compareToday = () => {
// 	// placeholder for get all entries and get dayOne
// 	const entries = [ dayOne, dayTwo, dayThree, dayFour ];
// 	const today = [ dayFour ];
// 	// run comparison
// 	const comparison = compare(today, entries);
// 	// translate numbers to descriptors
// 	let positivity =
// 		comparison.x >= 0
// 			? emotionMap.positivityChange.increase
// 			: emotionMap.positivityChange.decrease;
// 	let energy =
// 		comparison.y >= 0
// 			? emotionMap.energyChange.increase
// 			: emotionMap.energyChange.increase;
// 	let positivityChange = Math.abs(comparison.x).toString();
// 	let energyChange = Math.abs(comparison.y).toString();
// 	console.log(
// 		`Today your mood is **${positivityChange}% ${positivity}** and your energy is **${energyChange}% ${energy}** than usual.`
// 	);
// };
// compareToday();
