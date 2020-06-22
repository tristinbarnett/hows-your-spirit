const self = (module.exports = {
	// emotions mapped to energy and mood levels
	feelings: [
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
	],

	// weights values mapped to duration
	weights: [
		{ w: 1, descriptor: "in passing" },
		{ w: 2, descriptor: "some of the day" },
		{ w: 3, descriptor: "much of the day" },
		{ w: 4, descriptor: "all day" },
	],

	// descriptors for mood
	mood: [
		{ x: 2, descriptor: "very positive" },
		{ x: 1, descriptor: "moderately positive" },
		{ x: 0, descriptor: "neutral" },
		{ x: -1, descriptor: "moderately negative" },
		{ x: -2, descriptor: "very negative" },
	],

	// descriptors for change in mood
	moodChange: {
		increase: "more positive",
		decrease: "more negative",
	},

	// descriptors for energy
	energy: [
		{ y: 2, descriptor: "very high" },
		{ y: 1, descriptor: "moderately high" },
		{ y: 0, descriptor: "neutral" },
		{ y: -1, descriptor: "moderately low" },
		{ y: -2, descriptor: "very low" },
	],

	// descriptors for change in energy
	energyChange: { increase: "higher", decrease: "lower" },

	// factors to be tracked with chart labels and intital state
	factorsTracked: [
		{ activity: "eat healthy meals", label: "diet", state: false },
		{ activity: "exercise at least 30 minutes", label: "exercise", state: false },
		{ activity: "get at least 8 hours of sleep", label: "sleep", state: false },
		{ activity: "drink alcohol", label: "alcohol", state: false },
	],

	// get emotion from x and y values
	emotion: (x, y) => {
		const feeling = self.feelings.find((feeling) => x === feeling.x && y === feeling.y);
		return feeling.emotion;
	},

	// get x and y values from emotion
	feeling: (emotion) => {
		const values = self.feelings.find((feeling) => emotion === feeling.emotion);
		return values;
	},

	// get descriptor for weight
	duration: (w) => {
		const duration = self.weights.find((weight) => w === weight.w);
		return duration.descriptor;
	},

	// get descriptors for mood and energy
	descriptors: (emotionData) => {
		const emotionPositivity = self.positivity.find((item) => item.x === Math.round(emotionData.x));
		const emotionEnergy = self.energy.find((item) => item.y === Math.round(emotionData.y));
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
		if (!entries.length) return { x: 0, y: 0 };
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
		const changedAverage = self.average(limitedEntries);
		const overallAverage = self.average(allEntries);

		// calculate using "percentage change"
		const percentChangeX = Math.round(((changedAverage.x - overallAverage.x) * 100) / overallAverage.x);
		const percentChangeY = Math.round(((changedAverage.y - overallAverage.y) * 100) / overallAverage.y);
		// return average x and y percentages
		return { x: percentChangeX, y: percentChangeY };
	},

	// helper function to get percentages
	percentages: (emotionObject) => {
		const positivity = Math.round(emotionObject.x * 50);
		const percentPositive = positivity >= 0 ? `${positivity}% ${self.moodChange.increase}` : `${Math.abs(positivity)}% ${self.moodChange.decrease}`;
		const energy = Math.round(emotionObject.y * 50);
		const percentEnergy = positivity >= 0 ? `${energy}% ${self.energyChange.increase}` : `${Math.abs(energy)}% ${self.energyChange.decrease}`;
		return { positivity: percentPositive, energy: percentEnergy };
	},

	// helper function to get growth trends
	growth: (entries) => {
		let xGrowth = 0;
		let yGrowth = 0;
		for (let i = 1; i < entries.length; i++) {
			const averageOne = self.average([entries[i - 1]]);
			const averageTwo = self.average([entries[i]]);
			xGrowth += averageTwo.x - averageOne.x;
			yGrowth += averageTwo.y - averageOne.y;
		}
		const xGrowthAverage = xGrowth / (entries.length - 1);
		const yGrowthAverage = yGrowth / (entries.length - 1);
		let growthPercentages = self.percentages({
			x: xGrowth / (entries.length - 1),
			y: yGrowth / (entries.length - 1),
		});
		console.log("growth%: ", growthPercentages);
		return growthPercentages;
	},

	// helper function to get differentials
	differential: (entries, effectFactor) => {
		// if filtered = 0 ???????
		const filtered = entries.filter((entry) => entry.factors.find((factor) => factor.activity === effectFactor && factor.state === true));
		console.log("filtered: ", filtered);
		// run comparison
		const comparison = self.compare(filtered, entries);
		// translate numbers to descriptors
		const positivityEffect = comparison.x >= 0 ? `${comparison.x}% ${self.moodChange.increase}` : `${Math.abs(comparison.x)}% ${self.moodChange.decrease}`;
		const energyEffect = comparison.y >= 0 ? `${comparison.y}% ${self.energyChange.increase}` : `${Math.abs(comparison.y)}% ${self.energyChange.decrease}`;
		return { positivity: positivityEffect, energy: energyEffect };
	},

	// helper function to get average of a filtered set of entries
	filteredAverage: (entries, effectFactor) => {
		// if filtered = 0 ???????
		const filtered = entries.filter((entry) => entry.factors.find((factor) => factor.activity === effectFactor && factor.state === true));
		console.log("filtered: ", filtered);
		const average = self.average(filtered);
		return average;
	},
});
