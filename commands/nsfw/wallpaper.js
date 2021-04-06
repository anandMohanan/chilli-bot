/** @format */
const Discord = require("discord.js");
const NSFW = require("discord-nsfw");

exports.run = async (client, message, args) => {
  const nsfw = new NSFW();

  const image = await nsfw.wallpaper();
  const embed = new Discord.MessageEmbed().setColor("#FF1493").setImage(image);
  message.channel.send(embed);
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
