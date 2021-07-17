/** @format */

const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (
    message.member.hasPermission("ADMINISTRATOR") ||
    message.member.hasPermission("MANAGE_MESSAGES")
  ) {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      let purgeNan = new Discord.MessageEmbed()
        .setColor("#CEA2D7")
        .setDescription(`that doesn't seem to be a valid number.`);
      return message.lineReply(purgeNan).then((msg) => {
        msg.delete({ timeout: 20000 });
      });
    } else if (amount <= 1 || amount > 100) {
      let purgelimit = new Discord.MessageEmbed()
        .setColor("#CEA2D7")
        .setDescription(`you need to input a number between 1 and 99.`);
      return message.lineReply(purgelimit);
    }

    message.channel.bulkDelete(amount, true);
    try {
      let purgedone = new Discord.MessageEmbed()
        .setColor("#CEA2D7")
        .setDescription(`${amount} messages deleted`);
      message.lineReply(purgedone).then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    } catch (err) {
      let purgerror = new Discord.MessageEmbed()
        .setColor("#CEA2D7")
        .setDescription(
          `there was an error trying to prune messages in this channel!`
        );
      message.lineReply(purgerror).then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    }
  } else {
    let purgeperm = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`Access Denied`);
    message.lineReply(purgeperm).then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
};

exports.help = {
  name: "purge",
  description: "deletes the messages",
  usage: "purge",
  example: "purge 10",
};

exports.conf = {
  aliases: ["prune"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
