const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.run = async (client, message, args) => {
  let songName = args.join(' ');

  console.log(songName);
  if (!songName) {
    const lyricsNoSong = new MessageEmbed()
      .setTitle('Enter a Song Name')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(lyricsNoSong);
  }

  const embed = new MessageEmbed()
    .setTitle(`${songName}`)
    .setColor('#2ED8BA')
    .setTimestamp();

  try {
    const songNameFormated = songName
      .toLowerCase()
      .replace(
        /\(lyrics|lyric|official music video|audio|official|official video|official video hd|clip officiel|clip|extended|hq\)/g,
        ''
      )
      .split(' ')
      .join('%20');

    let res = await fetch(
      `https://www.musixmatch.com/search/${songNameFormated}`
    );
    res = await res.text();
    let $ = await cheerio.load(res);
    const songLink = `https://musixmatch.com${$('h2[class="media-card-title"]')
      .find('a')
      .attr('href')}`;

    res = await fetch(songLink);
    res = await res.text();
    $ = await cheerio.load(res);

    let lyrics = await $('p[class="mxm-lyrics__content "]').text();

    if (lyrics.length > 2048) {
      lyrics =
        lyrics.substr(0, 2031) +
        message.channel.send('AND_MORE') +
        ' [' +
        message.channel.send('CLICK_HERE') +
        ']' +
        `https://www.musixmatch.com/search/${songName}`;
    } else if (!lyrics.length) {
      const lyricsNo = new MessageEmbed()
        .setTitle('no lyrics found')
        .setColor('#2ED8BA')
        .setTimestamp();
      return message.channel.send(lyricsNo);
    }

    embed.setDescription(lyrics);
    message.channel.send(embed);
  } catch (e) {
    const lyricsNoNo = new MessageEmbed()
      .setTitle(e)
      .setColor('#2ED8BA')
      .setTimestamp();
    message.channel.send(lyricsNoNo);
  }
};
exports.help = {
  name: 'lyrics',
  description: 'Shows the lyrics of the given song',
  usage: '=lyrics',
  example: '=lyrics freak penne',
};

exports.conf = {
  aliases: ['l'],
  cooldown: 0, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
