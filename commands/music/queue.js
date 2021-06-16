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
  const queue = client.player.getQueue(message);

  if (!queue) {
    let nomusicembed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription("`No music playing on this server `");
    return message.channel.send(nomusicembed).then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }

  let queueSet = new MessageEmbed()
    .setTimestamp()
    .setTitle(`Song Queue`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(
      `**Server queue - ${message.guild.name} **\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
        (queue.tracks
          .map((track, i) => {
            return `**${i + 1}** - ${track.title} `;
          })
          .slice(0, 5)
          .join("\n") +
          `\n\n${
            queue.tracks.length > 5
              ? `And **${queue.tracks.length - 5}** other songs...`
              : ``
          }`)
    )
    .setColor("#ff0000 ");

  message.channel.send(queueSet);
};

exports.help = {
  name: "queue",
  description: "Shows the queue",
  usage: "queue",
  example: "queue",
};

exports.conf = {
  aliases: ["q"],
  cooldown: 0,
};
