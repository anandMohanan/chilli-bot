const Discord = require("discord.js");
const { FastType } = require("weky");
exports.run = async (client, message, args) => {
  await FastType({
    message: message,
    embed: {
      title: "FastType",
      description: "You have **{{time}}** to type the below sentence.",
      color: "#7289da",
      timestamp: true,
    },
    sentence: "This is a sentence!",
    winMessage:
      "GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.",
    loseMessage: "Better luck next time!",
    cancelMessage: "You ended the game!",
    time: 60000,
    buttonText: "Cancel",
    othersMessage: "Only <@{{author}}> can use the buttons!",
  });
};

exports.help = {
  name: "fasttype",
  description: "fast type",
  usage: "ft",
  example: "ft",
};

exports.conf = {
  aliases: ["ft"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
