const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.mentions.users === message.author.username)
    return message.lineReply("You can not roast yourself");
  if (message.mentions.users.size < 1)
    return message.lineReply("You must mention someone to roast them.");

  let body = await fetch(
    "https://evilinsult.com/generate_insult.php?lang=en&type=json"
  );
  let roast = await body.json();
  let roastEmbed = new Discord.MessageEmbed()
    .setColor("#A348A6")
    .setDescription(user.username + ", " + roast.insult);
  await message.lineReplyNoMention(roastEmbed);
};

exports.help = {
  name: "roast",
  description: "roasts the mentioned user",
  usage: "roast [@user]",
  example: "roast @kevin malone",
};

exports.conf = {
  aliases: ["insult"],
  cooldown: 0,
};
