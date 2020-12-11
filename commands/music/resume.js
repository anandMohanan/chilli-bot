const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let resumenoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(resumenoVoice);
  }
  if (!client.player.getQueue(message)) {
    let resumeNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(resumeNo);
  }
  client.player.resume(message);

  let resumeDone = new MessageEmbed()
    .setTitle(`${message.author.tag}  ▶  resumed the music!`)
    .setColor('#8F8CF2 ')
    .setThumbnail('https://media.giphy.com/media/l0HFixTtvQ78aaxqw/giphy.gif')
    .setTimestamp();
  message.channel.send(resumeDone);
};

exports.help = {
  name: 'resume',
  description: 'Resumes the song if the song was paused before',
  usage: '=resume',
  example: '=resume',
};

exports.conf = {
  aliases: ['res'],
  cooldown: 0,
};
