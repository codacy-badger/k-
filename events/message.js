module.exports = message => {
	const client = message.client;
	const {
		Discord,
		RichEmbed
	} = require('discord.js')



	if(message.author.id === "554686340248371209") return;
	if(message.channel.type === 'dm') return
	
	if(!message.content.startsWith(client.settings.prefix)) return;

	const command = message.content.split(" ")[0].slice(client.settings.prefix.length).toLowerCase()
	const params = message.content.split(" ").slice(1);

	let cmd;

	if(client.commands.has(command)) {
		try {
			cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
			if(cmd.info.level === 0) {
				cmd.run(client, message, params)
				client.commandsUsed.inc(`bot`)
			}  if(cmd.info.level === 1) {
				if(!message.member.hasPermission('KICK_MEMBERS')) {
					message.react("👎")
					return;
				}
				cmd.run(client, message, params)

			}
			  if(cmd.info.level === 2) {
				if(!message.member.hasPermission('ADMINISTRATOR')) {
					message.react("👎")
					return;
				}
				cmd.run(client, message, params)
				client.commandsUsed.inc(`bot`)

			} 
			if(cmd.info.level === 3) {
				if(!message.author.id === client.settings.ownerID) {
					message.channel.send('It seems you do not have the correct permissions!')
					
					return;
				}
				cmd.run(client, message, params)
				client.commandsUsed.inc(`bot`)
			}
		} catch(err) {
			console.error(err)
			message.channel.send('There seems to have been an error running that command')
		}
	} else if(client.aliases.has(command)) {
		try {
			cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
			if(cmd.info.level === 0) {
				cmd.run(client, message, params)
				client.commandsUsed.inc(`bot`)
			}  if(cmd.info.level === 1) {
				if(!message.member.hasPermission('KICK_MEMBERS')) {
					message.react("👎")
					return;
				}
				cmd.run(client, message, params)

			}
			  if(cmd.info.level === 2) {
				if(!message.member.hasPermission('ADMINISTRATOR')) {
					message.react("👎")
					return;
				}
				cmd.run(client, message, params)
				client.commandsUsed.inc(`bot`)

			} 
			if(cmd.info.level === 3) {
				if(!message.author.id === client.settings.ownerID) {
					message.channel.send('It seems you do not have the correct permissions!')
					
					return;
				}
				cmd.run(client, message, params)
				client.commandsUsed.inc(`bot`)
			}
		} catch(err) {
			console.error(err)
			message.channel.send('There seems to have been an error running that command')
		}
	}


}
