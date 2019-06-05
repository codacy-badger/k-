const {
	Discord,
	RichEmbed
} = require("discord.js");
exports.run = (client, message, params) => {
	const commandNames = Array.from(client.commands.keys())
	const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	const args = params[0]
	const input = client.commands.get(args)

	function GatherCommands(cmdCategory) {
		let cmds = []
		client.commands.forEach(c => {
			if(c.info.category === cmdCategory) {
				cmds.push(`${c.info.name}`)
			}
		})
		if(cmds.length === 0) {
			return "No commands!"
		} else if(cmds.length > 0) {
		return cmds
		}
	}

	if(!args) {
		if(message.author.id === "222563393649901580") {
			const DevHelp = new RichEmbed()
		.setTitle(`Command Categories!`)
		.setColor(client.EmbedColor)
		.addField(`Moderation 🛠 (${GatherCommands('Moderation').length})`, `\`${GatherCommands('Moderation').join("\`, \`")}\``)
		.addField(`Information 📁 (${GatherCommands('Information').length})`,`\`${GatherCommands('Information').join("\`, \`")}\``)
		.addField(`Fun 🎲 (${GatherCommands('Fun').length})`,`\`${GatherCommands('Fun').join("\`, \`")}\``)
		.addField(`Fortnite (${GatherCommands('Fortnite').length})`,`\`${GatherCommands('Fortnite').join("\`, \`")}\``)
		.addField(`Levels ⬆ (${GatherCommands('Level').length})`, `\`${GatherCommands('Level').join("\`, \`")}\``)
		.addField(`Currency 💵 (${GatherCommands('Currency').length})`,`\`${GatherCommands('Currency').join("\`, \`")}\``)
		.addField(`Misc ✴ (${GatherCommands('Misc').length})`,`\`${GatherCommands('Misc').join("\`, \`")}\``)
		.addField(`Dev ⚙ (${GatherCommands('Dev').length})`, `\`${GatherCommands('Dev').join("\`, \`")}\``)
		.setDescription(`Click [here](https://discord.gg/a4PqPE3) for support!`)
		message.channel.send(DevHelp)
		return
		} if(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('KICK_MEMBERS')) {
			const AdminHelp = new RichEmbed()
			.setTitle(`Command Categories!`)
			.setColor(client.EmbedColor)
			.addField(`Moderation 🛠 (${GatherCommands('Moderation').length})`, `\`${GatherCommands('Moderation').join("\`, \`")}\``)
			.addField(`Information 📁 (${GatherCommands('Information').length})`,`\`${GatherCommands('Information').join("\`, \`")}\``)
			.addField(`Fun 🎲 (${GatherCommands('Fun').length})`,`\`${GatherCommands('Fun').join("\`, \`")}\``)
			.addField(`Fortnite (${GatherCommands('Fortnite').length})`,`\`${GatherCommands('Fortnite').join("\`, \`")}\``)
			.addField(`Levels ⬆ (${GatherCommands('Level').length})`, `\`${GatherCommands('Level').join("\`, \`")}\``)
			.addField(`Currency 💵 (${GatherCommands('Currency').length})`,`\`${GatherCommands('Currency').join("\`, \`")}\``)
			.addField(`Misc ✴ (${GatherCommands('Misc').length})`,`\`${GatherCommands('Misc').join("\`, \`")}\``)
			.setDescription(`Click [here](https://discord.gg/a4PqPE3) for support!`)
			message.channel.send(AdminHelp)
		} else {
			const RegHelp = new RichEmbed()
			.setTitle(`Command Categories!`)
			.setColor(client.EmbedColor)
			.addField(`Information 📁 (${GatherCommands('Information').length})`,`\`${GatherCommands('Information').join("\`, \`")}\``)
			.addField(`Fun 🎲 (${GatherCommands('Fun').length})`,`\`${GatherCommands('Fun').join("\`, \`")}\``)
			.addField(`Fortnite (${GatherCommands('Fortnite').length})`,`\`${GatherCommands('Fortnite').join("\`, \`")}\``)
			.addField(`Levels ⬆ (${GatherCommands('Level').length})`, `\`${GatherCommands('Level').join("\`, \`")}\``)
			.addField(`Currency 💵 (${GatherCommands('Currency').length})`,`\`${GatherCommands('Currency').join("\`, \`")}\``)
			.addField(`Misc ✴ (${GatherCommands('Misc').length})`,`\`${GatherCommands('Misc').join("\`, \`")}\``)
			.setDescription(`Click [here](https://discord.gg/a4PqPE3) for support!`)
			message.channel.send(RegHelp)
		}}
		
		
		/* {
		const CategorysDisplay = new RichEmbed()
		.setTitle(`Command Categories!`)
		.setColor(client.EmbedColor)
		.addField(`Moderation (${GatherCommands('Moderation').length})`, `\`${GatherCommands('Moderation').join("\`, \`")}\``)
		.addField(`Information (${GatherCommands('Information').length})`,`\`${GatherCommands('Information').join("\`, \`")}\``)
		.addField(`Fun (${GatherCommands('Fun').length})`,`\`${GatherCommands('Fun').join("\`, \`")}\``)
		.addField(`Fortnite (${GatherCommands('Fortnite').length})`,`\`${GatherCommands('Fortnite').join("\`, \`")}\``)
		.addField(`Levels (${GatherCommands('Level').length})`, `\`${GatherCommands('Level').join("\`, \`")}\``)
		.addField(`Misc (${GatherCommands('Misc').length})`,`\`${GatherCommands('Misc').join("\`, \`")}\``)
		.setDescription(`Click [here](https://discord.gg/a4PqPE3) for support!`)
		message.channel.send(CategorysDisplay)
		return
	}}
	*/


	const aliases = input.info.aliases.join(`\`, \``)
	if(args) {
		if(client.commands.has(args)) {
		const CommandEmbed = new RichEmbed()
		.setTitle(`Information about: *${client.prefix}${input.info.name}*`)
		.setColor(client.EmbedColor)
		.addField(`Description!`, input.info.desc)
		.addField('Usage!', input.info.use)
		.addField(`Aliases! (${input.info.aliases.length})`, `\`${aliases}\``)
		.setFooter(`${client.user.tag}'s commands!`)
		.setThumbnail(client.user.displayAvatarURL)
		.setTimestamp()
		message.channel.send(CommandEmbed)
		} else if(args === 'Fun' || args === 'Moderation' || args === 'Information' || args === 'Fortnite' || args === "Levels" || args === "Dev") {
			const CategoryDisplay = new RichEmbed()
		.setTitle(`${args} (${GatherCommands(args).length})`)
		.setColor(client.EmbedColor)
		.addField('Commands:', `\`${GatherCommands(args).join("\`, \`")}\``)
		message.channel.send(CategoryDisplay)
		} else if(!client.commands.has(args)) {
			message.channel.send(`No command found! **${client.settings.prefix}${args}**`)
		}
	}
		
	
}
exports.info = {
	name: "help",
	desc: "Get the bots commands!",
	use: "help  \'command\'",
	level: 0,
	category: "Information",
	aliases: ['h', '?', 'support']
};
