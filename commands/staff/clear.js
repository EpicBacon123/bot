const Discord = require('discord.js');
// import { create, all } from 'mathjs'
// import * as numbers from 'numbers'

const math = require('mathjs');

module.exports = {
    name: "clear",
    category: "staff",
    adminOnly: false,
    description: "Deletes that many number of messages in the channel.",
    run: async (bot) => {
        var {message, prefix, args} = bot;
        let nummsg = 0;
        let nums = " ";
        let hundrednum = 0;
        let leftover = 0;
        let fetched;
        let fetched2;

        if (message.content != `${prefix}clear`) {
            nums = message.content.replace(`${prefix}clear `, "").trim();
            nummsg = parseInt(args, 10);
            fetched = await message.channel.messages.fetch({limit: 1});
            message.channel.bulkDelete(fetched)
            .catch (out => {
            });
            if (nummsg <= 100) {
                fetched = await message.channel.messages.fetch({limit: nummsg});
                message.channel.bulkDelete(fetched);
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setColor("#00FFFF")
                    .setTitle("Delete Messages")
                    .setDescription("**Deleted Messages:\t" + nummsg + "**"));
            }
            else {
                hundrednum = math.floor(nummsg / 100);
                for (let j = 0; j < hundrednum; j++) {
                    fetched = await message.channel.messages.fetch({limit: 100});
                    message.channel.bulkDelete(fetched)
                    .catch (out => {
                    });
                }
                leftover = nummsg % 100;
                if (leftover > 0) {
                    fetched2 = await message.channel.messages.fetch({limit: leftover});
                    message.channel.bulkDelete(fetched2)
                    .catch (out => {
                    });
                }
                message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor("00FFFF")
                        .setTitle("Delete Messages")
                        .setDescription("**Deleted Messages:\t\t\t" + nummsg + "**"));
            }
        }

        else {
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle(":x: Error :x:")
                .setDescription("Please enter the number of messages you want to delete."));
        }
    }
  };
