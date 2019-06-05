exports.run = (client, message, params) => {
	const {
		Client,
		RichEmbed
	} = require('discord.js');
	const Fortnite = require('fortnite')
	const fortnite = new Fortnite(client.settings.FortTrackerKey)
	let data = fortnite.store().then(d => {
		let item1 = d[0]
		let item2 = d[1]
		let item3 = d[2]
		let item4 = d[3]
		let item5 = d[4]
		let item6 = d[5]
		let item7 = d[6]
		const items = new RichEmbed().setTitle(`Item Shop!`).setColor(client.EmbedColor).addField(item1.name, `[V-Bucks: ${item1.vbucks}](${item1.image})`, true).addField(item2.name, `[V-Bucks: ${item2.vbucks}](${item2.image})`, true).addField(item3.name, `[V-Bucks: ${item3.vbucks}](${item3.image})`, true).addField(item4.name, `[V-Bucks: ${item4.vbucks}](${item4.image})`, true).addField(item5.name, `[V-Bucks: ${item5.vbucks}](${item5.image})`, true).addField(item6.name, `[V-Bucks: ${item6.vbucks}](${item6.image})`, true).addField(item7.name, `[V-Bucks: ${item7.vbucks}](${item7.image})`, true)
		message.channel.send(items)
	})
};
exports.info = {
	name: "itemshop",
	desc: 'View the Fortnite item shop!',
	use: 'itemshop',
	level: 0,
	category: "Fortnite",
	aliases: []
}
