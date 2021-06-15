const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    const body = await fetch("https://api.thecatapi.com/v1/images/search");
    const catImage = await body.json();
    const finalImg = await catImage[0].url;
    const catImg = new MessageEmbed()
      .setImage(finalImg)
      .setColor("#ff0000")
      .setTimestamp();
    message.channel.send(catImg);
  } catch (err) {}
};
exports.help = {
  name: "cat",
  description: "cutee poosies",
  usage: "cat",
  example: "cat",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
