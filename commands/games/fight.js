const Discord = require("discord.js");
const { Fight } = require("weky");
exports.run = async (client, message, args) => {
  if (!message.mentions.users.first()) {
    message.channel.send("Mention a user! || =fight @kevin");
  }
  await Fight({
    message: message,
    opponent: message.mentions.users.first(),
    embed: {
      title: "Fight",
      color: "#7289da",
      timestamp: true,
    },
    buttons: {
      hit: "Hit",
      heal: "Heal",
      cancel: "Stop",
      accept: "Accept",
      deny: "Deny",
    },
    acceptMessage:
      "<@{{challenger}}> has challenged <@{{opponent}}> for a fight!",
    winMessage: "GG, <@{{winner}}> won the fight!",
    endMessage:
      "<@{{opponent}}> didn't answer in time. So, I dropped the game!",
    cancelMessage: "<@{{opponent}}> refused to have a fight with you!",
    fightMessage: "{{player}} you go first!",
    opponentsTurnMessage: "Please wait for your opponents move!",
    highHealthMessage: "You cannot heal if your HP is above 80!",
    lowHealthMessage: "You cannot cancel the fight if your HP is below 50!",
    returnWinner: false,
    othersMessage: "Only {{author}} can use the buttons!",
  });
};

exports.help = {
  name: "fight",
  description: "fight",
  usage: "fight @user",
  example: "fight @kevin",
};

exports.conf = {
  aliases: [""],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
