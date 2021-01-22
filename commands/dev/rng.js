const random = require('random')
const Discord = require('discord.js')
module.exports = {
    name: "rng",
    category: "dev",
    adminOnly: false,
    description: "Generates a number between 0 and whatever integer you want.\n If you don't enter an integer, the maximum integer is automatically set to 100.",
    run: async (bot) => {
        let {message, prefix} = bot;
        let usid = message.author.id;
        let max = 0;
        let out = 0;
        let nums = " ";
        if (message.content != `${prefix}rng`) {
            nums = message.content.replace(`${prefix}rng `, "").trim();
            max = parseInt(nums, 10)
        }
        else {
            max = 100;
        }

        out = random.int(0, max);
        const msg = await message.channel.send("Calculating...");
        msg.edit("Outcome:\t" + out);
    } // runs
}; // module export
