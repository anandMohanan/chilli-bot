const Discord = require("discord.js");
const { LieSwatter } = require("weky");
exports.run = async (client, message, args) => {
  await LieSwatter({
    message: message,
    embed: {
      title: "Lie Swatter ",
      color: "#674AB3",
      timestamp: true,
    },
    thinkMessage: "I am thinking",
    winMessage:
      "GG, It was a **{{answer}}**. You got it correct in **{{time}}**.",
    loseMessage: "Better luck next time! It was a **{{answer}}**.",
    othersMessage: "Only <@{{author}}> can use the buttons!",
    buttons: { true: "Truth", lie: "Lie" },
  });
};

exports.help = {
  name: "LieSwatter",
  description: "LieSwatter",
  usage: "ls",
  example: "ls",
};

exports.conf = {
  aliases: ["ls"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
