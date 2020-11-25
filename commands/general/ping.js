const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  let pingEmbed = new MessageEmbed()
    .setTitle(`Pong! This message had a latency of ${client.ws.ping}ms.`)
    .setColor('#2ED8BA')
    .setTimestamp();
  message.channel.send(pingEmbed);
};

exports.help = {
  name: 'ping',
  description: 'Shows how fast the bot is responding',
  usage: '=ping',
  example: '=ping',
};

exports.conf = {
  aliases: ['beep'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
