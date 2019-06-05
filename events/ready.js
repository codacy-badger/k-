module.exports = client => {
	console.log("I'm Online!");
	client.commandsUsed.ensure('bot', 0)
	client.commandsUsed.set('bot', 0)
	client.user.setActivity(`${client.prefix}help || ${client.users.size} Users`);
}
