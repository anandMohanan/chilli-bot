const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let stopnoVoice = new MessageEmbed()
      .setTitle('You need to join a voice channel first!')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(stopnoVoice);
  }
  if (!client.player.getQueue(message)) {
    let stopNo = new MessageEmbed()
      .setTitle('There is nothing playing.')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(stopNo).then((msg) => {
      msg.delete({ timeout: 30000 });
    });
  }
  client.player.setRepeatMode(message, false);
  client.player.stop(message);
  let stopDone = new MessageEmbed()
    .setTitle(`${message.author.tag} stopped the music!`)
    .setThumbnail('https://media.giphy.com/media/l0Nvr0QqmtpiizdhC/giphy.gif')
    .setColor('#f6e0b5')
    .setTimestamp();

  message.channel.send(stopDone);
};

exports.help = {
  name: 'stop',
  description: 'Stops the whole queue and the bot will leave the vc',
  usage: '=stop',
  example: '=stop',
};

exports.conf = {
  aliases: ['leave'],
  cooldown: 0,
};
