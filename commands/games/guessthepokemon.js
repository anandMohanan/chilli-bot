const Discord = require("discord.js");
const { GuessThePokemon } = require("weky");
exports.run = async (client, message, args) => {
  await GuessThePokemon({
    message: message,
    embed: {
      title: "Guess The Pokémon",
      description:
        "**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nYou only have **{{time}}** to guess the pokémon.",
      color: "#674AB3",
      timestamp: true,
    },
    thinkMessage: "I am thinking",
    othersMessage: "Only <@{{author}}> can use the buttons!",
    winMessage:
      "GG, It was a **{{answer}}**. You got it correct in **{{time}}**.",
    loseMessage: "Better luck next time! It was a **{{answer}}**.",
    time: 60000,
    incorrectMessage: "No {{author}}! The pokémon isn't `{{answer}}`",
    buttonText: "Cancel",
  });
};

exports.help = {
  name: "GuessThePokemon",
  description: "GuessThePokemon",
  usage: "gtp",
  example: "gtp",
};

exports.conf = {
  aliases: ["gtp"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
