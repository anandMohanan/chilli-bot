const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`Bot Owner: <@376632059923267584>`);
};

exports.help = {
  name: 'owner',
  description: 'naan dhan da owner punda',
  usage: 'owner',
  example: 'owner',
};

exports.conf = {
  aliases: ['o'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
