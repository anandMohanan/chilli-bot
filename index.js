const Discord = require("discord.js");
const ChilliBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new ChilliBot();
const { Player } = require("discord-player");
const { MessageEmbed } = require("discord.js");
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000);
const player = new Player(client);
const db = require("discord-mongoose-economy");

require("dotenv").config();

const mongoDb = process.env.MONGO_URI;

db.connect(mongoDb);

client.player = player;

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");

client.on("ready", () => {
  function randomStatus() {
    let status = [
      `${client.channels.cache.size} channels.`,
      `${client.guilds.cache.size} servers.`,
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: "LISTENING" });
  }
  setInterval(randomStatus, 100000);
});

    const min = 10; //Minimum of 10
   const max = 50; //Maximum of 100
const random = Math.floor(Math.random() * (max - min + 1)) + min; //Number Generator, no need to touch as we already have min, max constant above.

client.on("message", async (message) => {
  //Make sure Event Listener is Asynchrononous
  if (message.author.bot) return;
  // Make Sure this Code is under Message Event Listener
});

client.player
  .on("trackStart", async (message, track) => {
    await message.channel.send(`\`Now playing ${track.title}\` `);
  })

  // Send a message when something is added to the queue
  .on("trackAdd", async (message, track) => {
    console.log(track);
    await message.channel.send("`Added to the queue !`").then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  })
  .on("playlistAdd", async (message, playlist) => {
    let playAdd = new MessageEmbed()
      .setTitle(`${playlist.title} has been added to the queue`)
      .setColor("#461E52 ")
      .setTimestamp();
    await message.channel.send(playAdd);
  })

  // Send messages to format search results
  .on("searchResults", async (message, query, tracks) => {
    let searchEmbed = new MessageEmbed()
      .setAuthor(`Here are your search results for ${query}`)
      .setTimestamp()
      .setColor("#7998EE")
      .setDescription(
        `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join("\n")}`,
      );
    await message.channel.send(searchEmbed).then((msg) => {
      msg.delete({ timeout: 10000 });
    });
  })
  .on(
    "searchInvalidResponse",
    async (message, query, tracks, content, collector) => {
      await message.channel
        .send(
          `\`You must send a valid number between **1** and **${tracks.length}** !\``,
        )
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });
    },
  )
  .on("searchCancel", async (message, query, tracks) => {
    await message.channel
      .send(
        "``You did not provide a valid response ... Please send the command again !``",
      )
      .then((msg) => {
        msg.delete({ timeout: 10000 });
      });
  })

  .on("noResults", async (message, query) => {
    let noSearch = new MessageEmbed()
      .setTitle(`No results found on YouTube for ${query} !`)
      .setColor("#66545e")
      .setThumbnail("https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif")
      .setTimestamp();
    await message.channel.send(noSearch);
  })

  // Send a message when the music is stopped
  .on("channelEmpty", async (message, queue) => {
    await message.channel
      .send(
        "` Music stopped as there is no more member in the voice channel !`",
      )
      .then((msg) => {
        msg.delete({ timeout: 10000 });
      });
  })
  .on("botDisconnect", async (message, queue) => {
    await message.channel
      .send("`Music stopped as i have been disconnected from the channel !`")
      .then((msg) => {
        msg.delete({ timeout: 10000 });
      });
  })

  // Error handling
  .on("error", async (error, message) => {
    switch (error) {
      case "NotPlaying":
        await message.channel
          .send("`There is no music being played on this server !`")
          .then((msg) => {
            msg.delete({ timeout: 10000 });
          });
        break;
      case "NotConnected":
        await message.channel
          .send("`Not connected in any voice channel !`")
          .then((msg) => {
            msg.delete({ timeout: 5000 });
          });
        break;
      case "UnableToJoin":
        await message.channel
          .send(
            "`I am not able to join your voice channel, please check my permissions !`",
          )
          .then((msg) => {
            msg.delete({ timeout: 5000 });
          });
        break;
      default:
        await message.channel
          .send(`Something went wrong ... Error : ${error}`)
          .then((msg) => {
            msg.delete({ timeout: 5000 });
          });
    }
  });

client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.BOT_TOKEN).catch(console.error); // This token will leads to the .env file. It's safe in there.
