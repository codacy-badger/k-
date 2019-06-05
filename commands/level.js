exports.run = (client, message, params) => {
	const { Discord, RichEmbed } = require('discord.js') 
	let member = message.mentions.members.first()|| message.member
	let key = `${message.guild.id}-${member.user.id}`



	
		const embed = new RichEmbed()
		.setColor(client.EmbedColor)
		.setTitle(`${member.user.username}'s level!`)
		.addField(`Level`, `Level ${client.points.get(key, "level")}`, true)
		.addField(`Points`, `Points ${client.points.get(key, "points")}`)
		message.channel.send(embed)
	
	
	
	
	
	};
	exports.info = {
		name: "level",
		desc: "See your current level",
		use: "level \'User\'",
		level: 0,
		category: "Level",
		aliases: ['rank']
	};
	