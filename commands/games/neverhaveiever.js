const Discord = require("discord.js");
const {NeverHaveIEver} = require("weky");
exports.run = async (client, message, args) => {
  await NeverHaveIEver({
	message: message,
	embed: {
		title: 'Never Have I Ever',
		color: '#674AB3',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Yes', optionB: 'No' },
});
};

exports.help = {
  name: "NeverHaveIEver",
  description: "neverhaveiever",
  usage: "nhie",
  example: "nhie",
};

exports.conf = {
  aliases: ["nhie"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
