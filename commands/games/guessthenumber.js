const Discord = require("discord.js");
const { GuessTheNumber } = require("weky");

exports.run = async (client, message, args) => {
  let randomNumber = Math.floor(Math.random() * 1000);
  console.log(randomNumber)
  await GuessTheNumber({
    message: message,
    embed: {
      title: "Guess The Number ",
      description: "You have **{{time}}** to guess the number.",
      color: "#674AB3",
      timestamp: true,
    },
    publicGame: true,
    number: randomNumber,
    time: 60000,
    winMessage: {
      publicGame:
        "GG, The number which I guessed was **{{number}}**. <@{{winner}}> made it in **{{time}}**.\n\n__**Stats of the game:**__\n**Duration**: {{time}}\n**Number of participants**: {{totalparticipants}} Participants\n**Participants**: {{participants}}",
      privateGame:
        "GG, The number which I guessed was **{{number}}**. You made it in **{{time}}**.",
    },
    loseMessage:
      "Better luck next time! The number which I guessed was **{{number}}**.",
    bigNumberMessage:
      "No {{author}}! My number is greater than **{{number}}**.",
    smallNumberMessage:
      "No {{author}}! My number is smaller than **{{number}}**.",
    othersMessage: "Only <@{{author}}> can use the buttons!",
    buttonText: "Cancel",
    ongoingMessage:
      "A game is already runnning in <#{{channel}}>. You can't start a new one!",
    returnWinner: false,
  });
};

exports.help = {
  name: "guessTheNumber",
  description: "guess the number",
  usage: "gtn",
  example: "gtn",
};

exports.conf = {
  aliases: ["gtn"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
