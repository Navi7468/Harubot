const { EmbedBuilder, PermissionsBitField, } = require('discord.js');
module.exports = async (client, message) => {
    if (message.author.bot) return;
    const prefix = "!";


    {


        //// ADD CODE ////


    }


    const args = message.content.slice(prefix.length).split(/ +/); // Get the arguments from the message
    const cmd = args.shift().toLowerCase();
    
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd)); // Get the command from the client
    if (!command && message.content.startsWith(prefix)) return message.channel.send("That is not a command")
    if (message.content[0] !== prefix) return;

    const ErrorEmbed = new EmbedBuilder()
        .setColor("#fc0303")
        .setTitle("__Error__")
        .addFields(
            { name: 'Guild name', value: `${message.guild.name}`, inline: true },
            { name: 'Guild ID', value: `${message.guild.id}`, inline: true },
            { name: 'Command', value: `${cmd}`, inline: true }
        )
        .setTimestamp()

    // Permission Handling
    const validPermissions = [
        PermissionsBitField.Flags.AddReactions,
        PermissionsBitField.Flags.Administrator,
        PermissionsBitField.Flags.AttachFiles,
        PermissionsBitField.Flags.BanMembers,
        PermissionsBitField.Flags.ChangeNickname,
        PermissionsBitField.Flags.Connect,
        PermissionsBitField.Flags.CreateInstantInvite,
        PermissionsBitField.Flags.CreatePrivateThreads,
        PermissionsBitField.Flags.CreatePublicThreads,
        PermissionsBitField.Flags.DeafenMembers,
        PermissionsBitField.Flags.EmbedLinks,
        PermissionsBitField.Flags.KickMembers,
        PermissionsBitField.Flags.ManageChannels,
        PermissionsBitField.Flags.ManageEmojisAndStickers,
        PermissionsBitField.Flags.ManageEvents,
        PermissionsBitField.Flags.ManageGuild,
        PermissionsBitField.Flags.ManageMessages,
        PermissionsBitField.Flags.ManageNicknames,
        PermissionsBitField.Flags.ManageRoles,
        PermissionsBitField.Flags.ManageThreads,
        PermissionsBitField.Flags.ManageWebhooks,
        PermissionsBitField.Flags.MentionEveryone,
        PermissionsBitField.Flags.ModerateMembers,
        PermissionsBitField.Flags.MoveMembers,
        PermissionsBitField.Flags.MuteMembers,
        PermissionsBitField.Flags.PrioritySpeaker,
        PermissionsBitField.Flags.ReadMessageHistory,
        PermissionsBitField.Flags.RequestToSpeak,
        PermissionsBitField.Flags.SendMessages,
        PermissionsBitField.Flags.SendMessagesInThreads,
        PermissionsBitField.Flags.SendTTSMessages,
        PermissionsBitField.Flags.Speak,
        PermissionsBitField.Flags.Stream,
        PermissionsBitField.Flags.UseApplicationCommands,
        PermissionsBitField.Flags.UseApplicationCommands,
        PermissionsBitField.Flags.UseEmbeddedActivities,
        PermissionsBitField.Flags.UseExternalEmojis,
        PermissionsBitField.Flags.UseExternalStickers,
        PermissionsBitField.Flags.UseVAD,
        PermissionsBitField.Flags.ViewAuditLog,
        PermissionsBitField.Flags.ViewChannel,
        PermissionsBitField.Flags.ViewGuildInsights,
    ]

    if (command.permissions.length) {
        let invalidPerms = []
        for (const perm of command.permissions) {
            if (!validPermissions.includes(perm)) {
                return console.log(`Invalid Permissions ${perm}`);
            }

            if (!message.member.permissions.has(perm)) {
                invalidPerms.push(perm);
            }
        }
        if (invalidPerms.length && message.author.id != '900835160986099744') {
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
    } 


     // Try to execute the command
     try {
        command.execute(message, args, cmd, client, ErrorEmbed);
    } catch (err) {
        ErrorEmbed.addFields({ name: 'Error', value: `\`${err}\`` })
        message.reply(`there was an error trying to execute that command: \`${err}\``);
        client.channels.cache.get('1071567536019226684').send({ embeds: [embed] });
        console.log(err);
        console.log("Error in command: " + command.name);
    }
}