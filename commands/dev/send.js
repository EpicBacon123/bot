module.exports = {
    name: "send",
    category: "dev",
    adminOnly: false,
    description: "Returns the message",
    run: async (bot) => {
        var {message, prefix} = bot;
        if (message.content != `${prefix}send`) {
            var mssg = message.content.replace(`${prefix}send`, "").trim();
        }
        else {
            var mssg = "Please include a message to send.";
        }
        const msg = await message.channel.send(mssg);
    }
  };
