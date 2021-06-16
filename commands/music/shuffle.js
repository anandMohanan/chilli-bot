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
  client.player.shuffle(message);
  let resumeEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `\`${message.author.tag} shuffled the queue.\nQueue shuffled **${
        client.player.getQueue(message).tracks.length
      }** song(s) \``
    );
  return message.channel.send(resumeEmbed);
};

exports.help = {
  name: "shuffle",
  description: "Shuffles the whole queue",
  usage: "shuffle",
  example: "shuffle",
};

exports.conf = {
  aliases: ["mix"],
  cooldown: 0,
};
