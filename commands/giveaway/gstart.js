const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    let givperm = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription(`You dont have enough permissions to use this command`);
    return message.lineReply(slowperm);
  }
  let requirements;
  let prize;
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    let givaperm = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription(`You dont have enough permissions to use this command`);
    return message.lineReply(givaperm);
  }
  if (!args[1]) {
    let givarg = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription(
        "Please provide the options in the format of `{time} {winners} {req | optional} {prize}`"
      );
    return message.lineReply(givarg);
  }
  if (isNaN(parseInt(args[1]))) {
    let givwin = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription("Please provide a valid number of winners");
    return message.lineReply(givwin);
  }
  if (!args[1]) {
    let givtime = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription("Please provide the time of the giveaway!");
    return message.lineReply(givtime);
  }
  if (!ms(args[0])) {
    let givetime = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription("Please provide a valid time! Example: `1m or 1h`");
    return message.lineReply(givetime);
  }
  if (!args.slice(2).join(" ")) {
    let givprize = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription("Please provide the prize!");
    return message.lineReply(givprize);
  }
  const host = message.author.id;
  const time = ms(args[0]);
  const winners = parseInt(args[1]);

  prize = args.slice(2).join(" ");
  requirements = { enabled: false };

  await client.giveaways.startGiveaway({
    prize: prize,
    channelId: message.channel.id,
    guildId: message.guild.id,
    duration: time, // 30 Seconds
    winners: winners, // 1 winner
    hostedBy: host,
  });
};

exports.help = {
  name: "gstart",
  description: "giveaway",
  usage: "=gstart <winners> <time> <prize>",
  example: "=gstart 1 1h free gift",
};

exports.conf = {
  aliases: ["gs"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
