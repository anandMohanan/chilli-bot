const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let noVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.reply(noVoice).catch(console.error);
  }
  if (!client.player.getQueue(message)) {
    let noPlay = new MessageEmbed()
      .setTitle('Nothing playing in this server')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(noPlay).then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
  if (!args[0]) {
    let volumeValid = new MessageEmbed()
      .setTitle(`Please enter a number `)
      .setColor('#aa6f73')
      .setTimestamp();
    return message.channel.send(volumeValid).then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
  if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) {
    let volumeNumber = new MessageEmbed()
      .setTitle(`Please use a number between 0 - 100.`)
      .setColor('#aa6f73')
      .setTimestamp();
    return message.channel
      .send(volumeNumber)
      .then((msg) => {
        msg.delete({ timeout: 20000 });
      })
      .catch(console.error);
  }
  if (
    message.content.includes('-') ||
    message.content.includes('+') ||
    message.content.includes(',') ||
    message.content.includes('.')
  ) {
    let volumeNumberSelect = new MessageEmbed()
      .setTitle(`Please use a number to set volume.`)
      .setColor('#aa6f73')
      .setTimestamp();
    return message.reply(volumeNumberSelect).catch(console.error);
  }
  client.player.setVolume(message, parseInt(args.join(' ')));
  let volumeDone = new MessageEmbed()
    .setTitle(`Volume set to **${args.join(' ')}%** `)
    .setThumbnail('https://media.giphy.com/media/jMz5jWatM1n7q/giphy.gif')
    .setColor('#aa6f73')
    .setTimestamp();
  message.channel.send(volumeDone);
};

exports.help = {
  name: 'volume',
  description: 'Increases or decreases the volume',
  usage: '=volume [percentage value]',
  example: '=volume 40',
};

exports.conf = {
  aliases: ['v'],
  cooldown: 0,
};
