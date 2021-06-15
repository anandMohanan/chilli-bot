const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const lyricsFinder = require("lyrics-finder");

exports.run = async (client, message, args) => {
  let songName = args.join(" ");
  try {
    lyrics = await lyricsFinder(songName, "");
    if (!lyrics) lyrics = `No lyrics found for ${songName}`;
  } catch (error) {
    lyrics = `No lyrics found for ${songName}.`;
  }

  let lyricsEmbed = new MessageEmbed()
    .setAuthor(`${songName} — Lyrics`)
    .setColor("#ff0000")
    .setDescription(`\`${lyrics}\``)

    .setTimestamp();

  if (lyricsEmbed.description.length >= 2048)
    lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
  return message.channel.send(lyricsEmbed).catch(console.error);
};
exports.help = {
  name: "lyrics",
  description: "lyrics of the given song",
  usage: "lyrics",
  example: "lyrics golden",
};

exports.conf = {
  aliases: ["ly"],
  cooldown: 10, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
