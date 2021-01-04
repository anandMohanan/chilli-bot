const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.mentions.users === message.author.username)
    return message.reply('You can not roast yourself');
  if (message.mentions.users.size < 1)
    return message.reply('You must mention someone to compliment them.');
  let roast = [
    'You look like the kind of person who reads the terms and services then presses decline',
    "You're just a hormonal banana",
    'I’d make a joke about you having an extra chromosome, but it might be the first time its actually true.',
    'The only time you see pussy is when you look in the mirror',
    'Keep rolling your eyes, you might eventually find a brain.',
    'You’re the guy they hire when the wife slept with the last pool boy.',
    'If your brain was dynamite, there wouldn’t be enough to blow your hat off.',
    'Hold still. I’m trying to imagine you with personality.',
    'You are more disappointing than an unsalted pretzel.',
    'Pretty sure this man uses cum as a hair gel',
    "I'm trying to figure out why you even bothered to get dressed. Maybe he just got back from rinsing off his fleshlight in the kitchen sink.",
    'Well, the Jerk Store called, and they’re running out of you.',
    'I’d prefer a battle of wits, but you appear unarmed.',
    'I thought of you today. It reminded me to take out the trash.',
    'You’re so real. A real ass.',
    "You're a less fuckable Ben Shapiro.",
    "Didn't know a torn labia was a thing.",
    'I’m not a proctologist, but I know an asshole when I see one.',
    'you are the human version of period cramps.',
    "It's like you were drawn by an eight year old.",
  ];
  const roasts = roast[Math.floor(Math.random() * roast.length)];
  const embed = new Discord.MessageEmbed()
    .setDescription(user.username + ', ' + roasts)
    .setFooter(
      message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setColor('#851e3e');
  message.channel.send({ embed });
};

exports.help = {
  name: 'roast',
  description: 'roasts the mentioned user',
  usage: '=roast [@user]',
  example: '=roast @kevin malone',
};

exports.conf = {
  aliases: ['r'],
  cooldown: 0,
};
