const { MessageEmbed } = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    let slowperm = new MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You dont have enough permissions to ban members`);
    return message
      .lineReply(slowperm)
      .then((m) => m.delete({ timeout: 50000 }));
  }

  if (!args[0]) {
    let slowtime = new MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription("You did not specify a time!");
    return message
      .lineReply(slowtime)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  const currentCooldown = message.channel.rateLimitPerUser;

  const reason = args[1] ? args.slice(1).join(" ") : "no reason";

  const embed = new MessageEmbed().setFooter(
    `${message.author.tag} | ${message.author.id}`,
    message.author.displayAvatarURL({ dynamic: true })
  );

  if (args[0] === "off") {
    if (currentCooldown === 0)
      return message
        .lineReply("Channel cooldown is already off")
        .then((m) => m.delete({ timeout: 50000 }));

    embed.setTitle("Slowmode Disabled").setColor("#CEA2D7");
    return message.channel.setRateLimitPerUser(0, reason);
  }

  const time = ms(args[0]) / 1000;

  if (isNaN(time)) {
    let slownantime = new MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription("not a valid time, please try again!");
    return message
      .lineReply(slownantime)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  if (time >= 21600) {
    let slowtime = new MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(
        "That slowmode limit is too high, please enter anything lower than 6 hours."
      );
    return message
      .lineReply(slowtime)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  if (currentCooldown === time) {
    let slowcool = new MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`Slowmode is already set to ${args[0]}`);
    return message.lineReply(slowcool);
  }
  embed
    .setTitle("Slowmode Enabled")
    .addField("Slowmode: ", args[0])
    .addField("Reason: ", reason)
    .setColor("#CEA2D7");

  message.channel.setRateLimitPerUser(time, reason);
  message.lineReply(embed);
};

exports.help = {
  name: "slowmode",
  description: "enable slowmode in a channel",
  usage: "slowmode [time] [reason]",
  example: "slowmode 10 to stop spamming",
};

exports.conf = {
  aliases: ["sm"],
};
