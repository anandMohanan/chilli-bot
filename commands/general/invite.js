const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const InviteLink =
    "https://discord.com/api/oauth2/authorize?client_id=858246719649087509&permissions=8&scope=bot%20applications.commands";
  let pingEmbed = new Discord.MessageEmbed()
    .setTitle("Invite me!")
    .setURL(InviteLink);
  return message.lineReply(pingEmbed);
};

exports.help = {
  name: "invite",
  description: "Returns an invite link for the bot",
  usage: "invite",
  example: "invite",
};

exports.conf = {
  aliases: ["invitelink", "inviteme", "invitebot", "inv"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
