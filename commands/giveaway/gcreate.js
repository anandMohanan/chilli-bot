const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  const giveaway = {};
  if (
    !message.member.hasPermission("MANAGE_CHANNELS") ||
    !message.member.hasPermission("MANAGE_GUILD")
  ) {
    let givenperm = new Discord.MessageEmbed()
      .setColor("#556DC8")
      .setDescription(`You dont have enough permissions to use this command`);
    return message.lineReply(givenperm);
  }

  const filter = (m) => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector(filter, {
    max: 7,
    time: 60 * 1000,
  });
  let step = 0;
  let gcprize = new Discord.MessageEmbed()
    .setColor("#556DC8")
    .setDescription("What is the prize?");
  message.lineReply(gcprize);
  collector.on("collect", async (msg) => {
    if (!msg.content) return collector.stop("error");

    step++;
    if (step == 1) {
      const prize = msg.content;
      let gcch = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription(
          `The prize is **${prize}**! Which channel do you want to host in?`
        );
      message.lineReply(gcch);
      giveaway.prize = prize;
    } else if (step == 2) {
      const channel =
        msg.mentions.channels.first() ||
        msg.guild.channels.cache.get(msg.content);
      if (!channel) return collector.stop("error");
      giveaway.channel = channel.id;
      let gcwin = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription(
          `Channel is <#${channel.id}>! Now how many winners do you want?`
        );
      message.lineReply(gcwin);
    } else if (step == 3) {
      const winners = msg.content;
      if (isNaN(winners)) return collector.stop("error");
      if (parseInt(winners) > 10) {
        let gcwinten = new Discord.MessageEmbed()
          .setColor("#556DC8")
          .setDescription("You cannot have more than 10 winners!");
        message.lineReply(gcwinten);
        return collector.stop("error");
      }
      giveaway.winners = parseInt(winners);
      let gctime = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription(
          `${winners} winner(s) will be chosen for this giveaway! How much time do you want?`
        );
      message.lineReply(gctime);
    } else if (step == 4) {
      const time = msg.content;
      if (!ms(time)) return collector.stop("error");
      giveaway.time = ms(time);
      if (ms(giveaway.time) > ms("14d")) return collector.stop("HIGH_TIME");
      let gchost = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription(
          `The time is now set to ${time}! Who is hosting the giveaway?`
        );
      message.lineReply(gchost);
    } else if (step == 5) {
      const host =
        msg.mentions.users.first() ||
        msg.guild.members.cache.get(msg.content) ||
        message.member;

      giveaway.host = host.id;
      let gcreq = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription(
          `The host is ${host}! Now do you want any requirements for the giveaway?`
        );

      message.lineReply(gcreq);
    } else if (step == 6) {
      if (!["yes", "no"].includes(msg.content.toLowerCase()))
        return collector.stop("error");
      giveaway.requirements = { enabled: msg.content == "yes" ? true : false };
      let gcdone = new Discord.MessageEmbed()
        .setColor("#556DC8")
        .setDescription(
          `Is this correct?\n\`\`\`Prize: ${giveaway.prize}\nWinner(s): ${
            giveaway.winners
          }\nTime: ${ms(giveaway.time)}\nhost: ${
            message.guild.members.cache.get(giveaway.host).user.username
          }\nRequirements: ${
            giveaway.requirements.enabled ? "Yes" : "No"
          }\n\`\`\`Reply with \`yes\` or \`no\`!`
        );
      return message.lineReply(gcdone);
    } else if (step == 7) {
      if (!["yes", "no"].includes(msg.content)) return collector.stop("error");
      if (msg.content == "yes") return collector.stop("done");
      if (msg.content == "no") return collector.stop("cancel");
    }
  });

  collector.on("end", async (msgs, reason) => {
    if (reason == "time")
      return message.channel.send("You did not reply in time!");
    if (reason == "error")
      return message.channel.send("You did not provide valid option!");
    if (reason == "cancel")
      return message.channel.send(
        "Cancelled giveaway setup due to wrong info!"
      );
    if (reason == "HIGH_TIME")
      return message.channel.send("The time cannot be more than 14 days!");

    if (reason == "done" && giveaway.requirements.enabled) {
      message.channel.send(
        "You can use role requirements: `role=ID`!(without spaces) Once you are finished putting requirements say `done`"
      );
      const rcollector = message.channel.createMessageCollector(filter, {
        time: 60 * 1000,
        max: 1000,
      });
      rcollector.on("collect", async (m) => {
        if (
          !["done", "stop", "cancel"].includes(m.content.toLowerCase()) &&
          !m.content.includes("role=")
        )
          return rcollector.stop("error");
        if (m.content.toLowerCase() == "done") return rcollector.stop("done");

        if (!giveaway.requirements.roles) giveaway.requirements.roles = [];
        const id = m.content.split(" ").join("").split("=")[1];

        if (!message.guild.roles.cache.get(id))
          return message.channel.send("That is not a valid role!");
        giveaway.requirements.roles.push(
          m.content.split(" ").join("").split("=")[1]
        );
        message.channel.send(
          `Added the role to requirements!\n\`\`\`\n${giveaway.requirements.roles
            .map((x) => message.guild.roles.cache.get(x).name)
            .join("\n")}\n\`\`\``,
          { allowedMentions: { roles: [], parse: [], users: [] } }
        );
      });

      rcollector.on("end", async (msg, r) => {
        if (r == "time")
          return message.channel.send("You did not reply in time!");
        if (r == "error")
          return message.channel.send("You did not provide valid option!");
        if (r == "cancel")
          return message.channel.send(
            "Cancelled giveaway setup due to wrong info!"
          );

        if (r == "done") {
          await client.giveaways.startGiveaway({
            prize: giveaway.prize,
            channelId: giveaway.channel,
            guildId: message.guild.id,
            duration: giveaway.time, // 30 Seconds
            winners: giveaway.winners, // 1 winner
            hostedBy: giveaway.host,
          });

          await message
            .lineReply("Created a giveaway!")
            .then((m) => setTimeout(() => m.delete(), 2000));
        }
      });
    } else {
      await client.giveaways.startGiveaway({
        prize: giveaway.prize,
        channelId: giveaway.channel,
        guildId: message.guild.id,
        duration: giveaway.time, // 30 Seconds
        winners: giveaway.winners, // 1 winner
        hostedBy: giveaway.host,
      });
      await message
        .lineReply("Created a giveaway!")
        .then((m) => setTimeout(() => m.delete(), 2000));
    }
  });
};

exports.help = {
  name: "gcreate",
  description: "Create a giveaway",
  usage: "=gcreate",
  example: "=gcreate",
};

exports.conf = {
  aliases: ["gc"],
  cooldown: 5, // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
