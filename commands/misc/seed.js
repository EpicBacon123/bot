const random = require("random");
const Discord = require("discord.js");
module.exports = {
    name: "fseed",
    aliases: ["seed"],
    category: "misc",
    adminOnly: true,
    description: "sends an embed message",
    run: async (bot) => {
        var {client, message, prefix} = bot;
        let title = message.author.username + "'s farm"
        message.channel.send (
            new Discord.MessageEmbed()
                .setColor("#a459b9")
                .setAuthor(title, message.author.avatarURL())
                .setDescription("You planted a seed, but for some reason it's not growing up")
                .addField("What will you do?", "`cry`: Cry\n`plant another`: Plant another seed\n`fight`: Fight the seed")
                )
        client.on("message", (message) => {
            let rand = random.int(4, 5);
            if (message.content == "cry") {
                message.channel.send("**"+ message.author.username+ "** cries\n**"+ message.author.username+ "** floods the land with their tears and dies of dehydration.\n**"+ message.author.username+ "** lost a level!")
            }
            if (message.content == "plant another") {
                message.channel.send("**"+ message.author.username+ "** plants another seed\n**"+ message.author.username+ "** plants another seed and gets "+ rand+ " seeds back.")
            }
            if (message.content == "fight") {
                rand = random.int(0, 4)
                if (rand == 0) {
                    message.channel.send(":crossed_swords: **"+ message.author.username+ "** HITS THE FLOOR WITH THE FISTS...\n**SUCCESS!!** The seed surrendered and **"+ message.author.username+ "** leveled up 20 times\nThe seed also jumped back to your inventory")
                }
                else {
                    message.channel.send(":crossed_swords: **"+ message.author.username+ "** HITS THE FLOOR WITH THE FISTS...\n**FAILED!!** Nothing happened\nHowever, **"+ message.author.username+ "** took the seed from the ground and decided to try planting it again later")
                }
            }
        })

// 		let title = message.author.username + "'s lootbox";
//         let temp = random.int(10, 20);
//         let description = "+ " + temp + " :megalog: MEGA log\n";
//         temp = random.int(0, 4);
//         if (description > 0) {
//             description += "+ " + temp + " :hyperlog: HYPER log\n";
//         }
//         temp = random.int(0, 99);
//         if (temp >= 95) {
//             description += "+ 1 :ultralog: ULTRA log\n";
//         }
//         temp = random.int(3, 8);
//         description += "+ " + temp + " :epicfish: EPIC fish\n";
//         temp = random.int(8, 14);
//         description += "+ " + temp + " :epiccoin: EPIC coin\n+1 coolness";

// 		message.channel.send(
// 			new Discord.MessageEmbed()
// 				.setColor("#a459b9")
// 				.setAuthor(title, message.author.avatarURL())
// 				.setTitle(":OmegaLootbox: OMEGA lootbox opened! :anger: :bot:")
// 				.setDescription(description)
// 		);
    }
  };