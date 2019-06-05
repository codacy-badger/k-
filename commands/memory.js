exports.run = async (client, message, params) => {
const numbers = []
const user = message.author
const credits = Math.floor(Math.random() * 20)
message.delete()
for(var i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * 9))
}

message.channel.send(`Memorize the following: \n\`${numbers.join("\`\n\`")}\``).then(f => {f.delete(2500)})


const filter = m =>  m.content === numbers.join("")
message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
  .then( (collected) => {
     client.Currency.set(user.id, {balance: client.Currency.get(user.id).balance + credits, lastUsed: client.Currency.get(user.id).lastUsed})
    message.channel.send(`Correct! You won ${credits} credits!`)
   
  })
  .catch(collected => message.channel.send(`Incorrect! The answer was \`${numbers.join("")}\`, you didnt guess in 10 Seconds.`));


};
exports.info = {
	name: "memory",
	desc: "Memorize the numbers and say them back",
	use: "memory",
	level: 0,
	category: "Fun",
	aliases: []
};
