const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let randomUser = message.guild.members.cache.random().user;
  const affinity = Math.round(Math.random() * 100);
  console.log(client.config.owners[0]);
  if (!args[0]) {
    // let loveMention = new Discord.MessageEmbed()
    //   .setColor("#A348A6")
    //   .setDescription(
    //     `${user.username} is a ${affinity}% match for ${message.author.username}`
    //   );
    // return message.lineReply(loveMention);
    let loveNoMention = new Discord.MessageEmbed()
      .setTitle("💖 ,love affinity")
      .setColor("#A348A6")
      .setDescription(
        `
        💖${randomUser} is a ${affinity}% match for ${message.author.username}
        `
      );
    return message.lineReply(loveNoMention);
  }
  if (user.id === client.config.owners[0]) {
    let roastAnnan = new Discord.MessageEmbed()
      .setColor("#A348A6")
      .setDescription("No.");
    return message.lineReply(roastAnnan);
  }
  if (user.id === message.author.id) {
    let loveMention = new Discord.MessageEmbed()
      .setTitle("💖 ,love affinity")
      .setColor("#A348A6")
      .setDescription(
        `
        💖${user.username} is a ${affinity}% match for ${message.author.username}
        `
      );
    return message.lineReply(loveMention);
  }
  let loveMention = new Discord.MessageEmbed()
    .setTitle("💖 ,love affinity")
    .setColor("#A348A6")
    .setDescription(
      `
      💖${user} is a ${affinity}% match for ${message.author.username} 
      `
    );
  return message.lineReply(loveMention);
};

exports.help = {
  name: "love",
  description:
    "Returns the love affinity between you and another user, or a random user.",
  usage: "love [@user]",
  example: "love @kevin malone",
};

exports.conf = {
  aliases: ["affinity"],
  cooldown: 0,
};
