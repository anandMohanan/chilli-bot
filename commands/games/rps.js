const Discord = require("discord.js");
const {RockPaperScissors} = require("weky");
exports.run = async (client, message, args) => {
await RockPaperScissors({
	message: message,
	opponent: message.mentions.users.first(),
	embed: {
		title: 'Rock Paper Scissors',
		description: 'Press the button below to choose your element.',
		color: '#674AB3',
		timestamp: true,
	},
	buttons: {
		rock: 'Rock',
		paper: 'Paper',
		scissors: 'Scissors',
		accept: 'Accept',
		deny: 'Deny',
	},
	time: 60000,
	acceptMessage:
		'<@{{challenger}}> has challenged <@{{opponent}}> for a game of Rock Paper and Scissors!',
	winMessage: 'GG, <@{{winner}}> won!',
	drawMessage: 'This game is deadlock!',
	endMessage: "<@{{opponent}}> didn't answer in time. So, I dropped the game!",
	timeEndMessage:
		"Both of you didn't pick something in time. So, I dropped the game!",
	cancelMessage:
		'<@{{opponent}}> refused to have a game of Rock Paper and Scissors with you!',
	choseMessage: 'You picked {{emoji}}',
	noChangeMessage: 'You cannot change your selection!',
	othersMessage: 'Only {{author}} can use the buttons!',
	returnWinner: false,
});
};

exports.help = {
  name: "rps",
  description: "rock paper scissors",
  usage: "rps",
  example: "rps",
};

exports.conf = {
  aliases: ["rps"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
