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
  let image = await new DIG.Delete().getImage(avatar);
  let attach = new Discord.MessageAttachment(image, "delete.png");
  return await message.lineReply(attach);
};

exports.help = {
  name: "delete stonk",
  description: "delete stonk image",
  usage: "delete [@user]",
  example: "delete @kevin malone",
};

exports.conf = {
  aliases: ["del"],
  cooldown: 0,
};
