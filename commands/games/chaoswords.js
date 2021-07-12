const Discord = require("discord.js");
const { ChaosWords } = require("weky");
exports.run = async (client, message, args) => {
  await ChaosWords({
    message: message,
    embed: {
      title: "ChaosWords | Weky Development",
      description:
        "You have **{{time}}** to find the hidden words in the below sentence.",
      color: "#7289da",
      field1: "Sentence:",
      field2: "Words Found/Remaining Words:",
      field3: "Words found:",
      field4: "Words:",
      timestamp: false,
    },
    winMessage: "GG, You won! You made it in **{{time}}**.",
    loseMessage: "Better luck next time!",
    wrongWordMessage:
      "Wrong Guess! You have **{{remaining_tries}}** tries left.",
    correctWordMessage:
      "GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).",
    time: 60000,
    words: ["hello", "these", "are", "words"],
    charGenerated: 17,
    maxTries: 10,
    buttonText: "Cancel",
    othersMessage: "Only <@{{author}}> can use the buttons!",
  });
};

exports.help = {
  name: "chaoswords",
  description: "chaos words",
  usage: "chw",
  example: "chw",
};

exports.conf = {
  aliases: ["chw"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
