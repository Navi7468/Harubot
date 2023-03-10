const { Client } = require('discord.js');
const fs = require('fs');

module.exports = (client, Discord) => {
    const { Collection } = require("discord.js");
    client.commands = new Collection();

    const categories = fs.readdirSync('./src/commands/');

    for (const category of categories) {
        const commandFiles = fs.readdirSync(`./src/commands/${category}`).filter(File => File.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${category}/${file}`);

            client.commands.set(command.name, command);
        }
    }
}