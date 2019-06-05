const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const args = params.join(" ");
	if(!args) {
		message.channel.send("Please specify a user!");
		return;
	}
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const reason = args.split(`<@${member.id}> `).join(" ");

     if(member.kickable === false) {
		message.channel.send(client.settings.err.KickError);
	} else {
		message.channel.send({
			embed: {
				title: `${member.user.tag} was kicked!`,
				color: client.EmbedColor,
				description: `Reason: ${ "**none**"
					? `**${reason}**`
					: true}\nTime kicked: **${moment.utc(Date.now()).format("dddd, MMMM Do YYYY, HH:mm:ss")}**`
			}
		});
		member.kick(reason);
	}
};
exports.info = {
	name: "kick",
	desc: "Kick someone from the server",
	use: 'kick \'member  | id\'',
	level: 1,
	category: "Moderation",
	aliases: []
};
