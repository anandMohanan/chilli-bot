const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const DIG = require("discord-image-generation");

exports.run = async (client, message, args) => {
  try {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't blink nobody").then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    let user = message.mentions.users.first();
    let img2 = user.displayAvatarURL({ dynamic: false, format: "png" });

    let img1 = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    let jakfh = new Discord.MessageAttachment(img1, "fdgdfg.png");
    let jhjhg = new Discord.MessageAttachment(img2, "hjfgfd.png");
    message.channel.send(jakfh);
    message.channel.send(jhjhg);
    let image = await new DIG.Blink().getImage(img1, img2);
    return await message.channel.send(image);
  } catch (err) {
    console.log(err);
  }
};
exports.help = {
  name: "blink",
  description: "slaps the mentioned user",
  usage: "slap [@user]",
  example: "slpa @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
