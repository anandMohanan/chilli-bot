/** @format */

const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const { MessageButton } = require("discord-buttons");
exports.run = async (client, message, args) => {
  const nsfw = new NSFW();
  if (message.channel.nsfw) {
    const image = await nsfw.fourk();
    const embed = new Discord.MessageEmbed().setColor("RED").setImage(image);
    message.channel.send(embed);
  } else {
    let button = new MessageButton()
      .setLabel("Click for 4k lesbian porn")
      .setStyle("url")
      .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    await message.channel.send(
      "https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825",
      button
    );
  }
};

exports.help = {
  name: "4k",
  description: "4k",
  usage: "4k",
  example: "4k",
};

exports.conf = {
  aliases: [""],
};
