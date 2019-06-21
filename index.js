const Discord = require("discord.js");
const client = new Discord.Client();
const async = require("async");
const config = require("./config.json");
const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
let cooldown = new Set();
let cool = new Set();
let cooldo = new Set();
let coold = new Set();
let cdseconds = 3600;
const uplay = require("./uplay.json");
const spotify = require("./spotify.json");
const fortnite = require("./fortnite.json");

client.on('ready', () => {
 //client.user.setActivity(`>army | witch ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users`, {url: "https://www.twitch.tv/dominofficial"});
 console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users.`)

let statuses = [
	`All Commands under ${config.prefix}help`,
	"Fortnite Generator",
	"Uplay Generator",
	"Spotify Generator",
  "Dev: Dominik#7030"
]

setInterval(function() {
	let status = statuses[Math.floor(Math.random() * statuses.length)]
	client.user.setActivity(status, {url: "https://www.twitch.tv/dominofficial"});

}, 9000)

let fort = [`${fortnite.ko}`, `${fortnite.nt}`,`${fortnite.oo}`,`${fortnite.xd}`,`${fortnite.xdd}`,`${fortnite.xddd}`,`${fortnite.xdddd}`,`${fortnite.d}`,`${fortnite.x}`,`${fortnite.dx}`,];

let res = Math.floor((Math.random() * fort.length));

	client.on('message', async msg => {

		if (msg.author.bot) return; 
				if (msg.channel.type !== 'text') return;
	
	if (msg.content.startsWith(config.prefix + "genfortnite")){
		if(cooldown.has(msg.author.id)){
			msg.delete();
			return msg.reply(`1 Hour untill next account`)
		
		}

		cooldown.add(msg.author.id)
		
		var dominik = new Discord.RichEmbed()
		.setAuthor(`@${msg.author.tag} Generate An Account`, `${msg.author.displayAvatarURL}`)
		.setTitle(`**I sent a fortnite account to your DMs :thumbsup:**`)     
		.setThumbnail(`https://images-ext-2.discordapp.net/external/9CDKWNaiDV8eRAtum3G08g34kpe7WM7OsmUJWcCRxFI/https/pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)                       
		.setColor("BLUE")
		
		msg.channel.send(dominik);

		var elo = new Discord.RichEmbed()
		.setAuthor(`@${msg.author.tag} The Is You Account`, `${msg.author.displayAvatarURL}`)
		.addField(`:arrow_down: **You Account Info**:arrow_down: `, fort[res])     
		.setThumbnail(`https://images-ext-2.discordapp.net/external/9CDKWNaiDV8eRAtum3G08g34kpe7WM7OsmUJWcCRxFI/https/pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)                       
		.setColor("BLUE")

		msg.author.send(elo);
	}
	})
		
	let spotifyy = [`${spotify.ko}`, `${spotify.nt}`,`${spotify.oo}`,`${spotify.xd}`,`${spotify.xdd}`,`${spotify.xddd}`,`${spotify.xdddd}`,`${spotify.d}`,`${spotify.x}`,`${spotify.dx}`,];
	
	let sp = Math.floor((Math.random() * spotifyy.length));
	
		client.on('message', async msg => {
	
			if (msg.author.bot) return; 
					if (msg.channel.type !== 'text') return;
		
		if (msg.content.startsWith(config.prefix + "genspotify")){
			if(coold.has(msg.author.id)){
				msg.delete();
				return msg.reply(`1 Hour untill next account`)
			
			}
	
			coold.add(msg.author.id)
			
			var dominik = new Discord.RichEmbed()
			.setAuthor(`@${msg.author.tag} Generate An Account`, `${msg.author.displayAvatarURL}`)
			.setTitle(`**I sent a Spotify account to your DMs :thumbsup:**`)     
			.setThumbnail(`https://images-ext-2.discordapp.net/external/i6jArcXLSYRbYOV5DVKD8p-ZDQ3YK9d9CgwGfgdYvnU/https/www.smartone.com/services_and_apps/english/Spotify.png`)                       
			.setColor("BLUE")
			
			msg.channel.send(dominik);
	
			var elo = new Discord.RichEmbed()
			.setAuthor(`@${msg.author.tag} The Is You Account`, `${msg.author.displayAvatarURL}`)
			.addField(`:arrow_down: **You Account Info**:arrow_down: `, spotifyy[sp])     
			.setThumbnail(`https://images-ext-2.discordapp.net/external/i6jArcXLSYRbYOV5DVKD8p-ZDQ3YK9d9CgwGfgdYvnU/https/www.smartone.com/services_and_apps/english/Spotify.png`)                       
			.setColor("BLUE")
	
			msg.author.send(elo);
		}
		})
		
	let uplyy = [`${uplay.ko}`, `${uplay.nt}`,`${uplay.oo}`,`${uplay.xd}`,`${uplay.xdd}`,`${uplay.xddd}`,`${uplay.xdddd}`,`${uplay.d}`,`${uplay.x}`,`${uplay.dx}`,];
	
	let es = Math.floor((Math.random() * uplyy.length));
	
		client.on('message', async msg => {
	
			if (msg.author.bot) return; 
					if (msg.channel.type !== 'text') return;
		
		if (msg.content.startsWith(config.prefix + "genuplay")){
			if(cool.has(msg.author.id)){
				msg.delete();
				return msg.reply(`1 Hour untill next account`)
			
			}
	
			cool.add(msg.author.id)
			
			var dominik = new Discord.RichEmbed()
			.setAuthor(`@${msg.author.tag} Generate An Account`, `${msg.author.displayAvatarURL}`)
			.setTitle(`**I sent a Uplay account to your DMs :thumbsup:**`)     
			.setThumbnail(`https://cdn.discordapp.com/attachments/554408505520554079/560856201462677516/images.png`)                       
			.setColor("BLUE")
			
			msg.channel.send(dominik);
	
			var elo = new Discord.RichEmbed()
			.setAuthor(`@${msg.author.tag} The Is You Account`, `${msg.author.displayAvatarURL}`)
			.addField(`:arrow_down: **You Account Info**:arrow_down: `, uplyy[es])     
			.setThumbnail(`https://cdn.discordapp.com/attachments/554408505520554079/560856201462677516/images.png`)                       
			.setColor("BLUE")
	
			msg.author.send(elo);
		}
		})

	client.on('message', async msg => {

		if (msg.author.bot) return; 
				if (msg.channel.type !== 'text') return;
	
	if (msg.content.startsWith(config.prefix + "help")){
		var help = new Discord.RichEmbed()
			.setTitle("All Army Commands", `Bot Prefix: ${config.prefix}`, true)
			.addField(`${config.prefix}help`, "All Generator Commands")
			.addField(`${config.prefix}genspotify`, "Spotify Generator")
			.addField(`${config.prefix}genuplay`, "Uplay Generator")
			.addField(`${config.prefix}genfortnite`, "Fortnite Generator")							
			.setColor("RANDOM")
			.setThumbnail(msg.author.avatarURL)
			.setFooter(`@${msg.author.username} Ask For Gen Help!`)
	
		msg.channel.send(help);	
			}
	});
})

	client.on('message', async msg => {

		if (msg.author.bot) return; 
				if (msg.channel.type !== 'text') return;
	
	if (msg.content.startsWith(config.prefix + "stats")){

  const embed = new Discord.RichEmbed()
        .addField("Total | Humans | Bots", `${msg.guild.members.size} | ${msg.guild.members.filter(member => !member.user.bot).size} | ${msg.guild.members.filter(member => member.user.bot).size}`)
    msg.channel.send(embed);
  }
  })

client.login(config.token);