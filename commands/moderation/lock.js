exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        return message.channel.send(`You dont have enough permissions to ban members`)
    }
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    if (args[0] === 'on') {
        channels.forEach(channel => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            }).then(() => {
                channel.setName(channel.name += `🔒`)
            })
        })
        return message.channel.send('`locked all channels`');
    } else if (args[0] === 'off') {
        channels.forEach(channel => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true
            }).then(() => {
                    channel.setName(channel.name.replace('🔒', ''))
                }
            )
        })
        return message.channel.send('`unlocked all channels`')
    }
}


  exports.help = {
    name: 'lock',
    description: 'lock the server',
    usage: 'lock [on||off]',
    example: 'lock on',
  };
  
  exports.conf = {
    aliases: [''],
  };
  