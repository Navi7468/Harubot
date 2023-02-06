const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.GuildScheduledEvent,
        Partials.ThreadMember,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.Channel,
        Partials.Message,
        Partials.User
    ]
});

require('dotenv').config();

// client.on('ready', () => {
//     console.log('HaruBot is ready!');
// });

client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./src/handlers/${handler}`)(client);
});


client.login(process.env.CLIENT_SECRET);