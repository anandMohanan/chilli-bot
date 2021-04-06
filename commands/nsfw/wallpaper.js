/** @format */
const Discord = require("discord.js");
const NSFW = require("discord-nsfw");

exports.run = async (client, message, args) => {
  const nsfw = new NSFW();
  if (message.channel.nsfw) {
    const image = await nsfw.wallpaper();
    const embed = new Discord.MessageEmbed()
      .setColor("#FF1493")
      .setImage(image);
    message.channel.send(embed);
  } else {
    message.channel.send("This channel is SFW.");
  }
};

exports.help = {
  name: "wallpaper",
  description: "wallpaper",
  usage: "wallpaper",
  example: "wallpaper",
};

exports.conf = {
  aliases: ["wall"],
};
