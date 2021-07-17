
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  message.delete();

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    let rolenoperm = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You do not have MANAGE_ROLES permission`);
    return message
      .lineReply(rolenoperm)
      .then((m) => m.delete({ timeout: 50000 }));
  }

  if (!args[0] || !args[1]) {
    let rolenoarg = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(
        "Incorrect usage, It's `<username || user id> <role name || id>"
      );
    return message
      .lineReply(rolenoarg)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  try {
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const roleName = message.guild.roles.cache.find(
      (r) =>
        r.name === args[1].toString() ||
        r.id === args[1].toString().replace(/[^\w\s]/gi, "")
    );

    const alreadyHasRole = member._roles.includes(roleName.id);

    if (alreadyHasRole) {
      let rolealreadyhasrole = new Discord.MessageEmbed()
        .setColor("#CEA2D7")
        .setDescription("User already has that role");
      return message
        .lineReply(rolealreadyhasrole)
        .then((m) => m.delete({ timeout: 50000 }));
    }
    const embed = new Discord.MessageEmbed()
      .setTitle(`Role Name: ${roleName.name}`)
      .setDescription(
        `${message.author} has successfully given the role ${roleName} to ${member.user}`
      )
      .setColor("#CEA2D7")
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter(new Date().toLocaleString());

    return member.roles
      .add(roleName)
      .then(() => message.lineReplyNoMention(embed));
  } catch (e) {
    let roleadderror = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription("Try to give a role that exists next time...");
    return message
      .lineReply(roleadderror)
      .then((m) => m.delete({ timeout: 50000 }))
      .then(() => console.log(e));
  }
};

exports.help = {
  name: "add-role",
  description: "adds a role to a amember",
  usage: "add-role [@user] [role name]",
  example: "add-role @kevin malone member",
};

exports.conf = {
  aliases: ["give-role"],
};
