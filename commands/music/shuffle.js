const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let shufflenoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(shufflenoVoice);
  }
  if (!client.player.getQueue(message)) {
    let shuffleNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(shuffleNo);
  }
  client.player.shuffle(message);
  let shuffleDone = new MessageEmbed()
    .setTitle(
      `${message.author.tag} 🔀 shuffled the queue.\nQueue shuffled **${
        client.player.getQueue(message).tracks.length
      }** song(s) `
    )
    .setColor('#2ED8BA')
    .setTimestamp();
  return message.channel.send(shuffleDone);
};

exports.help = {
  name: 'shuffle',
  description: 'Shuffles the whole queue',
  usage: '=shuffle',
  example: '=shuffle',
};

exports.conf = {
  aliases: ['mix'],
  cooldown: 0,
};
