const Discord = require("discord.js");
const {QuickClick} = require("weky");
exports.run = async (client, message, args) => {
 await QuickClick({
	message: message,
	embed: {
		title: 'Quick Click',
		color: '#674AB3',
		timestamp: true,
	},
	time: 60000,
	waitMessage: 'The buttons may appear anytime now!',
	startMessage:
		'First person to press the correct button will win. You have **{{time}}**!',
	winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
	loseMessage: 'No one pressed the button in time. So, I dropped the game!',
	emoji: '👆',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!",
});
};

exports.help = {
  name: "QuickClick",
  description: "QuickClick",
  usage: "qc",
  example: "qc",
};

exports.conf = {
  aliases: ["qc"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
