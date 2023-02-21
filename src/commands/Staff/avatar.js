const { ActivityType, EmbedBuilder, PresenceManager, PermissionsBitField, Activity } = require('discord.js');
const avatar = require('./Bot/status');

module.exports = {
    name: 'avatar',
    aliases: [],
    description: 'Sets the avatar of the bot.',
    usage: 'avatar <URL>',
    category: 'Staff',
    permissions: [PermissionsBitField.Flags.Administrator],
    async execute(message, args, cmd, client, ErrorEmbed) {
        let action = 'set';
        if (args[0] == 'remove') action = 'remove';

        avatar(message, args, cmd, client, action);
    }
}

