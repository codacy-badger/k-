exports.run = (client, message, params) => {
	const {
		Client,
		RichEmbed
	} = require('discord.js');
	const Fortnite = require('fortnite')
	const fortnite = new Fortnite(client.settings.FortTrackerKey)
//	let username =  client.EpicNames.get(message.mentions.members.first().id) || params[0]
	let username
	//let platform = params[1] || 'pc'
	let platform

	

	if(params[0].includes('<@')) {
		if(client.EpicNames.get(message.mentions.members.first().id) === undefined) {
			username = 'None'
		} else {
		 username =  client.EpicNames.get(message.mentions.members.first().id).name
		 platform = client.EpicNames.get(message.mentions.members.first().id).platform
		}
	} else {
		username = params[0]
	}
/*
	
	if(platform === "xbox" || platform === "xb" || platform === "xbox1") {
		platform = 'xbl'
	} else if(platform === "ps" || platform === 'playstation' || platform === 'ps4') {
		platform = 'psn'
	}
	*/
	if(!username) message.channel.send('Please provide a username!')
	let data = fortnite.user(username, platform).then(data => {
		let stats = data.stats
		let lifetime = stats.lifetime
		let kills = lifetime.kills
		let matches = lifetime.matches
		let kd = lifetime.kd
		let wins = lifetime.wins
		const embed = new RichEmbed().setTitle('Fortnite Tracker (Lifetime Stats)').setAuthor(`${data.username}'s Stats!`).setColor(client.EmbedColor).setURL(data.url).addField('Kills:', kills, true).addField('Matches Played:', matches, true).addField('K/D:', kd, true).addBlankField().addField('Wins:', wins, true).setFooter(`Platform: ${platform}`)
		message.channel.send(embed)
	}).catch(e => message.channel.send(`Could not find a user with that username!`))
};
exports.info = {
	name: "userstats",
	desc: 'Search Fortnite Tracker for information on a user',
	use: 'userstats \'username\' \'platform\'',
	level: 0,
	category: "Fortnite",
	aliases: []
}
