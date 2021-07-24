const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  try {
    const randomNumber = Math.round(Math.random());
    const ans = ["heads", "tails"];
    const embed = new MessageEmbed()
      .setTitle(ans[randomNumber])

      .setColor("#A348A6");
    message.lineReplyNoMention(embed);
  } catch (err) {
    console.log(err);
  }
};
exports.help = {
  name: "coin",
  description: "returns head or tail",
  usage: "=coin",
  example: "=coin?",
};

exports.conf = {
  aliases: ["flip", "coinflip"],
  cooldown: 0,
};
