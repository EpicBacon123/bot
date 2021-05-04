const random = require('random');
const Discord = require('discord.js');
module.exports = {
    name: "coin",
    category: "random",
    adminOnly: false,
    description: "Flips a coin for heads or tails for you.",
    run: async(bot) => {
        let {message} = bot;
        let rand = random.int(0, 6000);
        if (rand == 0 || (message.author.id == "781992168188936224" && message.content == ".coin flip")) {
            const msg = await message.channel.send("Flipping coin...");
            msg.edit(
                new Discord.MessageEmbed()
                    .setColor("#FFF000")
                    .setTitle(":coin: Coin Flip :coin:")
                    .setDescription("**WOAH WOAH WOAH!!! \nOMG OMG IT LANDED ON THE ITS SIDE!!!**"))
                    .then(tada => {
                        tada.react("🎉")
                    })
        }
        else if (rand > 0 && rand <= 3000) {
            const mssg = await message.channel.send("Flipping coin...");
            mssg.edit(
                new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setTitle(":coin: Coin Flip :coin:")
                    .setDescription("**Result:\tHeads**"))

        }
        else if (rand > 3000) {
            const msg = await message.channel.send("Flipping coin...");
            msg.edit(
                new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setTitle(":coin: Coin Flip :coin:")
                    .setDescription("**Result:\tTails**"));
        }

    }
};