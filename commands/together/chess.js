const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
exports.run = async (client, message, args) => {
  try {
    if (!message.member.voice.channel) return message.lineReply("join a vc");
    client.discordTogether
      .createTogetherCode(message.member.voice.channelID, "chess")
      .then(async (invite) => {
        let button = new MessageButton()
          .setLabel("Click here to join")
          .setStyle("url")
          .setURL(invite.code);
        const embed = new MessageEmbed()
          .setTitle("Play chess with your friends in discord vc")
          .setColor("#596854");
        return message.channel.send(embed, button);
      });
  } catch (err) {
    console.log(err);
  }
};
exports.help = {
  name: "chess",
  description:
    "Play chess with your friends in discord vc (only works if youre in a PC",
  usage: "=chess",
  example: "=chess",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
