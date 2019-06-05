const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const args = params.join(" ");
	if(!args) {
		return message.channel.send("Please specify a user!");
	}
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const reason = args.split(`<@${member.id}> `).join(" ");
	if(!message.member.hasPermission("BAN_MEMBERS")) {
		message.channel.send(client.settings.err.MissingPerms);
		return;
	} else if(member.bannable === false) {
		message.channel.send(`I'm sorry, but **${member.user.tag}** is not able to be banned!`);
	} else {
		message.channel.send({
			embed: {
				title: `${member.user.tag} was softbanned!`,
				color: client.EmbedColor,
				description: `Reason: ${ "**The ban hammer has spoken!**"
					? `**${reason}**`
					: true}\nTime sfotbanned: **${moment.utc(Date.now()).format("dddd, MMMM Do YYYY, HH:mm:ss")}**`
			}
		});

		
        member.ban(reason + ' || Softban');
        message.guild.unban(member.id)
	}
};
exports.info = {
	name: "softban",
	desc: "Softban a member",
	use: "softban \'member | id\'",
	level: 2,
	category: "Moderation",
	aliases: []
};
