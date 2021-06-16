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
  client.player.setRepeatMode(message, false);
  client.player.stop(message);
  let stopembed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`\`${message.author.tag}  stopped the music!\``);
  message.channel.send(stopembed);
};

exports.help = {
  name: "stop",
  description: "Stops the whole queue and the bot will leave the vc",
  usage: "stop",
  example: "stop",
};

exports.conf = {
  aliases: ["leave"],
  cooldown: 0,
};
