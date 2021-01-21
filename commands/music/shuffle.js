const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send('`You need to join a voice channel first!`').then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  if (!client.player.getQueue(message)) {
    return message.channel.send('`No music playing on this server `').then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  client.player.shuffle(message);
  
  return message.channel.send( `\`${message.author.tag} shuffled the queue.\nQueue shuffled **${
    client.player.getQueue(message).tracks.length
  }** song(s) \``);
};

exports.help = {
  name: 'shuffle',
  description: 'Shuffles the whole queue',
  usage: 'shuffle',
  example: 'shuffle',
};

exports.conf = {
  aliases: ['mix'],
  cooldown: 0,
};
