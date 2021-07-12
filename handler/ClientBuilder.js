const Discord = require("discord.js");

module.exports = class ChilliBot extends Discord.Client {
  constructor(options) {
    super(options);

    this.commands = new Discord.Collection(); // This will store your commands.
    this.cooldowns = new Discord.Collection(); // This will store your commands with cooldowns.
    this.aliases = new Discord.Collection(); // This will store your alternative commands. Example: /server -> /serverinfo, /guild, /guildinfo
    this.config = require("../config.json");
    this.recent = new Set();
  }
};
