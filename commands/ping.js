
exports.run = (client, message, params) => {

message.channel.send(`My ping is...`).then(s => { s.edit(`My ping is **${client.ping}** MS`)}, 1000)

};
exports.info = {
	name: "ping",
	desc: "See the bots ping",
	use: "ping",
	level: 0,
	category: "Information",
	aliases: []
};
