exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id))
    return message.channel.send('You cant use this command');

  if (!args[0]) return message.channel.send('you should input a category name');
  if (!args[1]) return message.channel.send('you should input a command name');

  let category = args[0].toLowerCase();
  let command = args[1].toLowerCase();

  try {
    delete require.cache[
      require.resolve(`../../commands/${category}/${command}.js`)
    ];
    client.commands.delete(command);
    const pull = require(`../../commands/${category}/${command}.js`);
    client.commands.set(command, pull);
    return message.channel.send(`Reloaded ${command}`);
  } catch (err) {
    return message.channel.send(`${err.message}`);
  }
};
exports.help = {
  name: 'reload',
  description: 'Removes the cache',
  usage: 'reload <command name>',
  example: 'reload ping',
};

exports.conf = {
  aliases: ['rl'],
};
