const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send('`You need to join a voice channel first!`').then((msg) => {
      msg.delete({ timeout: 5000 });
    });
  }
  if (!client.player.getQueue(message)) {
    return message.channel.send('`There is nothing playing.`').then((msg) => {
      msg.delete({ timeout: 5000 });
    });
  }
  client.player.setRepeatMode(message, false);
  client.player.stop(message);
  message.channel.send(`\`${message.author.tag}  stopped the music!\``);
};

exports.help = {
  name: 'stop',
  description: 'Stops the whole queue and the bot will leave the vc',
  usage: 'stop',
  example: 'stop',
};

exports.conf = {
  aliases: ['leave'],
  cooldown: 0,
};
