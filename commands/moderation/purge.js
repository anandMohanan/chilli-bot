const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (
    message.member.hasPermission('ADMINISTRATOR') ||
    message.member.hasPermission('MANAGE_MESSAGES')
  ) {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      let noNumber = new MessageEmbed()
        .setTitle("that doesn't seem to be a valid number.")
        .setColor('#2ED8BA')
        .setTimestamp();
      return message.reply(noNumber).then((msg) => {
        msg.delete({ timeout: 20000 });
      });
    } else if (amount <= 1 || amount > 100) {
      let noValid = new MessageEmbed()
        .setTitle('you need to input a number between 1 and 99.')
        .setColor('#2ED8BA')
        .setTimestamp();
      return message.reply(noValid);
    }

    message.channel.bulkDelete(amount, true);
    try {
      let pruneDone = new MessageEmbed()
        .setTitle(`${amount} messages deleted`)
        .setColor('#2ED8BA')
        .setTimestamp();
      message.channel.send(pruneDone).then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    } catch (err) {
      let pruneFail = new MessageEmbed()
        .setTitle(
          'there was an error trying to prune messages in this channel!'
        )
        .setColor('#2ED8BA')
        .setTimestamp();

      console.error(err);
      message.channel.send(pruneFail).then((msg) => {
        msg.delete({ timeout: 10000 });
      });
    }
  } else {
    message.channel.send(`Access Denied`).then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  }
};

exports.help = {
  name: 'purge',
  description: 'deletes the messages',
  usage: 'purge',
  example: 'purge 10',
};

exports.conf = {
  aliases: ['prune'],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
