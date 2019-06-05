<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="NPM version" /></a>  
  </p>
</div>

## About
FortNut is a custom discord bot that provides commands such as **>itemshop** and **>userstats** for fortnite status. This bot also has numerous moderation commands and other fun commands. If you have any problems or find any bugs in the bot please DM Olykir#0287.

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

	
	"err" : {
		"NoArgs" : "Please provide some arguments!",
		"Error" : "There seems to have been an error while running this command.",
		"NoUser" : "Please mention someone!",
		"NoUserFound" : "No one was found under that username.",
		"GiphyError" : "No .gif's were found under that search.",
		"KickError" : "Could not kick that user.",
		"BanError" : "Could not ban that user."
	}
}

```

To run the bot use `node app.js`, or if you are using pm2 use `pm2 start app.js --name FortBot`


## Commands
List coming soon
