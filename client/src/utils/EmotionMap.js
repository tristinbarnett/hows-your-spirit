// descriptors for levels of positivity
const positivity = [
	{ x: 2, descriptor: "very positive" },
	{ x: 1, descriptor: "moderately positive" },
	{ x: 0, descriptor: "neutral" },
	{ x: -1, descriptor: "moderately negative" },
	{ x: -2, descriptor: "very negative" },
];

// descriptors for change in positivity
const positivityChange = {
	increase: "more positive",
	decrease: "more negative",
};

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

// descriptors for levels of energy
const weights = [
	{ w: 4, descriptor: "all day" },
	{ w: 3, descriptor: "much of the day" },
	{ w: 2, descriptor: "some of the day" },
	{ w: 1, descriptor: "in passing" },
];

// daily activities as factors
const factors = ["exercise", "get 8 hours of sleep", "drink alcohol"];

const emotionMap = {
	// get emotion from x and y values
	emotion: (x, y) => {
		const feeling = feelings.find(
			(feeling) => x === feeling.x && y === feeling.y
		);
		return feeling.emotion;
	},

	// get descriptor for weight
	duration: (w) => {
		const duration = weights.find((weight) => w === weight.w);
		return duration.descriptor;
	},

	// get list of factors
	factorArray: () => {
		return factors;
	},

	// get descriptors
	descriptors: (emotionData) => {
		const emotionPositivity = positivity.find(
			(item) => item.x === Math.round(emotionData.x)
		);
		const emotionEnergy = energy.find(
			(item) => item.y === Math.round(emotionData.y)
		);
		return {
			positivity: emotionPositivity.descriptor,
			energy: emotionEnergy.descriptor,
		};
	},

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
		const changedAverage = emotionMap.average(limitedEntries);
		const overallAverage = emotionMap.average(allEntries);
		console.log("limited, overall: ", changedAverage, overallAverage);

		// calculate using "percentage change"
		const percentChangeX = Math.round(
			((changedAverage.x - overallAverage.x) * 100) / overallAverage.x
		);
		const percentChangeY = Math.round(
			((changedAverage.y - overallAverage.y) * 100) / overallAverage.y
		);
		// return average x and y percentages
		return { x: percentChangeX, y: percentChangeY };
	},

	// helper function to get percentages
	percentages: (emotionObject) => {
		const positivity = Math.round(emotionObject.x * 50);
		const percentPositive =
			positivity >= 0
				? `${positivity}% ${positivityChange.increase}`
				: `${Math.abs(positivity)}% ${positivityChange.decrease}`;
		const energy = Math.round(emotionObject.y * 50);
		const percentEnergy =
			positivity >= 0
				? `${energy}% ${energyChange.increase}`
				: `${Math.abs(energy)}% ${energyChange.decrease}`;
		return { positivity: percentPositive, energy: percentEnergy };
	},

	// helper function to get growth trends
	growth: (entries) => {
		let xGrowth = 0;
		let yGrowth = 0;
		for (let i = 1; i < entries.length; i++) {
			const averageOne = emotionMap.average([entries[i - 1]]);
			const averageTwo = emotionMap.average([entries[i]]);
			xGrowth += averageTwo.x - averageOne.x;
			yGrowth += averageTwo.y - averageOne.y;
		}
		const xGrowthAverage = xGrowth / (entries.length - 1);
		const yGrowthAverage = yGrowth / (entries.length - 1);
		let growthPercentages = emotionMap.percentages({
			x: xGrowth / (entries.length - 1),
			y: yGrowth / (entries.length - 1),
		});
		console.log("growth%: ", growthPercentages);
		return growthPercentages;
	},

	// helper function to get differentials
	differential: (entries, factor) => {
		const filtered = entries.filter((entry) => entry.factors[factor]);
		// run comparison
		const comparison = emotionMap.compare(filtered, entries);
		// translate numbers to descriptors
		const positivityEffect =
			comparison.x >= 0
				? `${comparison.x}% ${positivityChange.increase}`
				: `${Math.abs(comparison.x)}% ${positivityChange.decrease}`;
		const energyEffect =
			comparison.y >= 0
				? `${comparison.y}% ${energyChange.increase}`
				: `${Math.abs(comparison.y)}% ${energyChange.decrease}`;
		return { positivity: positivityEffect, energy: energyEffect };
	},
};

module.exports = emotionMap;
