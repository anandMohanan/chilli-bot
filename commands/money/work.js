const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('discord-mongoose-economy');

exports.run = async (client, message, args) => {
  const min = 100; //Minimum of 10
  const max = 350; //Maximum of 100
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  let work = [
    `You work as a sandcastle builder and earn ${random}`,
    `You work as a beefeater and earn ${random}`,
    `You work as a footstool. You lost your pride but at least you you earned ${random}`,
    `You took a banana up the ass whilst watching YouTube and earned ${random}`,
    `You create and launch a game on Roblox, it becomes a hit! You get money from people buying early access, in-game passes, and currency in-game, you convert the Robux you earn into server money and earned ${random}`,
    `You manage to hack into a banks system and got ${random}`,
    `You rummage through a dumpster illegally and got ${random} `,
    `You work as a professional Minecraft hacker. You manage to rake in ${random}`,
    `You become a pimp and earn ${random}`,
    `You successfully complete a heist and earn ${random}`,
    `You have done well on succing that! Your daddy gives you ${random}`,
    `You get a letter saying you've won a cash prize of ${random} with an address to collect your winnings at. The weird thing is you don't recall entering any contest...`,
    `You fucked a traffic cone and found ${random} inside it`,
    `You work as a dumpster diver and earn ${random}`,
    `You steal candy from some schoolgirls and earn ${random}`,
    `You take a nice stroll around the park, looking down and finding ${random}. Congrats!`,
    `A cute fugitive from a rogue moon of Alderaan gives you the best foot job of your life. To make it better, you find ${random} on the way back to your ship.`,
    `While you were searching for Pokémon in the tall grass, you found ${random}`,
    `You got drunk the night before and ended up in a threesome with people you cant remember.. but they all left you ${random}`,
    `You rob an orphanage for ${random}`,
    `You get caught masturbating in class, and the teacher joins in! He pays you ${random} for the good time.`,
    `You work as a lubricant tester and made ${random}`,
    `You get paid ${random} for crossdressing`,
    `You robbed a church and made ${random}`,
    `You eat bananas for a living and get ${random}`,
    `You are weirdly good with your hands, have ${random}`,
    `You carried a bunch of schoolbags around to different classes for a day, and received ${random} from your peers.`,
    `You go to a furry convention. You don't remember what happened 24 hours later, but now you're covered in fur and have ${random}`,
    `Poor performance buddy. As compensation pay`,
  ];
  const works = work[Math.floor(Math.random() * work.length)];
  const give = await db.give(message.author.id, message.guild.id, random);
  const workEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(works)
    .setTimestamp()
    .setColor('RANDOM');
  message.channel.send(workEmbed);
};

exports.help = {
  name: 'work',
  description: 'Work to earn money',
  usage: '=work',
  example: '=work',
};

exports.conf = {
  aliases: ['job'],
  cooldown: 100000, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
