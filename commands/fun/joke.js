const Discord = require("discord.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = async (client, message, args) => {
  try {
    let data = await fetch("https://icanhazdadjoke.com/slack");

    let joke = await data.json();
    let jokes = joke.attachments[0].text;
    let jokeEmbed = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(jokes);
    await message.channel.send(jokeEmbed);
  } catch (err) {
    console.log(err);
  }
};

exports.help = {
  name: "joke",
  description: "random joke",
  usage: "joke",
  example: "joke",
};

exports.conf = {
  aliases: ["j"],
  cooldown: 0,
};
