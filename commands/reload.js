exports.run = (client, message, params) => {
    if(!params[0]) return message.channel.send(client.settings.err.NoArgs)
    let command;
    if (client.commands.has(params[0])) {
      command = params[0];
    } 
    if (!client.commands.has(command)) {
      return message.channel.send(`I cannot find the command: ${params[0]}`); // This is ran if there is no command by that name
    } else {
      message.channel.send(`Reloading: ${command}`)
        .then(m => {
          client.reload(command)
            .then(() => {
              m.edit(`Successfully reloaded: ${command}`);
              console.log(`Reloaded ${command}`)
            })
            .catch(e => {
              m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
              console.error(`Failed to reload ${command}`)
            });
        })

    
};
}
exports.info = {
	name: "reload",
	desc: "Reload a command",
	use: "reload \'Command\'",
	level: 3,
	category: "Dev",
	aliases: []
};
