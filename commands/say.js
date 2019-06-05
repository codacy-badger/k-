exports.run = (client, message, params) => {
    const messageToSay = params.join(" ")
    if(!messageToSay) {
        message.channel.send(client.settings.err.NoArgs)
    } else {
    message.channel.send(messageToSay)
    }
};
exports.info = {
	name: "say",
	desc: "Make the bot say osmething",
    use: 'say \'message\'',
    level: 0,
    category: "Fun",
	aliases: []
};
