const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let joinVcfirstembed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription("`You need to join a voice channel first!`");
    return message.channel.send(joinVcfirstembed).then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  if (!client.player.getQueue(message)) {
    let nomusicembed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription("`No music playing on this server `");
    return message.channel.send(nomusicembed).then((msg) => {
      msg.delete({ timeout: 8000 });
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
  let volumeembed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`Volume set to **${args.join(" ")}%** `);
  message.channel.send(volumeembed);
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
