const {	Discord, RichEmbed } = require('discord.js')
exports.run = (client, message, params) => {
	const responses = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes, definitely', 'As i see it, yes', 'Most likely', 'Yes', 'The outlook is good', 'Signs point to yes', 'Reply hazy, try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Dont count on it', 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']
	const question = params.join(" ")
	if(!question) {
		message.channel.send(client.settings.err.NoArgs)
	} else { 
		const embed = new RichEmbed().setTitle(`Question: **${question}**`).setDescription(`The magic 8ball says: **${responses[Math.floor(Math.random() * responses.length)]}**`).setColor(client.EmbedColor)
		message.channel.send(embed)
	}
};
exports.info = {
	name: "8ball",
	desc: "Ask anything, get an answer",
	use: "8ball \'question\`",
	level: 0,
	category: "Fun",
	aliases: []
};
