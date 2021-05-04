const Discord = require("discord.js")
module.exports = {
    name: "copyrpgp",
    aliases: ["crpgp"],
    category: "misc",
    adminOnly: false,
    description: "sends an embed message",
    run: async (bot) => {
        var {client, message, prefix} = bot;
		let title = message.author.username + "'s profile";

		if (message.content == `${prefix}crpgp starter`) {
			message.channel.send(
				new Discord.MessageEmbed()
					.setColor("#a459b9")
					.setAuthor("Starter profile", message.author.avatarURL())
					.setThumbnail(message.author.avatarURL())
					.setDescription('**Normie player**\n')
					.addField('**PROGRESS**',
								'**Level:** 0 (0.0%)\n**XP:** 0/1,000\n**Area:** 1 (Max: 1)')
					.addField('**STATS**',
								':dagger: **AT:** 1\n:shield: **DEF:** 1\n:heart: **LIFE:** 100/100')
					.addField('EQUIPMENT',' :x: [Not enchanted]\n:x: [Not enchanted]\n:x: [No horse]', true)
					.addField('MONEY', ':coin:** Coins:** 0\n:nazar_amulet: **EPIC coins:** 0\n:bank: **Bank:** 0', true)
					.setFooter('Rank: 1000000+', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png')
			);
		}

		else if (message.author.username === "Aurora") {
			message.channel.send(
				new Discord.MessageEmbed()
					.setColor("#a459b9")
					.setAuthor(title, message.author.avatarURL())
					.setThumbnail(message.author.avatarURL())
					.setDescription('**I have enough to feed my kids**\n')
					.addField('**PROGRESS**',
								'**Level:** 33 (56.13%)\n**XP:** 76,412/136,125\n**Area:** 6 (Max: 6)')
					.addField('**STATS**',
								':dagger: **AT:** 232\n:shield: **DEF:** 172\n:heart: **LIFE:** 260/260')
					.addField('EQUIPMENT',':dagger: [Ultimate]\n:shield: [Hyper]\n:horse: [GOLDEN]', true)
					.addField('MONEY', ':coin:** Coins:** 0\n:nazar_amulet: **EPIC coins:** 92\n:bank: **Bank:** 5,775,312', true)
					.setFooter('Rank: 45000+', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png')
			);
		}
		else {
			message.channel.send(
				new Discord.MessageEmbed()
					.setColor("#a459b9")
					.setAuthor(title, message.author.avatarURL())
					.setThumbnail(message.author.avatarURL())
					.setDescription('**EDGY PLAYER**\n')
					.addField('PROGRESS',
								'**Level:** 250 (0.0%)\n**XP:** 0/1,000,000,000\n**Area:** 15 (Max: 15)')
					.addField('**STATS**',
								':dagger: **AT:** 2,500\n:shield: **DEF:** 2,500\n:heart: **LIFE:** 5,000/5,000')
					.addField('EQUIPMENT',':dagger: [Godly]\n:shield: [Godly]\n:horse: [SPECIAL]', true)
					.addField('MONEY', ':coin:** Coins:** 0\n:nazar_amulet: **EPIC coins:** 1,000\n:bank: **Bank:** 1,000,000,000', true)
					.setFooter('Rank: 1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png')
			);
		}
    }
  };