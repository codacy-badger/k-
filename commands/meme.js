const got = require('got');
exports.run = (client, message, params) => {

    const Discord = require('discord.js')
    got('https://www.reddit.com/r/meme/random/.json').then(response => {
      let content = JSON.parse(response.body);
      var title = content[0].data.children[0].data.title;
      var image = content[0].data.children[0].data.url;
      const sent = new Discord.RichEmbed()
        .setTitle(title)
        .setImage(image)
        .setColor(client.EmbedColor)
      message.channel.send(sent)
      //msg.channel.send(image)
    }).catch(console.error);
  }


exports.info = {
	name: "meme",
	desc: "View a meme",
	use: "meme",
	level: 0,
	category: "Fun",
	aliases: []
};
