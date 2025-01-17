const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "everyone" }); //remove the parameters being passed into

const config = require("./config.js");
const { prefix, token } = require("./config.js");
const fs = require("fs");

/**
 * If you need to use other databases or apis that require credentials,
 * you should place them here and add them as a property in the bot object
 */

/**
 * Tips for database/storage
 * If you want a local SQL database, I highly recommend sqlite3
 *      https://www.sqlite.org/index.html https://www.npmjs.com/package/better-sqlite3
 *      npm i sqlite3 && better-sqlite3
 *
 * If you want to use a cloud no-sql database (syncable across multiple instances/bots), I recommend google firestore or mongoDB
 *      https://firebase.google.com/docs/firestore https://www.mongodb.com/
 */

let bot = {client, config, prefix};
/**
 * These add commands, aliases, events, and functions to the client object
 * Discord Collections work like a Map/Dictionary Object
 * To get a specific function from the collection, use
 * client.xxxxxxx.get("name");
 */
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
client.functions = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

/**
 * These functions are used to grab the modules in each corresponding folder
 * whenever the loadxxx() functions are called, the cache will be cleared of the previous data
 * and the new data will be loaded into the collections so you can update code without restarting the
 * entire bot
 */
client.loadCmds = (client, reload) => require(`./handlers/command`)(client, reload);
client.loadFunctions = (client, reload) => require(`./handlers/function`)(client, reload);
client.loadEvents = (client, reload) => require("./handlers/event.js")(client, reload, bot);
client.loadCmds(client, false);
client.loadFunctions(client, false);
client.loadEvents(client, false);

module.exports = bot;
client.login(token);

let i = 0;
// client.on('serverMemberAdd', member => {
//   // Send the message to a designated channel on a server:
//   const channel = member.server.channels.cache.find(ch => ch.name === 'welcome');
//   // Do nothing if the channel wasn't found on this server
//   if (!channel) return;
//   // Send the message, mentioning the member
//     message.channel.send(`Write and run, ${member}, this is a testing server.`);
// });

client.on("message", (message)=>{
    if (message.content == ".createmsg" && message.author.id == "781992168188936224") {
            let i = 1;
            let timer = setInterval(function() {
                message.channel.send(i);
                i++;
                if (i >= 102) {
                    clearInterval(timer);
                }
            }, 100)
    }
    
    if (message.content == ".help aurora") {
        setTimeout(() => {
            message.channel.send("hm...")
            setTimeout(() => {
                message.channel.send("You might just want to check some commands...")
            }, 3000)
        }, 3000)
    }
//     if (message.content == "!collector") {
//         let collector = message.channel.createMessageCollector()

//         collector.on('collect', (message) => {
//             console.log(`Collected ${message.content}`)
//         })

//         collector.on('end', (collected) => {
//             console.log(`Collected ${collected.size} items`)
//         })

//         message.reply('What is your favorite color?')
//     }
});