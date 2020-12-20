const Discord = require('discord.js');
const fetch = require('snekfetch');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  try {
    const { body } = await fetch.get('http://api.adviceslip.com/advice');
    let adviceEmbed = new MessageEmbed()
      .setAuthor('Advice')
      .setColor('#2ab7ca')
      .setDescription(JSON.parse(body.toString()).slip.advice)

      .setTimestamp();
    message.channel.send(adviceEmbed);
  } catch (err) {
    message.channel.send(
      `An error occurred: \`${err.message}\`. Try again later!`
    );
  }
};

exports.help = {
  name: 'advice',
  description: 'some advice is better',
  usage: '=advice',
  example: '=advice',
};

exports.conf = {
  aliases: ['ad'],
  cooldown: 0,
};
