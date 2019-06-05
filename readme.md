<div align="center">
  <p>
    <a href="https://discord.gg/vnuSpVD"><img src="https://discordapp.com/api/guilds/547571839145082883/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="NPM version" /></a>  
  </p>
</div>

## About
FortBot is a custom discord bot that provides commands such as **>itemshop** and **>userstats** for fortnite status. This bot also has numerous moderation commands and other fun commands. If you have any problems or find any bugs in the bot please DM Olykir#0287.

## Usage
Create a settings folder named `settings.json`, inside of the folder put the following with your information
```json
{
	"ownerID": "YourUserID",
	"modRoleID": "ModRoleID",
	"adminRoleID": "AdminRoleID",
	"prefix": ">",
	"token": "YourBotsToken",
	"FortTrackerKey" : "FortniteTrackerAPIKey",
	"EmbedColor" : 16716830,
	"BannedWords" : ["nigger", "n!gger"],
	"BannedWordFind" : true,

	"channels" : {
		"BotOnly" : false,
		"BotChannel" : "BotsChannel",
		"Logs" : true,
		"LogChannelID" : "LogsChannel"
	},
	"err" : {
		"NoArgs" : "Please provide some arguments!",
		"Error" : "There seems to have been an error while running this command.",
		"NoUser" : "Please mention someone!",
		"NoUserFound" : "No one was found under that username.",
		"GiphyError" : "No .gif's were found under that search.",
		"KickError" : "Could not kick that user.",
		"BanError" : "Could not ban that user."
	},
	"Roles" : {
    "Members" : "MemberRole",
    "Levels" : {
        "10" : "Level 10",
        "25" : "Level 25",
        "50" : "Level 50",
        "75" : "Level 75"
    }
}

}

```

To run the bot use `node app.js`, or if you are using pm2 use `pm2 start app.js --name FortBot`


## Commands
```
8ball,
ban,
coinflip,
eval,
guildinfo,
help,
howgay,
itemshop,
kick,
purge,
roleinfo,
say,
softban,
stats,
taunt,
userinfo,
userstats
```