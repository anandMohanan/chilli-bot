const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let pingEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `\`Pong! This message had a latency of ${client.ws.ping}ms.\``
    );
  message.channel.send(pingEmbed);
};

exports.help = {
  name: "ping",
  description: "Shows how fast the bot is responding",
  usage: "ping",
  example: "ping",
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
