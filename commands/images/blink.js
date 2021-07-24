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

    let image = await new DIG.Blink().getImage(img1, img2);
    let attach = new Discord.MessageAttachment(image, "blink.gif");
    const embed = new MessageEmbed()
      .setTimestamp()
      .setColor("#64CFF7")
      .setImage("attachment://blink.gif");
    return await message.lineReply({ files: [attach], embed });
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
