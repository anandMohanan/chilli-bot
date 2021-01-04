const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  if (args[0] !== 'all' && isNaN(args[0])) return message.reply('not valid'); //deposit only accepts integers or string "all" which deposits all from the users wallet.
  const deposit = await db.deposit(
    message.author.id,
    message.guild.id,
    args[0]
  );
  if (deposit.noten)
    return message.reply("You can't deposit what you don't have."); //if user states more than whats in his wallet
  let depEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`Deposited ${deposit.amount} to your bank.`)
    .setColor(`RANDOM`)
    .setTimestamp();
  message.reply(depEmbed);
};

exports.help = {
  name: 'deposit',
  description: 'Deposit your money from your wallet to the bank',
  usage: '=deposit [amount||all]',
  example: '=deposit 200 ',
};

exports.conf = {
  aliases: ['dep'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
