const Discord = require("discord.js");
const { Calculator } = require("weky");

exports.run = async (client, message, args) => {
  await Calculator({
    message: message,
    embed: {
      title: "Calculator ",
      color: "#674AB3",
    },
    disabledQuery: "Calculator is disabled!",
    invalidQuery: "The provided equation is invalid!",
    othersMessage: "Only <@{{author}}> can use the buttons!",
  });
};

exports.help = {
  name: "calculator",
  description: "calculator",
  usage: "calc",
  example: "calc",
};

exports.conf = {
  aliases: ["calc"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
