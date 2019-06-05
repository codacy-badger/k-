exports.run = (client, message, params) => {
const link = 'http://lmgtfy.com/?q='

if(!params[0]) {
    message.channel.send(client.settings.err.NoArgs)
} else {
    message.channel.send(`Here you go!\n${link}${params.join("+")}`)
}

};
exports.info = {
	name: "lmgtfy",
	desc: "Let me google that for you!",
	use: "lmgtfy \'search\'",
	level: 0,
	category: "Fun",
	aliases: ['google']
};
