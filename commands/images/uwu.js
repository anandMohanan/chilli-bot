const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const DIG = require("discord-image-generation");

exports.run = async (client, message, args) => {
  try {
    if (message.mentions.users.size < 1)
      return message.channel.send("mention a person").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    let user = message.mentions.users.first();

    let img2 = user.displayAvatarURL({ dynamic: false, format: "png" });

    let img1 = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    //let jakfh = new Discord.MessageAttachment(img1, "fdgdfg.png");
    //let jhjhg = new Discord.MessageAttachment(img2, "hjfgfd.png");
    //message.channel.send(jakfh);
    //message.channel.send(jhjhg);
    let image = await new DIG.Kiss().getImage(img1, img2);
    let attach = new Discord.MessageAttachment(image, "kiss.png");
    return await message.channel.send(attach);
  } catch (err) {
    console.log(err);
  }
};
exports.help = {
  name: "uwu",
  description: "uwu the mentioned user",
  usage: "uwu [@user]",
  example: "uwu @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
