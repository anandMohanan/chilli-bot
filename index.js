/** @format */

const Discord = require("discord.js");
const ChilliBot = require("./handler/ClientBuilder.js");

const client = new ChilliBot();
require("@weky/inlinereply");
const { MessageEmbed } = require("discord.js");
const distub = require("discord-buttons");
distub(client);

// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!");
//   })
//   .listen(process.env.PORT || 5000);

require("dotenv").config();

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");

client.on("ready", () => {
  function randomStatus() {
    let status = [
      `It is not possible either to trick or escape the mind of Zeus.`,
      `Open your mouth and shut your eyes and see what Zeus will send you.`,
      `Zeus, the father of the Olympic Gods, turned mid-day into night, hiding the light of the dazzling Sun`,
      `For know that no one is free, except Zeus.`,
      `The wise is one only. It is unwilling and willing to be called by the name of Zeus.`,
      `The will was of Zeus, the hand of Hephaestus.`,
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: "CUSTOM_STATUS" });
  }
  setInterval(randomStatus, 1000000);
});

const min = 10; //Minimum of 10
const max = 50; //Maximum of 100
const random = Math.floor(Math.random() * (max - min + 1)) + min; //Number Generator, no need to touch as we already have min, max constant above.

client.on("message", async (message) => {
  //Make sure Event Listener is Asynchrononous
  if (message.author.bot) return;

  // Make Sure this Code is under Message Event Listener
});

client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.BOT_TOKEN).catch(console.error); // This token will leads to the .env file. It's safe in there.
