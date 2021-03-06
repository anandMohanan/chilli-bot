const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    const res = await fetch("https://dog-api.kinduff.com/api/facts");
    const fact = (await res.json()).facts[0];
    const embed = new MessageEmbed()
      .setTitle("Dog Fact")
      .setDescription(fact)
      .setColor("#A348A6");
    message.lineReplyNoMention(embed);
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: "dogfact",
  description: "facts about dogs",
  usage: "=dogfact",
  example: "=dogfact",
};

exports.conf = {
  aliases: ["df"],
  cooldown: 0,
};
