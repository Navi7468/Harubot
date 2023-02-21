const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const tmi = require('tmi.js');

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

const twitch = new tmi.Client({
    channels: ['Navi7468', 'harusaur']
});

twitch.connect();

twitch.on('message', (channel, tags, message, self) => {
    //  'first-msg': true,
    if (self || tags.username == "streamelements") return;
    console.log(tags.username + ': ' + message);
    const args = message.split(/ +/);
    console.log(args);
});

twitch.on('chat', (channel, userstate, message, self) => {
    // console.log(userstate);
    // console.log(message);
});



require('dotenv').config();

client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./src/handlers/${handler}`)(client);
});


client.login(process.env.CLIENT_SECRET);