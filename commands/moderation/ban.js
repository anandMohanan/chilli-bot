const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    let banperm = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You dont have enough permissions to ban members`);
    return message.lineReply(banperm);
  }
  if (!args[0]) {
    let banarg = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`Please mention a user!`);
    return message.lineReply(banarg);
  }
  const member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);

  try {
    await member.ban();
    let bandone = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`${member} has been banned!`);
    await message.lineReply(bansuccess);
  } catch (e) {
    let banerr = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription("User is not in this server!");
    return message.lineReply(banerr);
  }
};

exports.help = {
  name: "ban",
  description: "ban a amember",
  usage: "ban [@user]",
  example: "ban @kevin malone",
};

exports.conf = {
  aliases: [""],
};
