/** @format */

const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (
    message.member.hasPermission("ADMINISTRATOR") ||
    message.member.hasPermission("MANAGE_MESSAGES")
  ) {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      return message
        .reply("`that doesn't seem to be a valid number.`")
        .then((msg) => {
          msg.delete({ timeout: 20000 });
        });
    } else if (amount <= 1 || amount > 100) {
      return message.reply("`you need to input a number between 1 and 99.`");
    }

    message.channel.bulkDelete(amount, true);
    try {
      message.channel.send(`\`${amount} messages deleted\``).then((msg) => {
        msg.delete({ timeout: 1000 });
      });
    } catch (err) {
      message.channel
        .send("`there was an error trying to prune messages in this channel!`")
        .then((msg) => {
          msg.delete({ timeout: 10000 });
        });
    }
  } else {
    message.channel.send("`Access Denied`").then((msg) => {
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
