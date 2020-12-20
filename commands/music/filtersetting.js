const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const filters = require('../../filters.json');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let wfilternoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.reply(wfilternoVoice).catch(console.error);
  }
  if (!client.player.getQueue(message)) {
    let wfilternoPlay = new MessageEmbed()
      .setTitle('Nothing playing in this server')
      .setColor('#2ED8BA')
      .setThumbnail('https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif')

      .setTimestamp();
    return message.channel.send(wfilternoPlay).then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }

  const filtersStatuses = [[], []];

  Object.keys(filters).forEach((filterName) => {
    const array =
      filtersStatuses[0].length > filtersStatuses[1].length
        ? filtersStatuses[1]
        : filtersStatuses[0];
    array.push(
      filters[filterName] +
        ' : ' +
        (client.player.getQueue(message).filters[filterName] ? 'yes' : 'no')
    );
  });

  let wfilter = new MessageEmbed()
    .setTitle(
      `List of all filters enabled or disabled.\nUse \`=filter\` to add a filter to a song.`
    )
    .addFields(
      { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
      { name: '** **', value: filtersStatuses[1].join('\n'), inline: true }
    )
    .setColor('#A348A6 ')
    .setTimestamp();

  message.channel.send(wfilter);
};
exports.help = {
  name: 'filter settings',
  description: 'Shows whether a filter is **on** or **off**',
  usage: '=filtersettings',
  example: '=filtersettings',
};

exports.conf = {
  aliases: ['fs'],
  cooldown: 0,
};
