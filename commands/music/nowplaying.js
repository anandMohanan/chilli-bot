const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel
      .send("`You need to join a voice channel first!`")
      .then((msg) => {
        msg.delete({ timeout: 8000 });
      });
  }
  if (!client.player.getQueue(message)) {
    return message.channel
      .send("`No music playing on this server `")
      .then((msg) => {
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
