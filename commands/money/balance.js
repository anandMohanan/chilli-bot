const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  console.log(user);

  let bal = await db.balance(user.id, message.guild.id);
  let balEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(
      `Wallet: ${bal.wallet} \n Bank: ${bal.bank}/${bal.bankCapacity}`
    )
    .setColor('RANDOM')
    .setTimestamp();
  message.channel.send(balEmbed);
  // money.fetchBal(user.id).then((i) => {
  //   message.channel.send(`**Balance:** ${i.money}`);
  // });
};

exports.help = {
  name: 'balance',
  description: 'Shows your balance',
  usage: '=balance [@user | userid]',
  example: '=balance @kevin annan',
};

exports.conf = {
  aliases: ['bal'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
