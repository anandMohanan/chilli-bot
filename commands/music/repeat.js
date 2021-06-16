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
  const repeatMode = client.player.getQueue(message).repeatMode;

  if (repeatMode) {
    client.player.setRepeatMode(message, false);
    let repeatEmbed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription("`Repeat mode disabled `");
    return message.channel.send(repeatEmbed);
  } else {
    client.player.setRepeatMode(message, true);
    let repeatEEmbed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription("`Repeat mode enabled `");
    return message.channel.send(repeatEEmbed);
  }
};
exports.help = {
  name: "repeat",
  description: "Loops through the currently playing song",
  usage: "repeat",
  example: "repeat",
};

exports.conf = {
  aliases: ["loop"],
  cooldown: 0,
};
