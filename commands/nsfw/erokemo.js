/** @format */

const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const { MessageButton } = require("discord-buttons");
exports.run = async (client, message, args) => {
  const nsfw = new NSFW();
  if (message.channel.nsfw) {
    const image = await nsfw.erokemo();
    const embed = new Discord.MessageEmbed().setColor("RED").setImage(image);
    message.channel.send(embed);
  } else {
    message.channel.send("This channel is SFW.");
  }
};

exports.help = {
  name: "erokemo",
  description: "erokemo",
  usage: "erokemo",
  example: "erokemo",
};

exports.conf = {
  aliases: [""],
};
