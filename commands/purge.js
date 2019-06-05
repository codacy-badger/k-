exports.run = (client, message, params) => {
	const amount = params[0]
	if(!message.member.hasPermission('MANAGE_MESSAGES')) {
		message.channel.send(client.settings.err.MissingPerms)
	} else if(!amount) {
		message.channel.send(client.settings.err.NoArgs)
	} else if(parseInt(amount) > 100 || parseInt(amount) < 1) {
		message.channel.send(`Please select a number between 1 and 100`)
	} else {
		message.channel.bulkDelete(parseInt(amount))
	}
};
exports.info = {
	name: "purge",
	desc: "Delete X amount of messages",
	use: "purge \`1-100\`", 
	level: 1,
	category: "Moderation",
	aliases: ['clear']
};
