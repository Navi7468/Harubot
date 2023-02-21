const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'commands',
    aliases: ['cmds', 'help'],
    description: 'Shows all commands',
    usage: 'commands <command>',
    category: 'Misc',
    permissions: [],
    async execute(message, args, cmd, client, ErrorEmbed) {
        try {
            const categories = fs.readdirSync('./src/commands');
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Commands')
                .setDescription('Shows all commands')
                .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setTimestamp();
            categories.forEach(category => {
                const dir = client.commands.filter(c => c.category === category);
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);
                try {
                    embed.addFields({ name: `**${capitalise} [${dir.size}]**`, value: dir.map(c => `\`${c.name}\``).join(' ') })
                } catch (e) {
                    console.log(e);
                }
            });
            return message.channel.send({ embeds: [embed] });
        } catch (err) {
            ErrorEmbed.addFields({ name: 'Error', value: `\`${err}\`` })
            client.channels.cache.get('1071567536019226684').send({ embeds: [ErrorEmbed] });
            console.log(err);
        }
    }
}