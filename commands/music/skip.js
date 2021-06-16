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
  client.player.skip(message);
  let skipEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`\`${message.author.tag}  skipped the song\``);
  message.channel.send();
};

exports.help = {
  name: "skip",
  description: "Skips the currently playing song",
  usage: "skip",
  example: "skip",
};

exports.conf = {
  aliases: ["next"],
  cooldown: 0,
};
