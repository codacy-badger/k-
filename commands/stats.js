const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = (client, msg, args) => {
	const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
	
	const embed = new Discord.RichEmbed()
	.setColor(client.EmbedColor)
	.setTitle(`Bot's status!`)
	.addField("Mem Usage", `**${ (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`, true)
	.addField("Commands Used", `**${client.commandsUsed.get('bot')}**`, true)
	.addField("Uptime", `**${duration}**`, true)
	.addBlankField()
	.addField("Users", `**${client.users.size - 1}**`, true)
	.addField(`Servers`, `**${client.guilds.size.toLocaleString()}**`, true)
	.addField(`Channels`, `**${client.channels.size.toLocaleString()}**`, true)
	msg.channel.send({
		embed
	});
};
exports.info = {
	name: "stats",
	desc: "Get the bot's status!",
	use: 'stats',
	level: 0,
	category: "Information",
	aliases: ['status']
};
