exports.run = (client, message, params) => {
	let sides = ['heads', 'tails']
	let choice = sides[Math.floor(Math.random() * sides.length)]
	message.channel.send(`The coin landed on **${choice}**!`)
};
exports.info = {
	name: "coinflip",
	desc: "Flip a coin",
	use: "coinflip",
	level: 0,
	category: "Fun",
	aliases: []
};
