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
  client.player.resume(message);
  message.channel.send(`\`${message.author.tag} resumed the music!\``);
};

exports.help = {
  name: 'resume',
  description: 'Resumes the song if the song was paused before',
  usage: 'resume',
  example: 'resume',
};

exports.conf = {
  aliases: ['res'],
  cooldown: 0,
};
