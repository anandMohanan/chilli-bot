const Discord = require("discord.js");
const {WillYouPressTheButton} = require("weky");
exports.run = async (client, message, args) => {
await WillYouPressTheButton({
	message: message,
	embed: {
		title: 'Will you press the button?',
		description: '```{{statement1}}```\n**but**\n\n```{{statement2}}```',
		color: '#674AB3',
		timestamp: true,
	},
	button: { yes: 'Yes', no: 'No' },
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
});
};

exports.help = {
  name: "WillYouPressTheButton",
  description: "WillYouPressTheButton",
  usage: "wypb",
  example: "wypb",
};

exports.conf = {
  aliases: ["wypb"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
