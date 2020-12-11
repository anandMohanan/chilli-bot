const Discord = require('discord.js');
const tutorialBot = require('./handler/ClientBuilder.js'); // We're gonna create this soon.
const client = new tutorialBot();
const { Player } = require('discord-player');
const { MessageEmbed } = require('discord.js');

const player = new Player(client);

client.player = player;

require('./handler/Module.js')(client);
require('./handler/Event.js')(client);

client.package = require('./package.json');

client.player
  .on('trackStart', (message, track) => {
    let trackStart = new MessageEmbed()
      .setAuthor(`Now playing ${track.title} `)
      .setThumbnail(track.thumbnail)
      .setTimestamp()
      .setColor('#556DC8 ');
    message.channel.send(trackStart);
  })

  // Send a message when something is added to the queue
  .on('trackAdd', (message, track) => {
    console.log(track);
    let trackAdd = new MessageEmbed()
      .setAuthor(`Added to the queue !`)
      .setThumbnail('https://media.giphy.com/media/JxxkWxHOEDrq0/giphy.gif')
      .setTimestamp()
      .setColor('#DD517F ');
    message.channel.send(trackAdd);
  })
  .on('playlistAdd', (message, playlist) => {
    let playAdd = new MessageEmbed()
      .setTitle(`${playlist.title} has been added to the queue`)
      .setThumbnail(
        'https://media.giphy.com/media/xT9DPEPymVhAwi0mJy/giphy.gif'
      )
      .setColor('#461E52 ')
      .setTimestamp();
    message.channel.send(playAdd);
  })

  // Send messages to format search results
  .on('searchResults', (message, query, tracks) => {
    let searchEmbed = new MessageEmbed()
      .setAuthor(`Here are your search results for ${query}`)
      .setThumbnail('https://media.giphy.com/media/xGdvlOVSWaDvi/giphy.gif')
      .setTimestamp()
      .setColor('#7998EE')
      .setDescription(
        `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`
      );
    message.channel.send(searchEmbed);
  })
  .on('searchInvalidResponse', (message, query, tracks, content, collector) => {
    let searchInvalidCancel = new MessageEmbed()
      .setTitle(
        `You must send a valid number between **1** and **${tracks.length}** !`
      )
      .setColor('#E68E36 ')
      .setTimestamp();
    message.channel.send(searchInvalidCancel);
  })
  .on('searchCancel', (message, query, tracks) => {
    let searchCancel = new MessageEmbed()
      .setTitle(
        `You did not provide a valid response ... Please send the command again !`
      )
      .setColor('#66545e')
      .setTimestamp();
    message.channel.send(searchCancel);
  })

  .on('noResults', (message, query) => {
    let noSearch = new MessageEmbed()
      .setTitle(`No results found on YouTube for ${query} !`)
      .setColor('#66545e')
      .setTimestamp();
    message.channel.send(noSearch);
  })

  // Send a message when the music is stopped
  .on('queueEnd', (message, queue) => {
    let queueEnd = new MessageEmbed()
      .setTitle(`Music stopped as there is no more music in the queue !`)
      .setColor('#7998EE')
      .setTimestamp();
    message.channel.send(queueEnd);
  })
  .on('channelEmpty', (message, queue) => {
    let filternoMember = new MessageEmbed()
      .setTitle(
        ` Music stopped as there is no more member in the voice channel !`
      )
      .setColor('#461E52 ')
      .setTimestamp();
    message.channel.send(filternoMember);
  })
  .on('botDisconnect', (message, queue) => {
    let musicStop = new MessageEmbed()
      .setTitle(`Music stopped as i have been disconnected from the channel !`)
      .setColor('#CA7CD8  ')
      .setTimestamp();
    message.channel.send(musicStop);
  })

  // Error handling
  .on('error', (error, message) => {
    switch (error) {
      case 'NotPlaying':
        let errorNo = new MessageEmbed()
          .setTitle(`There is no music being played on this server !`)
          .setColor('#2ED8BA')
          .setTimestamp();
        message.channel.send(errorNo);
        break;
      case 'NotConnected':
        let errorNoConnect = new MessageEmbed()
          .setTitle(`Not connected in any voice channel !`)
          .setColor('#2ED8BA')
          .setTimestamp();
        message.channel.send(errorNoConnect);
        break;
      case 'UnableToJoin':
        let errorNoPerms = new MessageEmbed()
          .setTitle(
            `I am not able to join your voice channel, please check my permissions !`
          )
          .setColor('#2ED8BA')
          .setTimestamp();
        message.channel.send(errorNoPerms);
        break;
      default:
        let errorDefault = new MessageEmbed()
          .setTitle(`Something went wrong ... Error : ${error}`)
          .setColor('#2ED8BA')
          .setTimestamp();
        message.channel.send(errorDefault);
    }
  });

client.on('warn', console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on('error', console.error); // This will send you an error message via logs if there was something missing with your coding.
client
  .login('NzY2MjEwMzU1ODI2NTI0MjEx.X4gDAA.S0vGP3igiFvnb8mqa8-f-zphZw8')
  .catch(console.error); // This token will leads to the .env file. It's safe in there.
