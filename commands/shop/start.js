const random = require('random');
const Discord = require('discord.js');
module.exports = {
    name: "start",
    category: "shop",
    adminOnly: false, 
    description: "Starts a line of customers for you.",
    run: async (bot) => {
        let {client, message} = bot;
        let customers = ['**Fuzzy Jr.**', '**MayorCheetah**', '**Random Hungry Cheetah**', '**FinderCheetah**'];
        let choose = 0;
        //let stop = false;
        let products = ['**bacon bits**'];
        let msg = "";
        let cooldown = random.int(30, 60) * 100;

        setInterval(() => {
            choose = random.int(1, customers.length); // customer name
            msg = customers[choose - 1] + " has walked into the shop.\n\t\"Can I please have ";
            choose = random.int(1, 10); // amount of products being purchased
            msg += choose + " ";
            if (products.length > 1)
                choose = random.int(1, products.length) - 1; // the product selection
            else
                choose = 0; // if only one product available, only buying that product
            msg += products[choose] + ".\"\nThanks!";
            message.channel.send(msg);
        }, cooldown);

            // choose = random.int(1, customers.length);
            // msg = customers[choose - 1] + " has walked into the shop.\n\t\"Can I please have "
            // choose = random.int(1, 10);
            // msg += choose + " ";
            // if (products.length > 1)
            //     choose = random.int(1, products.length) - 1
            // else
            //     choose = 0;
            // msg += products[choose] + ".\nThanks!\"";
            // message.channel.send(msg);

    }
};