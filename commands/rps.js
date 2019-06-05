const {
	Discord,
	RichEmbed
} = require("discord.js");
exports.run = (client, message, params) => {
    const choices = ["paper", "rock", "scissors"]
	const choice = params[0]
	const botChoice = choices[Math.floor(Math.random() * choices.length)]


	const key = `${message.author.id}`;

  client.RPSWins.ensure(`${message.author.id}`, {
	user: message.author.id,
	rpsWins: 0
  });


	function rps(input, botInput) {
		 if(input === botInput) {
			 return `I choose **${botInput}**, It looks like its a tie!`
		} if(input === "paper" && botInput === "rock") {
			client.RPSWins.inc(key, "rpsWins");
			client.Currency.set(key, {balance: client.Currency.get(key).balance + Math.floor(Math.random() * 75), lastUsed: client.Currency.get(key).lastUsed})
			return `I choose **${botInput}**, It looks like you win this time :cry:. You now have **${client.RPSWins.get(key, "rpsWins")}** Wins!`
			
		} if(input === "paper" && botInput === "scissors") {
			return `I choose **${botInput}**, I win!`
		} if(input === "rock" && botInput === "paper") {
		return `I choose **${botInput}**, I win!`
		} if(input === "rock" && botInput === "scissors") {

			client.RPSWins.inc(key, "rpsWins");
			client.Currency.set(key, {balance: client.Currency.get(key).balance + Math.floor(Math.random() * 75), lastUsed: client.Currency.get(key).lastUsed})
			return `I choose **${botInput}**, It looks like you win this time :cry:. You now have **${client.RPSWins.get(key, "rpsWins")}** Wins!`
		}  if(input === "scissors" && botInput === "rock") {
			return `I choose **${botInput}**, I win!`
		} if(input === "scissors" && botInput === "paper") {
			client.RPSWins.inc(key, "rpsWins");
			client.Currency.set(key, {balance: client.Currency.get(key).balance + Math.floor(Math.random() * 75), lastUsed: client.Currency.get(key).lastUsed})
			return `I choose **${botInput}**, It looks like you win this time :cry:. You now have **${client.RPSWins.get(key, "rpsWins")}** Wins!`
		} 
	}




    if(!choice || choices.includes(choice) === false) {
		const NoArgsEmbed = new RichEmbed()
		.setColor(client.EmbedColor)
		.setTitle('No Arguments!')
		.addField(`Please provide one of the following!`, `**${choices.join("**, **")}**`)
		.addField(`Wins`, `**${client.RPSWins.get(key, "rpsWins")}**`)
		message.channel.send(NoArgsEmbed)
        //message.channel.send(`Please select one of the following **${choices.join("**, **")}**, You have **${client.RPSWins.get(key, "rpsWins")}** Wins!`)
	}  else {
	message.channel.send(rps(choice, botChoice))
	}
}
exports.info = {
	name: "rps",
	desc: "Play rock, paper, sissors!",
	use: "rps \'choice\'",
	level: 0,
	category: "Fun",
	aliases: []
};
