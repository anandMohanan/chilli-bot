const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message
      .reply("`You need to join a voice channel first!`")
      .then((msg) => {
        msg.delete({ timeout: 10000 });
      });
  }
  if (!client.player.getQueue(message)) {
    return message.channel
      .send("`Nothing playing in this server`")
      .then((msg) => {
        msg.delete({ timeout: 10000 });
      });
  }
  if (!args[0]) {
    return message.channel.send("`Please enter a number `").then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
  if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) {
    return message.channel
      .send("`Please use a number between 0 - 100.`")
      .then((msg) => {
        msg.delete({ timeout: 20000 });
      })
      .catch(console.error);
  }
  if (
    message.content.includes("-") ||
    message.content.includes("+") ||
    message.content.includes(",") ||
    message.content.includes(".")
  ) {
    return message.reply("`Please use a number to set volume.`").then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
  client.player.setVolume(message, parseInt(args.join(" ")));
  message.channel.send(`Volume set to **${args.join(" ")}%** `);
};

exports.help = {
  name: "volume",
  description: "Increases or decreases the volume",
  usage: "volume [percentage value]",
  example: "volume 40",
};

exports.conf = {
  aliases: ["v"],
  cooldown: 0,
};
