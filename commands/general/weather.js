const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = async (client, message, args) => {
  let city = args.join(' ');
  let degreetype = 'C'; // You can change it to F. (fahrenheit.)

  await weather.find(
    { search: city, degreeType: degreetype },
    function (err, result) {
      if (!city) {
        const weatherNoCity = new Discord.MessageEmbed()
          .setAuthor('Please enter the city.')
          .setTimestamp()
          .setColor('#2ED8BA');
        return message.channel.send(weatherNoCity);
      }
      if (err || result === undefined || result.length === 0) {
        const weatherUnknown = new Discord.MessageEmbed()
          .setAuthor('Unknown city. Please enter the correct name.')
          .setTimestamp()
          .setColor('#2ED8BA');
        return message.channel.send(weatherUnknown);
      }
      let current = result[0].current;
      let location = result[0].location;

      const embed = new Discord.MessageEmbed()
        .setAuthor(current.observationpoint)
        .setDescription(`> ${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .setTimestamp()
        .setColor('#2ED8BA');

      embed
        .addField('Latitude', location.lat, true)
        .addField('Longitude', location.long, true)
        .addField('Feels Like', `${current.feelslike}° Degrees`, true)
        .addField('Degree Type', location.degreetype, true)
        .addField('Winds', current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)
        .addField('Timezone', `GMT ${location.timezone}`, true)
        .addField('Temperature', `${current.temperature}° Degrees`, true)
        .addField('Observation Time', current.observationtime, true);

      return message.channel.send(embed);
    }
  );
};

exports.help = {
  name: 'weather',
  description: 'Responds with weather information for a specific location.',
  usage: '=weather <city/zipcode>',
  example: '=weather Chennai',
};

exports.conf = {
  aliases: ['w'],
  cooldown: 0,
};
