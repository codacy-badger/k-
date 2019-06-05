const { Discord, RichEmbed } = require('discord.js')
exports.run = (client, message, params) => {
const role = message.guild.roles.find(f => f.name === "@everyone")

    if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_CHANNELS")) {
        message.channel.send(client.settings.err.NoPerms)
        return
    }

    if(message.channel.permissionsFor(message.guild.id).has("SEND_MESSAGES")) {
        message.guild.channels.forEach(f => {
            f.overwritePermissions(role.id, {
                READ_MESSAGES: false,
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
        })
            message.channel.send(`Server is now on lockdown!`)
    } else if(!message.channel.permissionsFor(message.guild.id).has("SEND_MESSAGES")) {
        
        message.guild.channels.forEach(f => {
            f.overwritePermissions(role.id, {
                READ_MESSAGES: true,
                SEND_MESSAGES: true,
                ADD_REACTIONS: true
            })
        })
            message.channel.send(`Server is no longer on lockdown!`)

    }


};
exports.info = {
	name: "lockdown",
	desc: "Lockdown the server (Anyone with rols can speak)",
	use: "lockdown",
	level: 2,
	category: "Moderation",
	aliases: []
};
