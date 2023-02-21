const { ActivityType, EmbedBuilder, PresenceManager, PermissionsBitField, Activity } = require('discord.js');


function activity(message, args, cmd, client, action) {
    if (action == "set") {
        console.log(args);
        console.log(args.length);
        if (args.length <= 2) return message.channel.send("Invalid arguments.");

        const args1 = args[1].toLowerCase();

        switch (args1) {
            case "playing":
                client.user.setPresence({ activity: { name: args.slice(2).join(" "), type: ActivityType.PLAYING } })
                // client.user.setActivity(args.slice(2).join(" "), { type: ActivityType.PLAYING })
                return message.channel.send("Activity set.")
            case "streaming":
                client.user.setPresence({ activity: { name: args.slice(2).join(" "), type: ActivityType.STREAMING } })
                // client.user.setActivity(args.slice(2).join(" "), { type: ActivityType.STREAMING })
                return message.channel.send("Activity set.")
            case "listening":
                client.user.setPresence({ activity: { name: args.slice(2).join(" "), type: ActivityType.LISTENING } })
                // client.user.setActivity(args.slice(2).join(" "), { type: ActivityType.LISTENING })
                return message.channel.send("Activity set.")
            case "watching":
                client.user.setPresence({ activity: { name: args.slice(2).join(" "), type: ActivityType.WATCHING } })
                // client.user.setActivity(args.slice(2).join(" "), { type: ActivityType.WATCHING })
                return message.channel.send("Activity set.")
            default:
                return message.channel.send("Invalid arguments.");
        }
    }
}

module.exports = activity;