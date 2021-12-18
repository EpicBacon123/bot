const random = require('random');
const Discord = require('discord.js');
module.exports = {
    name: "rng",
    category: "random",
    adminOnly: false,
    description: "Generates a number between a minimum and maximum number.",
    run: async (bot) => {
        let {message, prefix} = bot;
        let min = 0;
        let max = 0;
        let out = 0;
        let nums = " ";
        
        const filter = msg => msg.author.userid == message.channel.userid
        const collector = message.channel.createMessageCollector(filter, { time: 10000 });

        message.channel.send("Please enter the minimum number:")
        collector.on("collect", msg => {
            if (message.author.id == msg.author.id) {
                min = parseInt(msg.content, 10)
                message.channel.send("Please enter the maximum number:")
                if (message.author.id == msg.author.id) {
                    max = parseInt(msg.content, 10)
                    out = random.int(min, max)
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setColor("#0000FF")
                            .setTitle(":dvd: __**Random Number Generator**__ :dvd:")
                            .setDescription("**Minimum:\t**" + min + 
                                            "\n**Maximum:\t**" + max +
                                            "\n**Output:** \ " + out)
                    );
                }
            }
        });

        collector.on('end', collected => {
            console.log("rng")
        });
        
        
    } // runs
}; // module export