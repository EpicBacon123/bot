const Discord = require('discord.js');
const random = require('random');
module.exports = {
    name: "dice",
    category: "random",
    adminOnly: false,
    description: "Rolls any number of die you want.",
    run: async (bot) => {
        var {message, prefix} = bot;
        let times = 0;
        let result = 0;
        let total = 0;
        let placeholder = "";
        let out = " ";

        if (message.content != `${prefix}dice`) {
            placeholder = message.content.replace(`${prefix}dice `, "").trim();
            times = parseInt(placeholder, 10);
            if (times > 203) {
                message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle(":x: Error :x:")
                        .setDescription("Please enter a smaller amount of die you want to roll."));
            }
            else {
                placeholder = "";

                out = new Discord.MessageEmbed()
                    .setColor("#8833FF")
                    .setTitle(":game_die: Dice Rolls :game_die:")

                for (var i = 0; i < times; i++) {
                    result = random.int(1, 6);
                    total += result;
                    placeholder += "Output:\t" + result + "\n";
                }
                out.setDescription(placeholder + "\nTotal: \t" + total);
                message.channel.send(out);
            }
        }

        else {
            result = random.int(1, 6);
            message.channel.send(
                out = new Discord.MessageEmbed()
                    .setColor("#8833FF")
                    .setTitle(":game_die: Dice Rolls :game_die:")
                    .setDescription("Output: \t" + result));
        }
    }
};