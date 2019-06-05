exports.run = (client, message, params) => {
const key = `${message.author.id}`

if(!params[0]) {
    message.channel.send(`Your account is linked with **${ 'None' ? client.EpicNames.get(key) : undefined}**`)
    return
} else if(!params[1]) {
	message.channel.send(`Please provide a platform!`)
	return
} 
/*
 if(params[1] !== "pc" || params[1] !== "psn" || params[1] !== "xbl") {
	message.channel.send(`Please choose one of the following! **pc**, **xbl**, **psn**`)
	console.log(params[1])
	return
}
*/
client.EpicNames.set(key, {name: params[0], platform: params[1]})
message.channel.send(`**${params[0]}** is now linked with <@${message.author.id}>, on **${params[1]}**`)

};
exports.info = {
	name: "link",
	desc: "Link your Epic Account with the bot",
	use: "link \'Epic Username\'",
	level: 0,
	category: "Fortnite",
	aliases: []
};
