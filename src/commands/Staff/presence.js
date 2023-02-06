const { ActivityType, EmbedBuilder, PresenceManager, PermissionsBitField, Activity } = require('discord.js');

module.exports = {
    name: 'presence',
    description: 'Sets the presence of the bot.',
    usage: 'presence <type> <status>',
    aliases: ['setpresence', 'setstatus', 'p'],
    category: 'Staff',
    permissions: [PermissionsBitField.Flags.Administrator],
    async execute(message, args, cmd, client, ErrorEmbed) {
        try {
            if (args.length <= 0) return message.channel.send("Please provide a type and status. \n!presence <\`set\`/\`remove\`> <\`online\`/\`idle\`/\`dnd\`/\`invisible\`> <\`playing\`/\`streaming\`/\`listening\`/\`watching\`> <\`name\`>")
            const args0 = args[0].toLowerCase();

            console.log(args.length)
            console.log(args )
            
            if (args0 == "set") {
                if (args.length <= 1) return message.channel.send("Invalid arguments.")
                const args1 = args[1].toLowerCase();

                if (args1 == "avatar") {
                    if (args.length <= 2) return message.channel.send("Invalid arguments.")
                    const args2 = args[2].toLowerCase();

                    if (args2.includes("http")) {
                        client.user.setAvatar(args2)
                        return message.channel.send("Avatar set.")
                    }
                }
                if (args1 == "status") {
                    if (args.length <= 2) return message.channel.send("Invalid arguments.")
                }
                if (args1 == "activity") {
                }
                return message.channel.send("Invalid arguments.\n!presence <\`set\`> <\`avatar\`/\`status\`/\`activity\`> <\`URL\`> <\`online\`/\`idle\`/\`dnd\`/\`invisible\`> <\`playing\`/\`streaming\`/\`listening\`/\`watching\`>")
            }

            if (args0 == "remove") {
                if (args.length > 1) {
                    const args1 = args[1].toLowerCase();

                    if (args1 == "avatar") {
                    }
                    if (args1 == "status") {
                    }
                    if (args1 == "activity") {
                    }
                    return message.channel.send("Invalid arguments.")
                }
            }
            
            console.log("nothing added to args")
            message.channel.send("Invalid arguments.")
        } catch (err) {
            ErrorEmbed.addFields({ name: 'Error', value: `\`${err}\`` })
            client.channels.cache.get('1071567536019226684').send({ embeds: [ErrorEmbed] });
            console.log(err);
        }
    }
}