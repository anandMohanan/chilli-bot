const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const DIG = require("discord-image-generation");

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }

  let avatar = await user.displayAvatarURL({ dynamic: false, format: "png" });
  let image = await new DIG.Hitler().getImage(avatar);
  let attach = new Discord.MessageAttachment(image, "hitler.png");
  const embed = new MessageEmbed()
    .setTimestamp()
    .setColor("#64CFF7")
    .setImage("attachment://hitler.png");
  return await message.lineReply({ files: [attach], embed });
};

exports.help = {
  name: "hitler",
  description: "hitler image",
  usage: "hitler [@user]",
  example: "hitler @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
