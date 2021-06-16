const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  let seconds = Math.floor(message.client.uptime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  let uptimeEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      ` Uptime: \`${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds\``
    );
  return message.channel.send(uptimeEmbed).catch(console.error);
};

exports.help = {
  name: "uptime",
  description: "Shows how long the bot was online",
  usage: "uptime",
  example: "uptime",
};

exports.conf = {
  aliases: ["up"],
  cooldown: 0, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
