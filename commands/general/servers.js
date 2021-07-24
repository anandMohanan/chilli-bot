const Discord = require("discord.js");
const { MessageMenuOption } = require("discord-buttons");
exports.run = async (client, message, args) => {
  let serverEmbed = new Discord.MessageEmbed()
    .setColor("#A348A6")
    .setDescription(client.guilds.cache.array().join("\n"));

  message.lineReply(serverEmbed);
};

exports.help = {
  name: "servers",
  description: "Shows a list of servers i am in",
  usage: "servers",
  example: "servers",
};

exports.conf = {
  aliases: ["server"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
