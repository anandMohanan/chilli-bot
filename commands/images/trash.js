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
  let image = await new DIG.Trash().getImage(avatar);
  let attach = new Discord.MessageAttachment(image, "trash.png");
  return message.channel.send(attach);
};

exports.help = {
  name: "trash",
  description: "trash an image",
  usage: "trash [@user]",
  example: "trash @kevin malone",
};

exports.conf = {
  aliases: ["trash"],
  cooldown: 0,
};
