const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    let data = await random.getAnimeImgURL("smug");
    const smugEmbed = new MessageEmbed()
      .setTitle(":D")
      .setImage(data)
      .setColor("#ff0000")
      .setTimestamp();
    message.channel.send(smugEmbed);
  } catch (err) {}
};
exports.help = {
  name: "smug",
  description: "smug",
  usage: "smug",
  example: "smug",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
