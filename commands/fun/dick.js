const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    let randomNumber = Math.floor(Math.random() * 18);
    const cockSize = randomNumber;
    const balls = "8";
    const shaft = "=".repeat(cockSize);
    const head = "D";
    const cock = balls + shaft + head;
    let pingEmbed = new Discord.MessageEmbed()
      .setColor("#A348A6")
      .setAuthor(`${cockSize} inch(es)`)
      .setDescription(cock);
    message.lineReplyNoMention(pingEmbed);
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: "dick",
  description: "Returns a random-sized cock (not real).",
  usage: "dick",
  example: "dick",
};

exports.conf = {
  aliases: ["cock", "penis", "pp", "chode", "weiner", "dicksize", "ppsize"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
