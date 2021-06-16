const { MessageEmbed } = require("discord.js");
const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];
exports.run = async (client, message, args) => {
  const question = args.join(" ");
  if (!question)
    return this.sendErrorMessage(
      message,
      0,
      "Please provide a question to ask"
    );
  const embed = new MessageEmbed()
    .setTitle("The Magic 8-Ball")
    .addField("Question", question)
    .addField(
      "Answer",
      `${answers[Math.floor(Math.random() * answers.length)]}`
    )
    .setColor("#ff0000");
  message.channel.send(embed);
};
exports.help = {
  name: "8ball",
  description: "Asks the Magic 8-Ball for some psychic wisdom.",
  usage: "=8ball <question>",
  example: "=8ball am i gay?",
};

exports.conf = {
  aliases: ["8b"],
  cooldown: 0,
};
