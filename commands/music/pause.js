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
  client.player.pause(message);
  await message.channel.send(`\`Song ${client.player.getQueue(message).playing.title} **paused** \``);
};

exports.help = {
  name: 'pause',
  description: 'Pauses the currently playing song',
  usage: 'pause',
  example: 'pause',
};

exports.conf = {
  aliases: ['pau'],
  cooldown: 0,
};
