const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.mentions.users.size < 1)
    return message.channel.send("you can't cuddle nobody");
  let user = message.guild.member(message.mentions.users.first());
  message.channel.send(
    `${user} You got a cuddle from ${message.author.username} ❤`,
    {
      embed: {
        image: {
          url: 'https://i.imgur.com/0yAIWbg.gif',
        },
      },
    }
  );
};

exports.help = {
  name: 'cuddle',
  description: 'cuddles the mentioned user',
  usage: 'cuddle [@user]',
  example: 'cuddle @kevin malone',
};

exports.conf = {
  aliases: ['cud'],
  cooldown: 0,
};
