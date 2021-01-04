const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  let pingEmbed = new MessageEmbed()
    .setTitle(`**Update**`)
    .setThumbnail(message.guild.iconURL())
    .setDescription('added economy commands , try `=h`')
    .setFooter()
    .setColor('#2ED8BA')
    .setTimestamp();
  message.channel.send(pingEmbed);
};

exports.help = {
  name: 'update',
  description: 'New features',
  usage: '=ping',
  example: '=ping',
};

exports.conf = {
  aliases: ['version'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
