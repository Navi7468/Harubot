const { ActivityType, EmbedBuilder, PresenceManager, PermissionsBitField, Activity } = require('discord.js');
const status = require('./Bot/status');

module.exports = {
    name: 'status',
    aliases: [],
    description: 'Sets the status of the bot.',
    usage: 'status <\`online\`/\`idle\`/\`dnd\`/\`invisible\`>',
    category: 'Staff',
    permissions: [PermissionsBitField.Flags.Administrator],
    async execute(message, args, cmd, client, ErrorEmbed) {
        let action = 'set';
        if (args[0] == 'remove') action = 'remove';
        status(message, args, cmd, client, action);
    }
}

