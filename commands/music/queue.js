const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send('`You need to join a voice channel first!`').then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  const queue = client.player.getQueue(message);

  if (!queue) {
    return message.channel.send('`No music playing on this server `').then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }

  let queueSet = new MessageEmbed()
    .setTimestamp()
    .setTitle(`Song Queue`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(
      `**Server queue - ${message.guild.name} **\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
        (queue.tracks
          .map((track, i) => {
            return `**${i + 1}** - ${track.title} `;
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
  usage: 'queue',
  example: 'queue',
};

exports.conf = {
  aliases: ['q'],
  cooldown: 0,
};
