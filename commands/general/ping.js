const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.lineReplyNoMention("ping").then(async (sent) => {
    const created = message.createdTimestamp;
    sent.delete();
    let pingEmbed = new Discord.MessageEmbed()
      .setColor("#A348A6")
      .setTitle("Pong!")
      .addField("Latency", `${sent.createdTimestamp - created}ms`)
      .addField("Discord API Latency", `${Math.round(client.ws.ping)}ms`);
    return message.lineReplyNoMention(pingEmbed);
  });
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
