const Discord = require("discord.js")
module.exports = {
    name: "copyrpgp",
    aliases: ["crpgp"],
    category: "dev",
    adminOnly: false,
    description: "sends an embed message",
    run: async (bot) => {
        var { client, message, config } = bot;
 		// await client.loadCmds(client, true);
   //     await client.loadEvents(client, true);
   //     await client.loadFunctions(client, true);

		message.channel.send(
			new Discord.MessageEmbed()
				.setColor("#9922FF")
				.setImage(message.author.avatarURL())
				.setTitle(" Epicbacon123's inventory")
				.setDescription('**EDGY PLAYER**\n')
				.addField('**PROGRESS**\n'+
							'**Level:** 250 (0.0%)\n'+
							'**XP:** 0/1,000,000,000\n'+
							'Area: 15 (Max: 15)')
				.addField('**STATS**\n'+
							':dagger: **AT:** 1,000\n'+
							':shield: **DEF:** 1,000\n'+
							':heart: **LIFE:** 5,000')
				.addField('**EQUIPMENT** \ \ \ **MONEY**\n'+
							':dagger: [Godly] \ \ \ :coin: **Coins** 0\n'+
							':shield: [Godly] \ \ \ :nazar_amulet: **EPIC coins:** 1,000\n'+
							':horse: [SPECIAL] \ \ :bank: **Bank:** 1,000,000,000')
				.addField(' \ RANK: 1')
		)
    }
  }
