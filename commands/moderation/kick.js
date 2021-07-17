const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    let banperm = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You dont have enough permissions to kick members`);
    return message.lineReply(banperm);
  }
  if (!args[0]) {
    let kickarg = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`Please mention a user!`);
    return message.lineReply(kickarg);
  }
  const member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);

  try {
    await member.kick();
    let kickdone = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`${member} has been kicked!`);
    await message.lineReply(kickdone);
  } catch (e) {
    let kickerr = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription("User is not in this server!");
    return message.lineReply(kickerr);
  }
};

exports.help = {
  name: "kick",
  description: "kick a member",
  usage: "kick [@user]",
  example: "kick @kevin malone",
};

exports.conf = {
  aliases: [""],
};
