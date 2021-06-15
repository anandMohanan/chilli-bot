const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    let data = await random.getNeko();
    const img = data.embed.image.url;

    const imgEmbed = new MessageEmbed()
      .setTitle("UwU")
      .setImage(img)
      .setColor("#ff0000")
      .setTimestamp();
    message.channel.send(imgEmbed);
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: "neko",
  description: "random neko image",
  usage: "neko",
  example: "neko",
};

exports.conf = {
  aliases: ["ne"],
  cooldown: 0,
};
