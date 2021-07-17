const { MessageEmbed } = require("discord.js");
const os = require("os");

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("Bot Stats")
    .setColor("#A348A6")
    .addFields(
      {
        name: "🌐 Servers",
        value: `Serving ${client.guilds.cache.size} servers.`,
        inline: true,
      },
      {
        name: "📺 Channels",
        value: `Serving ${client.channels.cache.size} channels.`,
        inline: true,
      },
      {
        name: "👥 Server Users",
        value: `Serving ${client.users.cache.size}`,
        inline: true,
      },
      {
        name: "⏳ Ping",
        value: `${Math.round(client.ws.ping)}ms`,
        inline: true,
      },
      {
        name: "Join Date",
        value: client.user.createdAt,
        inline: true,
      },
      {
        name: "Server Info",
        value: `Cores: ${os.cpus().length}`,
        inline: true,
      }
    )
    .setFooter(`Created By:  Kevin Malone#8142`);

  await message.lineReplyNoMention(embed);
};
exports.help = {
  name: "stats",
  description: "bot stats",
  usage: "stats ",
  example: "stats",
};

exports.conf = {
  aliases: [""],
};
