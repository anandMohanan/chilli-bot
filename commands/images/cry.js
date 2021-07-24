const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    let data = await random.getAnimeImgURL("cry");
    const cryEmb = new MessageEmbed()
      .setImage(data)
      .setTimestamp()
      .setColor("#64CFF7");
    message.lineReply(cryEmb);
  } catch (err) {}
};
exports.help = {
  name: "cry",
  description: "cry AAAAAA",
  usage: "cry",
  example: "cry",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
