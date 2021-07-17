const Discord = require("discord.js");
const {Trivia} = require("weky");
exports.run = async (client, message, args) => {
await Trivia({
	message: message,
	embed: {
		title: 'Trivia',
		description: 'You only have **{{time}}** to guess the answer!',
		color: '#674AB3',
		timestamp: true,
	},
	difficulty: 'hard',
	thinkMessage: 'I am thinking',
	winMessage:
		'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
	loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
	emojis: {
		one: '1️⃣',
		two: '2️⃣',
		three: '3️⃣',
		four: '4️⃣',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	returnWinner: false,
});
};

exports.help = {
  name: "Trivia",
  description: "Trivia",
  usage: "trivia",
  example: "trivia",
};

exports.conf = {
  aliases: ["trivia"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
