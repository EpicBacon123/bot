const Discord = require('discord.js');
const random = require('random');
module.exports = {
    name: "card",
    category: "random",
    adminOnly: false,
    description: "Picks a card out of a standard 52-card deck.",
    run: async (bot) => {
        let {client, message} = bot;
        let suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
        let value = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        let s = random.int(0, 3);
        let v = random.int(0, 12);

        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("#00FFFF")
            .setTitle("Card Pick")
            .setDescription("Result: " + value[v] + " of " + suit[s]));
    }
};