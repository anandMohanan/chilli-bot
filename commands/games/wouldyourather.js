const Discord = require("discord.js");
const {WouldYouRather} = require("weky");
exports.run = async (client, message, args) => {
await WouldYouRather({
	message: message,
	embed: {
		title: 'Would you rather...',
		color: '#674AB3',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Option A', optionB: 'Option B' },
});
};

exports.help = {
  name: "WouldYouRather",
  description: "WouldYouRather",
  usage: "wyr",
  example: "wyr",
};

exports.conf = {
  aliases: ["wyr"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
