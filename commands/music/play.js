const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let playnoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(playnoVoice);
  }
  if (!args[0]) {
    let playUsage = new MessageEmbed()
      .setTitle(`Usage: =play <YouTube URL | Video Name >`)
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(playUsage);
  }
  client.player.play(message, args.join(' '));
};

exports.help = {
  name: 'play',
  description: 'Plays the given song',
  usage: '=play [song name]',
  example: '=play golden',
};

exports.conf = {
  aliases: ['p'],
  cooldown: 0,
};
