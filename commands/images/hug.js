const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't hug nobody").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    let user = message.mentions.users.first();
    let data = await random.getAnimeImgURL("hug");
    const hugEmb = new MessageEmbed()
      .setTitle(
        `${user.username}, You got a hug from ${message.author.username} ❤`
      )
      .setImage(data)
      .setColor("#ff0000")
      .setTimestamp();
    message.channel.send(hugEmb);
  } catch (err) {}
};
exports.help = {
  name: "hug",
  description: "hugs the mentioned user",
  usage: "hug [@user]",
  example: "hug @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
