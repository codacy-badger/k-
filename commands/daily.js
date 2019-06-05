const { Discord, RichEmbed } = require('discord.js')
exports.run = (client, message, params) => {

const user = message.member
const key = user.id
    client.Currency.ensure(key, {
        balance: 500,
        lastUsed: null
    })

  if(message.createdTimestamp - client.Currency.get(key).lastUsed >= 86400000) {
        client.Currency.set(key, {balance: client.Currency.get(key).balance + 100, lastUsed: message.createdTimestamp})
        const newBal = new RichEmbed()
        .setColor(client.EmbedColor)
        .addField(`You have claimed your 100 daily credits!`, `Your balance is now ${client.Currency.get(key).balance}`)
        message.channel.send(newBal)
    } else {
        message.channel.send(`Command can only be used every **24 Hours**`)
   }
};
exports.info = {
	name: "daily",
	desc: "Claim your daily credits",
	use: "daily",
	level: 0,
	category: "Currency",
	aliases: []
};
