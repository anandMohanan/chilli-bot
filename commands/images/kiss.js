const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't kiss nobody").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    let user = message.mentions.users.first();
    console.log(user.username);
    let data = await random.getAnimeImgURL("kiss");
    const kissEmb = new MessageEmbed()
      .setTitle(
        `${user.username}, You got a kiss from ${message.author.username} ❤`
      )
      .setColor("#ff0000")
      .setImage(data)
      .setTimestamp();
    message.channel.send(kissEmb);
  } catch (err) {}
};
exports.help = {
  name: "kiss",
  description: "kiss the mentioned user",
  usage: "kiss [@user]",
  example: "kiss @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
