exports.run = (client, message, args) => {
	var str = `${args.join(" ")}`
	if(!str) {
		message.channel.send(client.settings.err.NoArgs)
	} else {
		var s = str.toLowerCase().split("")
		var newStr = ""
		for(i = 0; i < s.length; i++) {
			if(Math.floor((Math.random() * 100) + 1) >= 50) {
				let upperStr = s[i].toUpperCase()
				newStr += upperStr
			} else {
				newStr += s[i]
			}
		}
		message.channel.send({
			embed: {
				color: client.settings.EmbedColor,
				description: `**${newStr}**`,
				image: {
					url: "https://images-ext-2.discordapp.net/external/RUoPiekUBqm8Y0s0uRsjIXJl0MTdLle-6srhEm2D20Y/http/i.imgur.com/cQ5HoTg.jpg"
				}
			}
		})
	}
}
exports.info = {
	name: 'taunt',
	description: 'taunt someone',
	usage: 'taunt',
	level: 0,
	category: "Fun",
	aliases: []
};
