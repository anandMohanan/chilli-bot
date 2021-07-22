const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    let slowperm = new MessageEmbed()
      .setColor("#CEA2D7")
      .setDescription(`You dont have enough permissions to ban members`);
    return message
      .lineReply(slowperm)
      .then((m) => m.delete({ timeout: 50000 }));
  }
  message.channel.send("start giveaway, type prize");
  let time;
  let prize;
  let winner;
  await message.channel
    .awaitMessages((m) => m.author.id == message.author.id, {
      max: 1,
      time: 30000,
    })
    .then((collected) => {
      console.log(collected);
      time = collected.first().content;
    });
  message.channel.send(time);
  message.channel.send("now enter the prize amount");
  await message.channel
    .awaitMessages((m) => m.author.id == message.author.id, {
      max: 1,
      time: 30000,
    })
    .then((collected) => {
      console.log(collected);
      prize = collected.first().content;
    });
  message.channel.send(prize);
  message.channel.send("now enter the number of winners");
  await message.channel
    .awaitMessages((m) => m.author.id == message.author.id, {
      max: 1,
      time: 30000,
    })
    .then((collected) => {
      console.log(collected);
      winner = collected.first().content;
    });
  message.channel.send(winner);
};

exports.help = {
  name: "giveaway",
  description: "giveaway",
  usage: "giveaway",
  example: "giveaway",
};

exports.conf = {
  aliases: ["giv"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
