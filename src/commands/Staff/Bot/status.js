function status(message, args, cmd, client, action) {
    if (action == "set") {
        console.log("Setting status...")
        console.log(args)
        console.log(args.length)
        if (args.length <= 1) return message.channel.send("Invalid arguments.")
        const args1 = args[1].toLowerCase();

        switch (args1) {
            case "online":
                client.user.setPresence({ status: "online" })
                return message.channel.send("Status set to online.")
            case "idle":
                client.user.setPresence({ status: "idle" })
                return message.channel.send("Status set to idle.")
            case "dnd":
                client.user.setPresence({ status: "dnd" })
                return message.channel.send("Status set to dnd.")
            case "invisible":
                client.user.setPresence({ status: "invisible" })
                return message.channel.send("Status set to invisible.")
            default:
                return message.channel.send("Invalid arguments. \n!presence <\`set\`> <\`status\`> <\`online\`/\`idle\`/\`dnd\`/\`invisible\`>")
        }
    }
}

module.exports = status;