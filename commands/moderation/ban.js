exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send('`You dont have enough permissions to ban members`')
    }
    if (!args[0]) {
        return message.channel.send('`Please mention a user!`')
    }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    try {
        await member.ban();
        await message.channel.send(`\`${member} has been banned!\``)
    } catch (e) {
        return message.channel.send('`User is not in this server!`')
    }

}

  exports.help = {
    name: 'ban',
    description: 'ban a amember',
    usage: 'ban [@user]',
    example: 'ban @kevin malone',
  };
  
  exports.conf = {
    aliases: [''],
  };
  