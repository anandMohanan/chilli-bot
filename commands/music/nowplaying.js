const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let npnoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(npnoVoice);
  }
  if (!client.player.getQueue(message)) {
    let npNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(npNo);
  }
  const track = await client.player.nowPlaying(message);

  let npSet = new MessageEmbed()
    .setTitle(track.title)
    .setThumbnail(track.thumbnail)
    .setColor('#9075D8 ')
    .addFields(
      { name: 'Channel', value: track.author, inline: true },
      {
        name: 'Requested by',
        value: track.requestedBy.username,
        inline: true,
      },
      {
        name: 'From playlist',
        value: track.fromPlaylist ? 'Yes' : 'No',
        inline: true,
      },
      {
        name: 'Progress bar',
        value: client.player.createProgressBar(message, { timecodes: false }),
        inline: true,
      }
    )
    .setTimestamp();
  message.channel.send(npSet);
};

exports.help = {
  name: 'now playing',
  description: 'Shows the now playing song',
  usage: '=nowplaying',
  example: '+nowplaying',
};

exports.conf = {
  aliases: ['np'],
  cooldown: 0,
};
