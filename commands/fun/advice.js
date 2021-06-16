const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  try {
    const body = await fetch("http://api.adviceslip.com/advice");
    const advice = await body.json();
    const ans = advice.slip.advice;
    console.log(ans);
    console.log(advice);
    let adviceEmbed = new MessageEmbed()
      .setAuthor("Advice")
      .setColor("#ff0000 ")
      .setDescription(ans);
    message.channel.send(adviceEmbed);
  } catch (err) {
    message.channel.send(
      `An error occurred: \`${err.message}\`. Try again later!`
    );
  }
};

exports.help = {
  name: "advice",
  description: "some advice is better",
  usage: "=advice",
  example: "=advice",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
