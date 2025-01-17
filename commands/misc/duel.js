const Discord = require("discord.js");
const random = require("random");

module.exports = {
    name: "duel",
    category: "misc",
    adminOnly: false,
    description: "Allows you to have a duel with the bot.",
    run: async(bot) => {
        let {message, client} = bot;
        let wOrL = random.int(0, 100);

        const filter = msg => msg.author.userid == message.channel.userid
        const collector = message.channel.createMessageCollector(filter, { time: 5000 });
        
        message.channel.send("Attack, Block, Dodge"); //input a weapon
        collector.on("collect", msg => {
            if ((msg.content == "Attack") && (message.author.id == msg.author.id)) {
                if (msg.author.id == "781992168188936224" || wOrL == 100) {
                    return message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor("#ff6600") //A certain cheating cheetah <= LIESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
                        .setAuthor(message.author.username + " and Botori's Duel", message.author.avatarURL())
                        .setTitle(":anger: Results: :anger:")
                        .setDescription("Bacon! Bamboo! Soy Sauce! Hungwy!\n" + message.author.username + " and Botori had an epic battle, and had a tie!\n"+
                                        "\n**Duel Was Tied!**")
                        );
                }

                else if (wOrL >= 0 && wOrL <= 49) { //Fuzzycheetah neva dies
                    return message.channel.send(
                        new Discord.MessageEmbed()
                        .setColor("#ff6600")
                        .setAuthor(message.author.username + " and Botori's Duel", message.author.avatarURL())
                        .setTitle(":anger: Results: :anger:")
                        .setDescription("Bamboo-zled!\n" + message.author.username + " poked Botori with a stick lots of times!\n"+
                                        "\n**" + message.author.username + " Won the Duel!**"));
                }

                else if (wOrL >= 50 && wOrL <= 99) { //Fuzzycheetah was never here
                    return message.channel.send(
                        new Discord.MessageEmbed()
                            .setColor("#ff6600")
                            .setAuthor(message.author.username + " and Botori's Duel", message.author.avatarURL())
                            .setTitle(":anger: Results: :anger:")
                            .setDescription("After an intense battle\n" + message.author.username + " got sat on by Botori!\n"+
                                            "\n**Botori Won the Duel!**"));
                }
            }
        });

        collector.on('end', collected => {
        });

        // if (message.author.id == "781992168188936224" || wOrL == 100) {
        //     message.channel.send(
        //         new Discord.MessageEmbed()
        //             .setColor("#ff6600")
        //             .setAuthor(message.author.username + " and Botori's Duel", message.author.avatarURL())
        //             .setTitle(":anger: Results: :anger:")
        //             .setDescription("Bam! Wham! Ding! Tock!\n" + message.author.username + " and Botori had an epic battle, and had a tie!\n"+
        //                             "\n**Duel Was Tied!**"))
        //             .then(rct => {
        //                 rct.react("💢");
        //                 rct.react("✨");
        //             });
        // }

        // else if (wOrL >= 0 && wOrL <= 49) {
        //     message.channel.send(
        //         new Discord.MessageEmbed()
        //         .setColor("#ff6600")
        //         .setAuthor(message.author.username + " and Botori's Duel", message.author.avatarURL())
        //         .setTitle(":anger: Results: :anger:")
        //         .setDescription("Bam! Wham! Bah! Ouch!\n" + message.author.username + " beat Botori in a 1 vs 1!\n"+
        //                         "\n**" + message.author.username + " Won the Duel!**"))
        //             .then(rct => {
        //                 rct.react("💢");
        //                 rct.react("✨");
        //             });
        // }

        // else if (wOrL >= 50 && wOrL <= 99) {
        //     message.channel.send(
        //         new Discord.MessageEmbed()
        //             .setColor("#ff6600")
        //             .setAuthor(message.author.username + " and Botori's Duel", message.author.avatarURL())
        //             .setTitle(":anger: Results: :anger:")
        //             .setDescription("BAM! WHAM! OOF! YOWCH!\n" + message.author.username + " got absolutely OBLITERATED by Botori!\n"+
        //                             "\n**Botori Won the Duel!**"))
        //             .then(rct => {
        //                 rct.react("💢");
        //                 rct.react("✨");
        //             });
        // }
    }
};