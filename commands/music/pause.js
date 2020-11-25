const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let pausenoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(pausenoVoice);
  }
  if (!client.player.getQueue(message)) {
    let pauseNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(pauseNo);
  }
  client.player.pause(message);

  let pauseSet = new MessageEmbed()
    .setTitle(
      `Song ${client.player.getQueue(message).playing.title} **paused** `
    )
    .setColor('#2ED8BA')
    .setTimestamp();
  message.channel.send(pauseSet);
};

exports.help = {
  name: 'pause',
  description: 'Pauses the currently playing song',
  usage: '=pause',
  example: '=pause',
};

exports.conf = {
  aliases: ['pau'],
  cooldown: 0,
};
