const Discord = require('discord.js')
exports.run = (client, message, params) => {


    let User = message.mentions.members.first() || message.member
    let gayLevelPer = Math.floor(Math.random() * 100)

    client.howgay.ensure(User.id, gayLevelPer)


    const gayLevel = new Discord.RichEmbed()
    .setTitle(`How gay is ${User.user.username}?`)
    .setDescription(`:gay_pride_flag:  ${User.user.username} is ${client.howgay.get(User.id)}% gay! :gay_pride_flag: `)
    .setColor(client.settings.EmbedColor)
    message.channel.send(gayLevel)
    
};
exports.info = {
	name: "howgay",
	desc: "See how gay you are",
	use: "howgay \'user\'",
	level: 0,
	category: "Fun",
	aliases: ['gay']
};
