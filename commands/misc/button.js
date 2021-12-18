const Discord = require('discord.js')

module.exports = {    
    name: "button",
    category: "misc",
    adminOnly: false,
    description: "Shows a button",
    run: async (bot) => {
        var {message, prefix} = bot
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle("Hello")
                .setColor("#FFFFFF")
                .setDescription("testing if discord.js has updated yet")
        )
    }
}