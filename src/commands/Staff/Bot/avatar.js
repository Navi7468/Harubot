function avatar(message, args, cmd, client) {
    if (args.length <= 2) return message.channel.send("Invalid arguments.")
    const args2 = args[2].toLowerCase();

    if (args2.includes("http")) {
        client.user.setAvatar(args2)
        return message.channel.send("Avatar set.")
    }
}

module.exports = avatar;