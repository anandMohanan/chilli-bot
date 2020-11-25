const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let skipnoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(skipnoVoice);
  }
  if (!client.player.getQueue(message)) {
    let skipNo = new MessageEmbed()
      .setTitle('There is nothing playing that I could skip for you.')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(skipNo).then((msg) => {
      msg.delete({ timeout: 30000 });
    });
  }
  client.player.skip(message);
  let skipDone = new MessageEmbed()
    .setTitle(`${message.author.tag}  ⏭  skipped the song`)
    .setColor('#2ED8BA')
    .setTimestamp();
  message.channel.send(skipDone);
};

exports.help = {
  name: 'skip',
  description: 'Skips the currently playing song',
  usage: '=skip',
  example: '=skip',
};

exports.conf = {
  aliases: ['next'],
  cooldown: 0,
};
