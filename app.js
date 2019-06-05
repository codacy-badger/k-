const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const fs = require("fs");
const Enmap = require("enmap");
client.points = new Enmap({name: "points"});
client.RPSWins = new Enmap({name: "rpsWins"});
client.EpicNames = new Enmap({name: "epicnames"})
client.DickSize = new Enmap({name: "DickSize"})
client.Currency = new Enmap({name: "Currency"})
client.store = new Enmap({name: "store"})
client.howgay = new Enmap({name: 'howgay'})
client.commandsUsed = new Enmap({name: 'cmds'})

require("./util/eventLoader")(client);
client.settings = settings;
client.commands = new Discord.Collection();
client.supportServer = settings.SupportServer
client.ownerID = settings.ownerID
client.prefix = settings.prefix
client.EmbedColor = settings.EmbedColor
client.Roles = settings.Roles
client.queue = []



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    client.commands.set(props.info.name, props);
    props.info.aliases.forEach(alias => {
      client.aliases.set(alias, props.info.name);
    });
  });
});





  client.on("message", message => {
	if (message.author.bot) return;



	if (message.guild) {
	  const key = `${message.guild.id}-${message.author.id}`;
		if(message.channel.name === "spam") return
	  client.points.ensure(`${message.guild.id}-${message.author.id}`, {
		user: message.author.id,
		guild: message.guild.id,
		points: 0,
		level: 1
	  });
	  
	  client.points.inc(key, "points");
	  

	  const curLevel = Math.floor(.15 * Math.sqrt(client.points.get(key, "points")));
	  
	}
	
  });

	client.reload = command => {
		return new Promise((resolve, reject) => {
			try {
				delete require.cache[require.resolve(`./commands/${command}`)];
				let cmd = require(`./commands/${command}`);
				client.commands.delete(command);

				client.commands.set(command, cmd);

				resolve();
			} catch (e){
				reject(e);
			}
		});
	};

	function message(guildName, ChannelName, content) {
		const guild = client.guilds.find(f => f.name === guildName)
		const channel = guild.channels.find(c => c.name === ChannelName)
		channel.send(content)
		
		}


client.login(settings.token);