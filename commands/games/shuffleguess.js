const Discord = require("discord.js");
const {ShuffleGuess} = require("weky");
exports.run = async (client, message, args) => {
await ShuffleGuess({
	message: message,
	embed: {
		title: 'Shuffle Guess',
		color: '#674AB3',
		timestamp: true,
	},
	word: ['voice'],
	button: { cancel: 'Cancel', reshuffle: 'Reshuffle' },
	startMessage:
		'I shuffled a word it is **`{{word}}`**. You have **{{time}}** to find the correct word!',
	winMessage:
		'GG, It was **{{word}}**! You gave the correct answer in **{{time}}.**',
	loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
	incorrectMessage: "No {{author}}! The word isn't `{{answer}}`",
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	time: 60000,
});
};

exports.help = {
  name: "ShuffleGuess",
  description: "ShuffleGuess",
  usage: "sg",
  example: "sg",
};

exports.conf = {
  aliases: ["sg"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
