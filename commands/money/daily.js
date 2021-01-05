const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  // if (
  //   money[message.author.username + message.guild.name] != moment().format('L')
  // ) {
  //   money[message.author.username + message.guild.name] = moment().format('L');
  //   money.updateBal(message.author.id, 500).then((i) => {
  //     // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
  //     message.channel.send({
  //       embed: {
  //         color: 3447003,
  //         description:
  //           'Recieved your **$500** `!daily`. I think you should check `=balance`.',
  //         author: {
  //           name: `${message.author.username}#${message.author.discriminator}`,
  //           icon_url: message.author.avatarURL,
  //         },
  //       },
  //     });
  //   });
  // } else {
  //   message.channel.send({
  //     embed: {
  //       color: 3447003,
  //       description:
  //         'You already recieved your `daily`. Check later **' +
  //         moment().endOf('day').fromNow() +
  //         '**.', // When you got your daily already, this message will show up.
  //       author: {
  //         name: `${message.author.username}#${message.author.discriminator}`,
  //         icon_url: message.author.avatarURL,
  //       },
  //     },
  //   });
  // }
  const daily = await db.daily(message.author.id, message.guild.id, 500); //give 500 for daily, can be changed
  if (daily.cd)
    return message.reply(`Daily on cooldown come back in ${daily.cdL}`); //cdL is already formatted cooldown Left
  let dailyEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`you claimed ${daily.amount} for daily`)
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setColor('RANDOM');
  message.reply(dailyEmbed);
  const add = db.giveCapacity(message.author.id, message.guild.id, 200);
};

exports.help = {
  name: 'daily',
  description: 'Collect your daily amount',
  usage: '=daily',
  example: '=daily',
};

exports.conf = {
  aliases: [''],
  cooldown: 0, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
