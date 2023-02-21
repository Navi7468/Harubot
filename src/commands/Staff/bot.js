const { ActivityType, EmbedBuilder, botManager, PermissionsBitField, Activity } = require('discord.js');
const activity = require('./Bot/activity');
const status = require('./Bot/status');
const avatar = require('./Bot/avatar');

module.exports = {
    name: 'bot',
    aliases: [],
    description: 'Sets the bot of the bot.',
    usage: 'bot <type> <status>',
    category: 'Staff',
    permissions: [PermissionsBitField.Flags.Administrator],
    async execute(message, args, cmd, client, ErrorEmbed) {
        try {
            console.log(message.guild)
            if (message.author.id !== '900835160986099744' || message.author.id !== '798445711406530562' || message.author.id !== message.guild.ownerId) return message.channel.send("You do not have permission to use this command.")
            if (args.length <= 0) return message.channel.send("Please provide a type and status. \n!bot <\`set\`/\`remove\`> <\`online\`/\`idle\`/\`dnd\`/\`invisible\`> <\`playing\`/\`streaming\`/\`listening\`/\`watching\`> <\`name\`>")
            const args0 = args[0].toLowerCase();


            if (args0 == "set") {
                if (args.length <= 1) return message.channel.send("Invalid arguments.\n!bot <\`set\`> <\`avatar\`/\`status\`/\`activity\`> <\`URL\`> <\`online\`/\`idle\`/\`dnd\`/\`invisible\`> <\`playing\`/\`streaming\`/\`listening\`/\`watching\`>");
                const args1 = args[1].toLowerCase();
                if (args1 == "avatar") return avatar(message, args, cmd, client, 'set');
                if (args1 == "status") return status(message, args, cmd, client, 'set');
                if (args1 == "activity") return activity(message, args, cmd, client, 'set');
                return message.channel.send("Invalid arguments.\n!bot <\`set\`> <\`avatar\`/\`status\`/\`activity\`> <\`URL\`> <\`online\`/\`idle\`/\`dnd\`/\`invisible\`> <\`playing\`/\`streaming\`/\`listening\`/\`watching\`>");
            }

            if (args0 == "remove") {
                if (args.length > 1) {
                    const args1 = args[1].toLowerCase();
                    if (args1 == "avatar") return avatar(message, args, cmd, client, 'remove');
                    if (args1 == "status") return status(message, args, cmd, client, 'remove');
                    if (args1 == "activity") return activity(message, args, cmd, client, 'remove');
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