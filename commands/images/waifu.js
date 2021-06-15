const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    let data = await random.getAnimeImgURL("waifu");
    const waifuEmbed = new MessageEmbed()
      .setTitle(":)")
      .setColor("#ff0000")
      .setImage(data)
      .setTimestamp();
    message.channel.send(waifuEmbed);
  } catch (err) {
    console.log(err);
  }
};
exports.help = {
  name: "waifu",
  description: "random waifu image",
  usage: "waifu",
  example: "waifu",
};

exports.conf = {
  aliases: ["wa"],
  cooldown: 0,
};
