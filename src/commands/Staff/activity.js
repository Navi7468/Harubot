const { ActivityType, EmbedBuilder, PresenceManager, PermissionsBitField, Activity } = require('discord.js');
const activity = require('./Bot/activity');

module.exports = {
    name: 'activity',
    aliases: ['act'],
    description: 'Set the activity of the bot',
    usage: 'activity [type] [status] [name]',
    category: 'Staff',
    permissions: [PermissionsBitField.Flags.Administrator],
    async execute(message, args, cmd, client, ErrorEmbed) {
        let action = 'set';
        if (args[0] === 'remove') action = 'remove';
        activity(message, args, cmd, client, action);
    }
}