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
  let level = 5;
  let image = await new DIG.Blur().getImage(avatar, level);
  return await message.channel.send(image);
};

exports.help = {
  name: "blur",
  description: "blurs an image",
  usage: "blur [@user]",
  example: "blur @kevin malone",
};

exports.conf = {
  aliases: ["blur"],
  cooldown: 0,
};
