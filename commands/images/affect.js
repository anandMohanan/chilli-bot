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
  let image = await new DIG.Affect().getImage(avatar);
  let attach = new Discord.MessageAttachment(image, "affect.png");
  const embed = new MessageEmbed()
    .setTimestamp()
    .setColor("#64CFF7")
    .setImage("attachment://affect.png");
  return await message.lineReply({ files: [attach], embed });
};

exports.help = {
  name: "affect",
  description: "affect image",
  usage: "affect [@user]",
  example: "affect @kevin malone",
};

exports.conf = {
  aliases: ["aff"],
  cooldown: 0,
};
