const {
	Discord,
	RichEmbed
} = require("discord.js");
exports.run = (client, message, params) => {
const user = message.mentions.members.first() || message.guild.members.find(f => f.user.username.toLowerCase() === params[0])  || message.member 


const embed = new RichEmbed()
.setColor(client.EmbedColor)
.setTitle(`${user.user.username}'\s Avatar!`)
.setImage(user.user.displayAvatarURL)
message.channel.send(embed)


}
exports.info = {
	name: "avatar",
	desc: "See a users avatar",
	use: "avatar \'user\'",
	level: 0,
	category: "Information",
	aliases: ['pfp', 'icon']
};
