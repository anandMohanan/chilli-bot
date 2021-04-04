/** @format */

const Discord = require("discord.js");
const NSFW = require("discord-nsfw");

exports.run = async (client, message, args) => {
  const nsfw = new NSFW();
  if (message.channel.nsfw) {
    const image = await nsfw.hentaithigh();
    const embed = new Discord.MessageEmbed().setColor("RED").setImage(image);
    message.channel.send(embed);
  } else {
    message.channel.send("This channel is SFW.");
  }
};

exports.help = {
  name: "hentaithigh",
  description: "hentaithigh",
  usage: "hentaithigh",
  example: "hentaithigh",
};

exports.conf = {
  aliases: [""],
};
