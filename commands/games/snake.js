const Discord = require("discord.js");
const {Snake} = require("weky");
exports.run = async (client, message, args) => {
await Snake({
	message: message,
	embed: {
		title: 'Snake',
		description: 'GG, you scored **{{score}}** points!',
		color: '#674AB3',
		timestamp: true,
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel',
});
};

exports.help = {
  name: "snake",
  description: "snake",
  usage: "snake",
  example: "snake",
};

exports.conf = {
  aliases: ["snake"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
