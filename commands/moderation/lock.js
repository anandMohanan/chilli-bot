const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    let lockperm = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You dont have enough permissions to kick members`);
    return message.channel.send(lockperm);
  }
  const channels = message.guild.channels.cache.filter(
    (ch) => ch.type !== "category"
  );
  if (args[0] === "on") {
    channels.forEach((channel) => {
      channel
        .updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: false,
        })
        .then(() => {
          channel.setName((channel.name += `🔒`));
        });
    });
    let lockdone = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`locked all channels`);
    return message.lineReply(lockdone);
  } else if (args[0] === "off") {
    channels.forEach((channel) => {
      channel
        .updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: true,
        })
        .then(() => {
          channel.setName(channel.name.replace("🔒", ""));
        });
    });
    let unlockdone = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`unlocked all channels`);
    return message.lineReply(unlockdone);
  }
};

exports.help = {
  name: "lock",
  description: "lock the server",
  usage: "lock [on||off]",
  example: "lock on",
};

exports.conf = {
  aliases: [""],
};
