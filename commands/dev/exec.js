const process = require('child_process');

exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id))
    return message.channel.send('You cant use this command');

  process.exec(args.join(' '), (error, stdout) => {
    let response = error || stdout;

    message.channel
      .send(response, { code: 'asciidoc', split: '\n' })
      .catch((err) => message.channel.send(err));
  });

  return;
};

exports.help = {
  name: 'exec',
  description: 'Info',
  usage: 'exec <code>',
  example: 'exec yarn -v',
};

exports.conf = {
  aliases: ['ex'],
};
