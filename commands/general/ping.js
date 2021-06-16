const Discord = require("discord.js");
require("discord-reply");

exports.run = async (client, message, args) => {
  message.lineReplyNoMention(
    `\`Pong! This message had a latency of ${client.ws.ping}ms.\``
  );
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
