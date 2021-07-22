const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("MANAGE_CHANNELS") ||
    !message.member.hasPermission("MANAGE_GUILD")
  ) {
    let givreperm = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription(`You dont have enough permissions to use this command`);
    return message.lineReply(givreperm);
  }

  if (!args[0]) {
    let givrearg = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription("Please provide a message ID to the giveaway!");
    return message.lineReply(givrearg);
  }
  try {
    const rerolled = await client.giveaways.rerollGiveaway(args.join(" "));
    if (!rerolled) {
      let givrefail = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription("This giveaway hasn't ended");
      return message.lineReply(givrefail);
    } else {
      let givredone = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription("Rerolled the giveaway");
      message.lineReply(givredone);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: "greroll",
  description: "Reroll a giveaway",
  usage: "=greroll <messageID>",
  example: "=greroll 764766765454564",
};

exports.conf = {
  aliases: ["gr"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
