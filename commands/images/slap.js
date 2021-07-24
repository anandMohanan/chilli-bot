const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    if (message.mentions.users.size < 1)
      return message.lineReply("you can't slap nobody").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    let user = message.mentions.users.first();
    console.log(user.username);
    let data = await random.getAnimeImgURL("slap");
    const slapEmb = new MessageEmbed()
      .setTitle(`${message.author.username} slapped ${user.username}`)
      .setImage(data)
      .setColor("#64CFF7")
      .setTimestamp();
    message.lineReply(slapEmb);
  } catch (err) {}
};
exports.help = {
  name: "slap",
  description: "slaps the mentioned user",
  usage: "slap [@user]",
  example: "slpa @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
