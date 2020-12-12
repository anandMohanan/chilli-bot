const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let queuenoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(queuenoVoice);
  }
  const queue = client.player.getQueue(message);

  if (!queue) {
    let queueNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(queueNo);
  }

  let queueSet = new MessageEmbed()
    .setTimestamp()
    .setTitle(`Song Queue`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(
      `**Server queue - ${message.guild.name} **\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
        (queue.tracks
          .map((track, i) => {
            return `**${i + 1}** - ${track.title} | ${
              track.author
            }\n(requested by : ${track.requestedBy.username})`;
          })
          .slice(0, 5)
          .join('\n') +
          `\n\n${
            queue.tracks.length > 5
              ? `And **${queue.tracks.length - 5}** other songs...`
              : ``
          }`)
    )
    .setColor('#F96CFF ');

  message.channel.send(queueSet);
};

exports.help = {
  name: 'queue',
  description: 'Shows the queue',
  usage: '=queue',
  example: '=queue',
};

exports.conf = {
  aliases: ['q'],
  cooldown: 0,
};
