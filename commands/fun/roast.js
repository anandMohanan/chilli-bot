const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.mentions.users === message.author.username)
    return message.reply('You can not compliment yourself');
  if (message.mentions.users.size < 1)
    return message.reply('You must mention someone to compliment them.');
  var roast = [
    'People clap when they see you. They clap their hands over their eyes.',
    'If I threw a stick, you’d leave, right?',
    'Keep rolling your eyes, you might eventually find a brain.',
    'You’re as useful as the wings on a motorcycle.',
    'If your brain was dynamite, there wouldn’t be enough to blow your hat off.',
    'Your kid is so annoying, he makes his Happy Meal cry.',
    'Hold still. I’m trying to imagine you with personality.',
    'I forgot the world revolves around you. My apologies, how silly of me.',
    'We were happily married for 3 months, but unfortunately, we have been married for 11 years.',
    'You are more disappointing than an unsalted pretzel.',
    'The next time, I’ll knock you down instead of knocking your door.',
    ' You’re the reason God created the middle finger.',
    'Light travels faster than sound, which is why you seemed bright until you spoke.',
    'Well, the Jerk Store called, and they’re running out of you.',
    'If I could give you that cookie back, I would. Nothing would make me happier than to throw it up, mash it into a cookie shape, and shove it down your throat.',
    'I’d prefer a battle of wits, but you appear unarmed.',

    'You are the reason God created the middle finger.',
    'I thought of you today. It reminded me to take out the trash.',
    'Someday, you’ll go far—and I really hope you stay there.',

    'I’m not a proctologist, but I know an asshole when I see one.',
    'If you’re going to be two-faced, at least make one of them pretty.',
    'you are the human version of period cramps.',
    'I love what you’ve done with your hair. How do you get it to come out of your nostrils like that?',
    'You are so full of shit, the toilet’s jealous.',
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
