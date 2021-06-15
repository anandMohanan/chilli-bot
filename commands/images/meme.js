const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    let res = await fetch("https://meme-api.herokuapp.com/gimme");
    res = await res.json();
    const embed = new MessageEmbed()
      .setTitle(res.title)
      .setImage(res.url)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
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
  name: "meme",
  description: "memes",
  usage: "meme",
  example: "meme",
};

exports.conf = {
  aliases: ["me"],
  cooldown: 0,
};
