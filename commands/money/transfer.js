const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else if (!args[0]) {
    message.channel.send('please mention a user');
  } else if (!args[1]) {
    message.channel.send('please specify a amount');
  }

  let give = await db.give(user.id, message.guild.id, args[1]);
  const deduct = await db.deduct(message.author.id, message.guild.id, args[1]);
  let transferEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`${message.author} gave ${args[0]} ${give.amount}`)
    .setColor('#DD0')
    .setTimestamp();

  message.channel.send(transferEmbed);
};

exports.help = {
  name: 'transfer',
  description: 'Transfer your money to someone',
  usage: '=transfer [@user || user id] [amount]',
  example: '=transfer @kevin annan 2000',
};

exports.conf = {
  aliases: ['give'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
