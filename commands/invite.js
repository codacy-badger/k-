exports.run = (client, message) => {
const { Discord, RichEmbed } = require('discord.js')

const embed = new RichEmbed()
.setColor(client.settings.EmbedColor)
.setDescription('To invite me click [here](https://discordapp.com/oauth2/authorize?client_id=554686340248371209&scope=bot&permissions=201411648)')
message.channel.send(embed)

};
exports.info = {
	name: "invite",
	desc: "Invite the bot to your server",
	use: "invite",
	level: 0,
	category: "Misc",
	aliases: []
};
