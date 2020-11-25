const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  let pingEmbed = new MessageEmbed()
    .setTitle(`**Update**`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(
      '**1**:Supports youtube playlist and youtube links links\n**2**:Supports soundcloud links\n**3**:Supports spotify song links'
    )
    .setFooter('**Spotify playlist support coming soon**')
    .setColor('#2ED8BA')
    .setTimestamp();
  message.channel.send(pingEmbed);
};

exports.help = {
  name: 'update',
  description: 'Shows how fast the bot is responding',
  usage: '=ping',
  example: '=ping',
};

exports.conf = {
  aliases: ['version'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
