
exports.run = (client, message, params) => {
	if (message.author.id !== client.ownerID) {
		message.react("👎")
		return
    }
		client.user.setActivity('Restarting...')
		message.react("👍").then(d => process.kill(0))
	
};
exports.info = {
	name: "restart",
	desc: "restart the bot",
	use: "restart",
	level: 3,
	category: "Dev",
	aliases: ['r']
};
