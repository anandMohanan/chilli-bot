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
  let image = await new DIG.Bobross().getImage(avatar);
  let attach = new Discord.MessageAttachment(image, "bobross.png");
  const embed = new MessageEmbed()
    .setTimestamp()
    .setColor("#64CFF7")
    .setImage("attachment://bobross.png");
  return await message.lineReply({ files: [attach], embed });
};

exports.help = {
  name: "bobross",
  description: "bobross image",
  usage: "bobross [@user]",
  example: "bobross @kevin malone",
};

exports.conf = {
  aliases: ["br"],
  cooldown: 0,
};
