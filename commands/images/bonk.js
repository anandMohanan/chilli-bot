const Discord = require('discord.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  try {
    const bonkGif = [
        "https://media.giphy.com/media/30lxTuJueXE7C/giphy.gif",
        "https://media.giphy.com/media/xrZ1qcdBHqdJmE3FkU/giphy.gif",
        "https://media.giphy.com/media/14lV2hMFgfAA9O/giphy.gif",
        "https://media.giphy.com/media/Lod2M4XnsOLJtHGb3r/giphy.gif",
        "https://media.giphy.com/media/pPs4HwdYb46fWfnpje/giphy.gif",
        "https://media.giphy.com/media/D8Wb09fJhCb78MvM76/giphy.gif",
        "https://media.giphy.com/media/ihA4UppRKGiIQp69Si/giphy.gif",
        "https://media.giphy.com/media/4ivyFLS5al2mFiD8nz/giphy.gif",
        "https://media.giphy.com/media/vpdVRL3VBp9kz44zAa/giphy.gif",
        "https://media.giphy.com/media/KI14N7D3AJ4SA/giphy.gif",
        "https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755",
        "https://tenor.com/view/bonk-anime-super-bonk-gif-19740955",
        "https://tenor.com/view/paper-paper_bag-bag-bonk-pbonk-gif-20215627",
        "https://tenor.com/view/doge-bonk-hammer-shiba-dog-gif-16185857",
        "https://tenor.com/view/bonk-gif-18272416",
        "https://tenor.com/view/walter-bonk-walter-bonk-nelson-dog-gif-15721111",
        "https://tenor.com/view/despicable-me-minions-bonk-hitting-cute-gif-17663380",
        "https://tenor.com/view/sad-cat-bonk-hammer-crying-cat-gif-17177807",
        "https://tenor.com/view/statewide-rp-mess-with-the-honk-you-get-the-bonk-baseballbat-untitled-goose-game-gif-17204101",
        "https://tenor.com/view/bonk-gif-19410756",
        "https://tenor.com/view/go-to-baby-jail-bonk-gif-18281389",
        "https://tenor.com/view/guillotine-bonk-revolution-gif-20305805",
        "https://tenor.com/view/bonk-meme-dog-doge-gif-14889944",
        "https://tenor.com/view/bonk-gif-18805247"
    ]
    
    
        if (message.mentions.users.size < 1)
          return message.channel.send("you can't bonk nobody").then((msg) => {
            msg.delete({ timeout: 10000 });
          });
        let user = message.mentions.users.first();
        
        const bonkEmb = new MessageEmbed()
          .setTitle(
            ` Aye ${user.username}, you're bonked by ${message.author.username} ❤`
          )
          .setImage(bonkGif[Math.floor(Math.random() * bonkGif.length)])
          .setColor('#dfa290')
          .setTimestamp();
        message.channel.send(bonkEmb);
      } catch (err) {}
};
exports.help = {
  name: 'bonk',
  description: 'bonk ',
  usage: 'bonk [@user] ',
  example: 'bonk @kevinMalone',
};

exports.conf = {
  aliases: [''],
  cooldown: 0,
};