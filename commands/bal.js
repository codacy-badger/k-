const { Discord, RichEmbed } = require('discord.js')
exports.run = (client, message, params) => {
const user = message.mentions.members.first() || message.member
const key = user.id
    client.Currency.ensure(key, {
        balance: 500,
        lastUsed: null
    })
const balEmbed = new RichEmbed()
.addField(`${user.user.tag}'s balance!`, `${client.Currency.get(key).balance}₡`)
.setColor(client.EmbedColor)
    message.channel.send(balEmbed)

};
exports.info = {
	name: "bal",
	desc: "View your balence",
	use: "bal \'user\'",
	level: 0,
	category: "Currency",
	aliases: ['balance']
};
