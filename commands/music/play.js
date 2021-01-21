const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    
    return message.channel.send('`You need to join a voice channel first!`').then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  if (!args[0]) {
    return message.channel.send('`Usage: =play <YouTube URL | Video Name >`').then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  client.player.play(message, args.join(' '));
};

exports.help = {
  name: 'play',
  description: 'Plays the given song',
  usage: 'play [song name]',
  example: 'play golden',
};

exports.conf = {
  aliases: ['p'],
  cooldown: 0,
};
