const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  console.log(client.config.owners[0]);
  if (user.id === client.config.owners[0]) {
    let roastAnnan = new Discord.MessageEmbed()
      .setColor("#A348A6")
      .setDescription("How dare you roast annan!!!!!!!");
    return message.lineReply(roastAnnan);
  }
  if (user.id === message.author.id) {
    let roastMention = new Discord.MessageEmbed()
      .setColor("#A348A6")
      .setDescription("You can not roast yourself");
    return message.lineReply(roastMention);
  }
  if (message.mentions.users.size < 1) {
    let roastArg = new Discord.MessageEmbed()
      .setColor("#A348A6")
      .setDescription("You must mention someone to roast them.");
    return message.lineReply(roastArg);
  }
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
