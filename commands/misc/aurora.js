const Discord = require("discord.js");
module.exports = {
	name: "aurora",
	category: "misc",
	description: "Blanq",
	usage: "Blanq",
	run: async (bot) => {
		let {client, message, args} = bot;
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("#fcba03")
                .setAuthor("FuzzyCheetah's Birthday", "https://images-ext-2.discordapp.net/external/JSgHPXgrNwe7rFZojT4RHhLYWMKtpDV4TFrp3e0_5Vo/%3Fsize%3D512/https/cdn.discordapp.com/avatars/402577512959442955/e04e543372e623565bed7d6379dce7e9.png")
                .setDescription("Happy Birthday!\nDefinitely didn't add ANY easter eggs. :wink:")
        )
        .then(tada => {
            tada.react("🎉")
        })
    }
}