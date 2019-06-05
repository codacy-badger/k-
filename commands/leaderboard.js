
exports.run = (client, message, params) => {

  const Discord = require('discord.js') 
  const filtered = client.points.filter( p => p.guild === message.guild.id ).array();
  const sorted = filtered.sort((a, b) => b.points - a.points);
  const top10 = sorted.splice(0, 5);
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 5 points leaders!")
    .setColor(client.EmbedColor);
  for(const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  message.channel.send({embed});


};
exports.info = {
name: "leaderboard",
desc: "View the levels",
use: "leaderboard",
level: 0,
category: "Level",
aliases: []
};
