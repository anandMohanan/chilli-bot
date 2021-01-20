exports.run = async (client, message, args) => {
    if (!client.config.owners.includes(message.author.id))
      return message.channel.send('You cant use this command');
    
      await message.channel.send(`Restarting bot...`)
        process.exit();
  
    
  };
  exports.help = {
    name: 'restart',
    description: 'Restarts the bot',
    usage: 'restart',
    example: 'restart',
  };
  
  exports.conf = {
    aliases: ['re'],
  };
  