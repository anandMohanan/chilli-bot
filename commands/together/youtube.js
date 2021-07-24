const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
exports.run = async (client, message, args) => {
  try {
    if (!message.member.voice.channel) return message.lineReply("join a vc");
    client.discordTogether
      .createTogetherCode(message.member.voice.channelID, "youtube")
      .then(async (invite) => {
        let button = new MessageButton()
          .setLabel("Click here to watch youtube with your friends in discord")
          .setStyle("url")
          .setURL(invite.code);
        const embed = new MessageEmbed()
          .setTitle("Watch youtube with your friends in discord vc")
          .setColor("#596854")
          .setTimestamp();

        return message.channel.send(embed, button);
      });
  } catch (err) {
    console.log(err);
  }
};
exports.help = {
  name: "youtube",
  description:
    "watch youtube videos with your friends in vc (only works if youre in a PC",
  usage: "=youtube",
  example: "=youtube",
};

exports.conf = {
  aliases: ["yt"],
  cooldown: 0,
};
