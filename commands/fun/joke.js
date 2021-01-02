const Discord = require('discord.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { Random } = require('something-random-on-discord');
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    let data = await random.getJoke();

    message.channel.send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: 'joke',
  description: 'random joke',
  usage: '=joke',
  example: '=joke',
};

exports.conf = {
  aliases: ['j'],
  cooldown: 0,
};
