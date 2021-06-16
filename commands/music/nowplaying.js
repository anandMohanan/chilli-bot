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
  const track = await client.player.nowPlaying(message);

  let npSet = new MessageEmbed()
    .setTitle(track.title)
    .setThumbnail(track.thumbnail)
    .setColor("#ff0000 ")
    .addFields(
      { name: "Channel", value: track.author, inline: true },
      {
        name: "Requested by",
        value: track.requestedBy.username,
        inline: true,
      },
      {
        name: "From playlist",
        value: track.fromPlaylist ? "Yes" : "No",
        inline: true,
      },
      {
        name: "Progress bar",
        value: client.player.createProgressBar(message, { timecodes: false }),
        inline: true,
      }
    )

    .setTimestamp();
  message.channel.send(npSet);
};

exports.help = {
  name: "now playing",
  description: "Shows the now playing song",
  usage: "nowplaying",
  example: "nowplaying",
};

exports.conf = {
  aliases: ["np"],
  cooldown: 0,
};
