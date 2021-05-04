const Discord = require('discord.js');
module.exports = {
    name: "send",
    category: "misc",
    adminOnly: false,
    description: "Returns the message",
    run: async (bot) => {
        var {message, prefix} = bot;
        if (message.content != `${prefix}send`) {
            var mssg = message.content.replace(`${prefix}send`, "").trim();
            message.channel.send(mssg);
        }
        else {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle(":x: Error :x:")
                    .setDescription("Please enter the message you want to send"));
        }
    }
  };
