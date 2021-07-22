const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("MANAGE_CHANNELS") ||
    !message.member.hasPermission("MANAGE_GUILD")
  ) {
    let givenperm = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription(`You dont have enough permissions to use this command`);
    return message.lineReply(givenperm);
  }

  if (!args[0]) {
    let givenarg = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription("Please provide a message ID to the giveaway!");
    return message.lineReply(givenarg);
  }
  try {
    const ended = await client.giveaways.endGiveaway(args.join(" "));
    if (!ended) {
      let givenfail = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription("This giveaway has already ended");
      return message.lineReply(givenfail);
    } else {
      let givendone = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription("Ended the giveaway");
      message.lineReply(givendone);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: "gend",
  description: "End a giveaway",
  usage: "?gend <messageID>",
  example: "=greroll 764766765454564",
};

exports.conf = {
  aliases: ["gend"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
