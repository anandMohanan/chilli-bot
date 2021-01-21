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
  const repeatMode = client.player.getQueue(message).repeatMode;

  if (repeatMode) {
    client.player.setRepeatMode(message, false);
    return message.channel.send('`Repeat mode **disabled** `');
  } else {
    client.player.setRepeatMode(message, true);
    return message.channel.send('`Repeat mode **enabled** `');
  }
};
exports.help = {
  name: 'repeat',
  description: 'Loops through the currently playing song',
  usage: 'repeat',
  example: 'repeat',
};

exports.conf = {
  aliases: ['loop'],
  cooldown: 0,
};
