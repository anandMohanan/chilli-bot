const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't punch nobody").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    let user = message.mentions.users.first();
    console.log(user.username);
    let data = await random.getAnimeImgURL("punch");
    const punchEmb = new MessageEmbed()
      .setTitle(`${message.author.username} punched ${user.username}`)
      .setImage(data)
      .setColor("#ff0000")
      .setTimestamp();
    message.channel.send(punchEmb);
  } catch (err) {}
};
exports.help = {
  name: "punch",
  description: "punch the mentioned user",
  usage: "punch [@user]",
  example: "punch @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
