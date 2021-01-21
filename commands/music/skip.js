const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send('`You need to join a voice channel first!`').then((msg) => {
      msg.delete({ timeout: 5000 });
    });
  }
  if (!client.player.getQueue(message)) {
    return message.channel.send('`There is nothing playing that I could skip for you.`').then((msg) => {
      msg.delete({ timeout: 30000 });
    });
  }
  client.player.skip(message);
  message.channel.send(`\`${message.author.tag}  skipped the song\``);
};

exports.help = {
  name: 'skip',
  description: 'Skips the currently playing song',
  usage: 'skip',
  example: 'skip',
};

exports.conf = {
  aliases: ['next'],
  cooldown: 0,
};
