const moment = require("moment");
const Discord = require('discord.js');
const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const fetch = require("node-fetch"); 
const imageUrlRegex = /\?size=2048$/g;
 Canvas.registerFont(resolve(join(__dirname, "../Whitney-BlackSC.otf")), "Discord");
require("moment-duration-format");
exports.run = async(client, message, args) => {
    const key = `${message.guild.id}-${message.author.id}`;

    if (message.guild) {
    
        const key = `${message.guild.id}-${message.author.id}`;
    
        if (!client.points.has(key)) {
          
          client.points.set(key, {
            
            user: message.author.id, guild: message.guild.id, points: 0, level: 1
          });
        }
        
        const buffer = await profile(message.member, client.points.get(key));
        const filename = `profile-${message.author.id}.jpg`;
        const attachment = new Attachment(buffer, filename);
        await message.channel.send(attachment);
      }
    
    async function profile(member, score) {
        
        const { level, points } = client.points.get(key);

        const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
        if (!result.ok) throw new Error("Failed to get the avatar.");
        const avatar = await result.buffer();


        const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;

        try {
        
        } catch (error) {
        await message.channel.send(`:no_good: Something happened: ${error.message}`);
        }

        return new Canvas(400, 180)
        .setColor("#7289DA")
        .addRect(84, 0, 316, 180)
        .setColor("#2C2F33")
        .addRect(0, 0, 84, 180)
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor("rgba(22, 22, 22, 1)") 
        .setShadowOffsetY(5)
        .setShadowBlur(10) 
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 84, 90, 62)
        .save()
        .createBeveledClip(20, 138, 128, 32, 5)
        .setColor("#23272A")
        .fill()
        .restore()
        .setTextAlign("center")
        .setTextFont("10.5pt Discord")
        .setColor("#FFFFFF")
        .addText(message.author.username, 285, 54)
        .addText(`Level: ${level.toLocaleString()}`, 84, 159)
        .setTextAlign("left")
        .addText(`Score: ${points.toLocaleString()}`, 241, 136)
        
.toBuffer()

      
    }
};




exports.info = {
	name: "profile",
	desc: "profile",
	use: "profile \'User\'",
	level: 0,
	category: "Level",
	aliases: []
};
