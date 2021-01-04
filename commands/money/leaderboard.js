const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  const lb = await db.lb(message.guild.id, 10); //(guildID, limit)
  if (lb < 1) return message.reply('less than 1'); //If leaderboard is empty, reply to user that it is.
  var index = 0;
  const mapped = lb.map(
    (i) =>
      `**${(index += 1)}. ${client.users.cache.get(i.userID)} - ${i.wallet}**`
  );
  const lbembed = new MessageEmbed()
    .setTitle(`${message.guild.name}\'s Leaderboard`)
    .setDescription(`${mapped.join('\n')}`)
    .setThumbnail(message.guild.iconURL())
    .setColor('RANDOM');
  message.channel.send(lbembed);
};

exports.help = {
  name: 'leaderboard',
  description: 'Shows the leaderboard',
  usage: '=leaderboard',
  example: '=leaderboard',
};

exports.conf = {
  aliases: ['lb'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
