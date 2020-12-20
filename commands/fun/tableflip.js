const Discord = require('discord.js');
const frames = [
  '(-°□°)-  ┬─┬',
  '(╯°□°)╯    ]',
  '(╯°□°)╯  ︵  ┻━┻',
  '(╯°□°)╯       [',
  '(╯°□°)╯           ┬─┬',
];
exports.run = async (client, message, args) => {
  const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
  for (const frame of frames) {
    setTimeout(() => {}, 4000);
    await msg.edit(frame);
  }
  return message;
};

exports.help = {
  name: 'table',
  description: 'tbbb',
  usage: '=avatar [@user]',
  example: '=avatar @kevin malone',
};

exports.conf = {
  aliases: ['tb'],
  cooldown: 0,
};
