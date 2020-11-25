const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!args[0]) {
    let binaryNoArg = new MessageEmbed()
      .setImage(
        'Unknown parameter. Please choose the method first, either decode or encode it.'
      )
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(binaryNoArg);
  }
  let choice = ['encode', 'decode'];
  if (!choice.includes(args[0].toLowerCase())) {
    let binaryNoChoice = new MessageEmbed()
      .setImage(
        'Unknown parameter. Please choose the method first, either decode or encode it.'
      )
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(binaryNoChoice);
  }
  let text = args.slice(1).join(' ');
  // binary <encode | decode> <text>
  // binary encode blob development

  if (!text) {
    let binaryNoInput = new MessageEmbed()
      .setImage(
        'Unknown parameter. Please choose the method first, either decode or encode it.'
      )
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(binaryNoInput);
  }

  // Do this because more than that, the binary code wouldn't be fit anymore.
  if (text.length > 1024) {
    let binaryLargeInput = new MessageEmbed()
      .setImage('That is way too much. The maximum character was 1,024.')
      .setColor('#2ED8BA')
      .setTimestamp();
    return message.channel.send(binaryLargeInput);
  }
  function encode(char) {
    return char
      .split('')
      .map((str) => {
        const converted = str.charCodeAt(0).toString(2);
        return converted.padStart(8, '0');
      })
      .join(' ');
  }

  function decode(char) {
    return char
      .split(' ')
      .map((str) => String.fromCharCode(Number.parseInt(str, 2)))
      .join('');
  }

  if (args[0].toLowerCase() === 'encode') {
    return message.channel.send(encode(text));
  } else if (args[0].toLowerCase() === 'decode') {
    return message.channel.send(decode(text));
  }
};

exports.help = {
  name: 'binary',
  description: 'Convert text to binary or otherwise.',
  usage: '=binary <encode | decode> <text>',
  example: '=binary encode javascript development',
};

exports.conf = {
  aliases: ['b'],
  cooldown: 5,
};
