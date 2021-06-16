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
  client.player.pause(message);
  let pauseEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `\`Song ${client.player.getQueue(message).playing.title} **paused** \``
    );
  await message.channel.send(pauseEmbed);
};

exports.help = {
  name: "pause",
  description: "Pauses the currently playing song",
  usage: "pause",
  example: "pause",
};

exports.conf = {
  aliases: ["pau"],
  cooldown: 0,
};
