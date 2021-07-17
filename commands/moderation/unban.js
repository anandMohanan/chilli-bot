const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    let unbanperm = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You dont have enough permissions to ban members`);
    return message
      .lineReply(unbanperm)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  if (!args[0]) {
    let unbanarg = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`Please mention a user!`);
    return message
      .lineReply(unbanarg)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  let member;

  try {
    member = await client.users.fetch(args[0]);
  } catch (e) {
    console.log(e);
    let unbanerr = new Discord.MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription("User is not in this server!");
    return message
      .lineReply(unbanerr)
      .then((m) => m.delete({ timeout: 50000 }));
  }

  const reason = args[1] ? args.slice(1).join(" ") : "no reason";

  const embed = new Discord.MessageEmbed().setFooter(
    `${message.author.tag} | ${message.author.id}`,
    message.author.displayAvatarURL({ dynamic: true })
  );

  message.guild
    .fetchBans()
    .then((bans) => {
      const user = bans.find((ban) => ban.user.id === member.id);

      if (user) {
        embed
          .setTitle(`Successfully Unbanned ${user.user.tag}`)
          .setColor("#CEA2D7")
          .addField("User ID", user.user.id, true)
          .addField("user Tag", user.user.tag, true)
          .addField(
            "Banned Reason",
            user.reason != null ? user.reason : "no reason"
          )
          .addField("Unbanned Reason", reason);
        message.guild.members
          .unban(user.user.id, reason)
          .then(() => message.channel.send(embed));
      } else {
        embed.setTitle(`User ${member.tag} isn't banned!`).setColor("#CEA2D7");
        message.lineReply(embed);
      }
    })
    .catch((e) => {
      console.log(e);
      let banerrr = new Discord.MessageEmbed()
        .setColor("#CEA2D7")
        .setDescription("An error has occurred!");
      message.lineReply(banerrr);
    });
};

exports.help = {
  name: "unban",
  description: "unbans a user",
  usage: "unban [@userId]",
  example: "unban 12345678",
};

exports.conf = {
  aliases: [""],
};
