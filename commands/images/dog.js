const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const img = (await res.json()).message;
    const embed = new MessageEmbed()

      .setImage(img)

      .setTimestamp()
      .setColor("#ff0000");
    message.channel.send(embed);
  } catch (err) {
    message.client.logger.error(err.stack);
    this.sendErrorMessage(
      message,
      1,
      "Please try again in a few seconds",
      err.message
    );
  }
};

exports.help = {
  name: "dog",
  description: "cute doggos",
  usage: "dog",
  example: "dog",
};

exports.conf = {
  aliases: ["doggo"],
  cooldown: 0,
};
