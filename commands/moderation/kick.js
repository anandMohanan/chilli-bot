exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send('`You dont have enough permissions to kick members`')
    }
    if (!args[0]) {
        return message.channel.send('`Please mention a user!`')
    }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    try {
        await member.kick();
        await message.channel.send(`\`${member} has been kicked!\``)
    } catch (e) {
        return message.channel.send('`User is not in this server!`')
    }

}

  exports.help = {
    name: 'kick',
    description: 'kick a member',
    usage: 'kick [@user]',
    example: 'kick @kevin malone',
  };
  
  exports.conf = {
    aliases: [''],
  };
  