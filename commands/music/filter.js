const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const filters = require("../../filters.json");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    let filternoVoice = new MessageEmbed()
      .setTitle("You need to join a voice channel first!")
      .setThumbnail("https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif")
      .setColor("#ff0000")
      .setTimestamp();
    return message.channel.send(filternoVoice).then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  if (!client.player.getQueue(message)) {
    let filterNo = new MessageEmbed()
      .setTitle(`No music playing on this server `)
      .setColor("#ff0000")
      .setThumbnail("https://media.giphy.com/media/Su7qfpu8YVBqE/giphy.gif")
      .setTimestamp();
    return message.channel.send(filterNo).then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  const filter = args[0];
  if (!filter) {
    let filterValid = new MessageEmbed()
      .setTitle(
        "**Please use these Filters**\n`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`"
      )
      .setColor("#ff0000 ")
      .setTimestamp();
    return message.channel.send(filterValid);
  }
  const filterToUpdate = Object.values(filters).find(
    (f) => f.toLowerCase() === filter.toLowerCase()
  );

  if (!filterToUpdate) {
    let filterInValid = new MessageEmbed()
      .setTitle(`This filter doesn't exist `)
      .setColor("#ff0000")
      .setTimestamp();
    return message.channel.send(filterInValid).then((msg) => {
      msg.delete({ timeout: 8000 });
    });
  }
  const filterRealName = Object.keys(filters).find(
    (f) => filters[f] === filterToUpdate
  );

  const queueFilters = client.player.getQueue(message).filters;
  const filtersUpdated = {};
  filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
  client.player.setFilters(message, filtersUpdated);

  if (filtersUpdated[filterRealName]) {
    let filterSet = new MessageEmbed()
      .setTitle(
        `I'm **adding** the filter to the music, please wait...\nNote : the longer the music is, the longer this will take `
      )
      .setColor("#ff0000 ")
      .setTimestamp();
    message.channel.send(filterSet);
  } else {
    let filterNoSet = new MessageEmbed()
      .setTitle(
        `I'm **disabling** the filter on the music, please wait...\nNote : the longer the music is playing, the longer this will take `
      )
      .setColor("#ff0000 ")

      .setTimestamp();
    message.channel.send(filterNoSet);
  }
};
exports.help = {
  name: "filter",
  description: "Shows a list of filters and can choose from the list",
  usage: "filter",
  example: "filter bassboost",
};

exports.conf = {
  aliases: ["f"],
  cooldown: 10, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
