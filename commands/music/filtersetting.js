const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const filters = require("../../filters.json");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message
      .reply("`You need to join a voice channel first!`")
      .then((msg) => {
        msg.delete({ timeout: 8000 });
      });
  }
  if (!client.player.getQueue(message)) {
    return message.channel
      .send("`Nothing playing in this server`")
      .then((msg) => {
        msg.delete({ timeout: 10000 });
      });
  }

  const filtersStatuses = [[], []];

  Object.keys(filters).forEach((filterName) => {
    const array =
      filtersStatuses[0].length > filtersStatuses[1].length
        ? filtersStatuses[1]
        : filtersStatuses[0];
    array.push(
      filters[filterName] +
        " : " +
        (client.player.getQueue(message).filters[filterName] ? "yes" : "no")
    );
  });

  let wfilter = new MessageEmbed()
    .setTitle(
      `List of all filters enabled or disabled.\nUse \`=filter\` to add a filter to a song.`
    )
    .addFields(
      { name: "Filters", value: filtersStatuses[0].join("\n"), inline: true },
      { name: "** **", value: filtersStatuses[1].join("\n"), inline: true }
    )
    .setColor("#ff0000 ")
    .setTimestamp();

  message.channel.send(wfilter);
};
exports.help = {
  name: "filter settings",
  description: "Shows whether a filter is **on** or **off**",
  usage: "filtersettings",
  example: "filtersettings",
};

exports.conf = {
  aliases: ["fs"],
  cooldown: 0,
};
