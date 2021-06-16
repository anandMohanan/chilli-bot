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
  if (!args[0]) {
    let nomusicembed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription("`No music playing on this server `");
    return message.channel.send(nomusicembed).then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  client.player.play(message, args.join(" "));
};

exports.help = {
  name: "play",
  description: "Plays the given song",
  usage: "play [song name]",
  example: "play golden",
};

exports.conf = {
  aliases: ["p"],
  cooldown: 0,
};
