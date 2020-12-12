const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let loopnoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(loopnoVoice);
  }
  if (!client.player.getQueue(message)) {
    let loopNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(loopNo);
  }
  const repeatMode = client.player.getQueue(message).repeatMode;

  if (repeatMode) {
    client.player.setRepeatMode(message, false);
    let loopDisabled = new MessageEmbed()
      .setTitle(`Repeat mode **disabled** `)
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(loopDisabled);
  } else {
    client.player.setRepeatMode(message, true);
    let loopEnabled = new MessageEmbed()
      .setTitle(`Repeat mode **enabled** `)
      .setColor('#65B8BF ')
      .setThumbnail('https://media.giphy.com/media/rh0W2vpayXMac/giphy.gif')
      .setTimestamp();
    return message.channel.send(loopEnabled);
  }
};
exports.help = {
  name: 'repeat',
  description: 'Loops through the currently playing song',
  usage: '=repeat',
  example: '=repeat',
};

exports.conf = {
  aliases: ['loop'],
  cooldown: 0,
};
