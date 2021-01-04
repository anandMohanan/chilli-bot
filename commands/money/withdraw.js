const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  if (args[0] !== 'all' && isNaN(args[0])) return message.reply('not valid'); //deposit only accepts integers or string "all" which deposits all from the users wallet.
  const withdraw = await db.withdraw(
    message.author.id,
    message.guild.id,
    args[0]
  );
  if (withdraw.noten)
    return message.reply("You can't withdraw what you don't have."); //if user states more than whats in his wallet
  const withEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`Withdrawn ${withdraw.amount} from your bank.`)
    .setColor('#00FF')
    .setTimestamp();
  message.channel.send(withEmbed);
};

exports.help = {
  name: 'withdraw',
  description: 'Withdraw money from your bank',
  usage: '=withdraw [amount]',
  example: '=withdraw 400',
};

exports.conf = {
  aliases: ['with'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
